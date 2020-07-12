import axios from "axios";
import { message } from "antd";

export default {
	init(opts) {
		let baseUrl = "";
		let apiToken = "";
		const cancelToken = opts.CancelTokenSrc;
		if (Object.hasOwnProperty.call(opts, "baseUrl")) {
			({ baseUrl } = opts);
		}

		if (Object.hasOwnProperty.call(opts, "apiToken")) {
			({ apiToken } = opts);
		}

		return {
			request(url, method, queryParams, data, contentType) {
				if (!url) {
					throw new Error('Request - URL not defined');
				}

				if (!contentType) {
					contentType = 'application/json';
				}

				if (!queryParams) {
					queryParams = {};
				}

				if (!data) {
					data = {};
				}


				url = baseUrl + url;

				switch (method) {
				case 'GET':
					return this.get(url, queryParams, contentType);

				case 'POST':
					return this.post(url, queryParams, data, contentType);

				case 'PUT':
					return this.put(url, queryParams, data, contentType);

				case 'DELETE':
					return this.del(url, queryParams, data, contentType);

				default:
					throw new Error('Request method not defined');
				}
			},
			get(url, queryParams, contentType) {
				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						'api-token': apiToken,
					},
					params: queryParams,
				};

				if (localStorage.getItem('accessToken')) {
					config.headers["access-token"] = localStorage.getItem('accessToken');
				}


				if (process.env.NODE_ENV === 'development') {
					config.withCredentials = true;
				}

				return axios.get(url, config)
					.catch((error) => {
						if (axios.isCancel(error)) {
							console.log(error.message);
						} else { throw error; }
					});
			},
			post(url, queryParams, data, contentType) {
				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						'api-token': apiToken,
					},
					params: queryParams,
				};

				if (localStorage.getItem('accessToken')) {
					config.headers["access-token"] = localStorage.getItem('accessToken');
				}

				// hardcoded
				// config.headers["access-token"] = '6938bdc3-17df-4482-933d-e591e7e3dcef';

				if (process.env.NODE_ENV === 'development') {
					config.withCredentials = true;
				}

				return axios.post(url, data, config)
					.catch((error) => {
						const { response: { status, data: d } } = error;
						if (status === 400) {
							message.error(d.response);
							throw error;
						} else if (axios.isCancel(error)) {
							console.log(error.message);
						} else { throw error; }
					});
			},


			put(url, queryParams, data, contentType) {
				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						'api-token': apiToken,
					},
					params: queryParams,
				};

				if (localStorage.getItem('accessToken')) {
					config.headers["access-token"] = localStorage.getItem('accessToken');
				}

				if (process.env.NODE_ENV === 'development') {
					config.withCredentials = true;
				}

				return axios.put(url, data, config)
					.catch((error) => {
						const { response: { status, data: d } } = error;
						if (status === 400) {
							message.error(d.response);
							throw error;
						} else if (axios.isCancel(error)) {
							console.log(error.message);
						} else { throw error; }
					});
			},


			del(url, queryParams, contentType) {
				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						'api-token': apiToken,
					},
					params: queryParams,
				};

				if (localStorage.getItem('accessToken')) {
					config.headers["access-token"] = localStorage.getItem('accessToken');
				}

				if (process.env.NODE_ENV === 'development') {
					config.withCredentials = true;
				}

				return axios.delete(url, config)
					.catch((error) => {
						const { response: { status, data: d } } = error;
						if (status === 400) {
							message.error(d.response);
							throw error;
						} else if (axios.isCancel(error)) {
							console.log(error.message);
						} else { throw error; }
					});
			},

			url() {
				return baseUrl;
			},

			customRequest(url, queryParams, contentType) {
				if (!contentType) {
					contentType = 'application/javascript';
				}

				if (!queryParams) {
					queryParams = {};
				}

				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						'api-token': apiToken,
						withCredentials: true,
						'Access-Control-Allow-Origin': '*',
					},
					params: queryParams,
				};

				if (localStorage.getItem('accessToken')) {
					config.headers["access-token"] = localStorage.getItem('accessToken');
				}

				if (process.env.NODE_ENV === 'development') {
					config.withCredentials = true;
				}
				url = `${window.location.origin}${url}`;
				// url = `http://grabonrent.ap.ngrok.io${url}`;

				return axios.delete(url, config)
					.catch((error) => {
						const { response: { status, data: d } } = error;
						if (status === 400) {
							message.error(d.response);
							throw error;
						} else if (axios.isCancel(error)) {
							console.log(error.message);
						} else { throw error; }
					});
			},
		};
	},
};
