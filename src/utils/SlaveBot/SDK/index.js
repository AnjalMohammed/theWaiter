import { CancelToken } from 'axios';
import SimpleInterface from './SimpleInterface'
import Login from '../FunctionLists/Login';

export default {
	init(opts) {
		const CancelTokenSrc = CancelToken.source();
		opts.CancelTokenSrc = CancelTokenSrc.token;
		const client = SimpleInterface.init(opts);
		return {
			_cancellation: CancelTokenSrc,
			_cancel(message) { CancelTokenSrc.cancel(message); },
			login: Login.init(client),
		};
	},
};
