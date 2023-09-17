const { parse } = JSON;
const { stringify } = JSON;

const storage = {
	clear: (key: string) => {
		if (localStorage && localStorage.getItem(key)) {
			localStorage.removeItem(key);
		}
	},
	clearAppStorage() {
		if (localStorage) localStorage.clear();
	},
	get(key: string) {
		const value = localStorage.getItem(key);
		if (localStorage && value) return parse(value);

		return null;
	},
	set(key: string, value: any) {
		if (localStorage) localStorage.setItem(key, stringify(value));
	},
};

export { storage };
