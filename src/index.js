import {RouterError} from './errors.js';

class Router {
	#route = {};

	/**
	 * ルート名一覧を取得します
	 * @returns {string[]}
	 */
	list() {
		return Object.keys(this.#route);
	}

	/**
	 * ルートを追加します
	 * @param {string} routeName
	 * @param {(payload) => Promise<any>} callback
	 * @returns {void}
	 */
	add(routeName, callback) {
		if (this.#route[routeName]) {
			const error = new RouterError('Route already exists');
			error.statusText = 'Conflict';
			error.status = 409;
			throw error;
		}

		this.#route[routeName] = callback;
	}

	/**
	 * ルートを実行します
	 * @param {string} routeName
	 * @param {any} payload
	 * @returns {Promise<any>}
	 */
	async post(routeName, payload) {
		const handler = this.#route[routeName];
		if (!handler) {
			const error = new RouterError('Route not found');
			error.statusText = 'NotFound';
			error.status = 404;
			throw error;
		}

		return handler(payload);
	}
}

/**
 * 関数ルーター
 * @type {Router}
 * @example
 * import router from '@dependahub/router';
 *
 * // ルートを追加
 * router.add('RouteName', async payload => {
 * 	const {param} = payload;
 * 	return param * 3;
 * }
 *
 * // ルートを呼び出し
 * const response = await router.post('RouteName', {
 * 	param: 3,
 * });
 *
 * console.log(response); // 9
 */
export const router = new Router();
export default router;
