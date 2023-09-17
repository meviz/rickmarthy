export const getCharacterIdsFromCharaterUrlList = (characterUrls: string[]): string[] => {
	return characterUrls.map((item) => {
		const splitUrl = item.split("/");
		return splitUrl[splitUrl.length - 1];
	});
};
