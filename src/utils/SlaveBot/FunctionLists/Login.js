export default {
	init(initializedBase) {
		const base = initializedBase;
		return {
			logIn(params) {
				return base.details(`/login`, params);
			},
		};
	},
};
