const MARKDOWN_DELIMITER = '---';

const trimFrontMatter = (rawString: string): string => {
	const endingDelimiterIndex: number = rawString.indexOf(MARKDOWN_DELIMITER, 1);

	return rawString
		.substring(
			endingDelimiterIndex + MARKDOWN_DELIMITER.length,
			rawString.length + 1
		)
		.trimStart();
};

export default trimFrontMatter;
