import waitOn from 'wait-on';
import { exec } from 'child_process';
import { chromium } from 'playwright';

const articles = [
	{
		title: 'Speed up your workflow using Git aliases',
		file: '2023-11-05-speed-up-your-workflow-using-git-aliases.png'
	},
	{
		title: 'Build a static Markdown blog with SvelteKit',
		file: '2023-06-17-build-a-static-markdown-blog-with-sveltekit.png'
	},
	{
		title: 'Hello World',
		file: '2023-04-26-hello-world.png'
	}
];

const options = {
	protocol: 'http',
	host: '127.0.0.1',
	port: 4174,
	timeout: 10000
};

const url = `${options.protocol}://${options.host}:${options.port}/og-image`;

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

	for (let article of articles) {
		const query = new URLSearchParams();
		query.append('title', article.title);

		await page.goto(`${url}?${query}`);
		await page
			.locator('.og__image')
			.screenshot({ path: `static/${article.file}` });
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
