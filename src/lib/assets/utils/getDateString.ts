const getDateString = (): string =>
	new Date().toLocaleDateString('en-GB').split('/').splice(1, 2).reverse().join('-');

export default getDateString;
