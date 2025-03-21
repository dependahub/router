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
export const router: Router;
export default router;
declare class Router {
    /**
     * ルートを追加します
     * @param {string} routeName
     * @param {(payload) => Promise<any>} callback
     * @returns {void}
     */
    add(routeName: string, callback: (payload: any) => Promise<any>): void;
    /**
     * ルートを実行します
     * @param {string} routeName
     * @param {any} payload
     * @returns {Promise<any>}
     */
    post(routeName: string, payload: any): Promise<any>;
    #private;
}
//# sourceMappingURL=index.d.ts.map