/* eslint-disable */
import SDK from './SDK';

let obj = {};
obj = {
	initialize() {
		return SDK.init({
			baseUrl: `http://localhost:3000`
		})
	}
}

// if (process.env.NODE_ENV === 'development') {
// 	obj = {
// 		init() {
// 			return SDK.init({
// 				// baseUrl: `http://stage.grabonrent.com/${window.localStorage.getItem('city') || 'Bangalore'}/api/v2`,
// 				// apiToken: '55cdf3c83a86fd7bdd8fc530829cac',

// 				// baseUrl:'https://www.grabonrent.com/Bangalore/api/v2',
// 				// apiToken: 'c0bd801e442da62c65348481b55301',

// 				baseUrl: 'http://gor.ngrok.io/Bangalore/api/v2',
// 				// apiToken: '8b7a70e18e7fe6038a84261ea917d2', //dheeraj
// 				apiToken: 'c0bd801e442da62c65348481b55301' //aditya
// 			});
// 		},
// 	};
// } else {
// 	obj = {
// 		init() {
// 			const apiToken = process.env.deployEnv === 'staging' ? '55cdf3c83a86fd7bdd8fc530829cac' : 'c0bd801e442da62c65348481b55301';
// 			return SDK.init({
// 				baseUrl: `${window.location.origin}/${window.localStorage.getItem('city') || 'Bangalore'}/api/v2`,
// 				apiToken,
// 			});
// 		},
// 	};
// }

export default obj;
