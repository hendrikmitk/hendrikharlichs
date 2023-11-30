import waitOn from 'wait-on';
import { exec } from 'child_process';
import { chromium } from 'playwright';
import { readdirSync, readFileSync } from 'fs';

const options = {
	protocol: 'http',
	host: '127.0.0.1',
	port: 4174,
	timeout: 10000
};

const url = `${options.protocol}://${options.host}:${options.port}/og-image`;

const generateImagesMetadata = () => {
	const postsDir = './src/lib/posts';

	const notes = readdirSync(postsDir).map((fileName) => {
		const data = readFileSync(`${postsDir}/${fileName}`, 'utf8');

		return {
			title: data.split('\n')[1].substring(7),
			file: fileName.slice(0, -3) + '.png'
		};
	});

	notes.push({
		title: 'Hendrik Harlichs',
		file: 'share.png'
	});

	return notes;
};

let server;

const main = async () => {
	console.info('[INFO] Building SvelteKit application ...');

	server = exec(
		`npm run build && npm run preview -- --host --port ${options.port}`,
		(error) => {
			if (error) {
				console.error(error);
				console.error('[ERROR] Error building SvelteKit application!');
				process.exit(1);
			}
		}
	);

	const [, browser] = await Promise.all([
		waitOn({
			resources: [url],
			timeout: options.timeout
		}),
		chromium.launch()
	]);

	console.info('[INFO] Start generating OG images ...');

	const page = await browser.newPage();

	for (let imageData of generateImagesMetadata()) {
		const query = new URLSearchParams();
		query.append('title', imageData.title);

		await page.goto(`${url}?${query}`);
		await page
			.locator('.og__image')
			.screenshot({ path: `static/${imageData.file}` });
	}

	await browser.close();
};

main()
	.then(() => {
		console.log('[SUCCESS] OG images generated successfully');

		if (server) {
			server.kill(9);
		}

		process.exit(0);
	})
	.catch((err) => {
		console.error(`[ERROR] ${err}`);

		if (server) {
			server.kill(9);
		}

		process.exit(1);
	});
