import test from 'ava';
import {router} from './index.js';

test('list', t => {
	router.add('rotute1', async payload => {
		const {param} = payload;
		return param * 3;
	});
	const list = router.list();
	t.deepEqual(list, [
		'rotute1',
	]);
});

test('router', async t => {
	router.add('RouteName', async payload => {
		const {param} = payload;
		return param * 3;
	});

	router.add('RouteName2', async payload => {
		const {param} = payload;
		return param * 4;
	});

	const response = await router.post('RouteName', {
		param: 3,
	});

	const response2 = await router.post('RouteName2', {
		param: 3,
	});

	t.is(response, 9);
	t.is(response2, 12);
});

test('router error', async t => {
	await t.throwsAsync(async () => {
		await router.post('RouteName3', {
			param: 3,
		});
	}, {message: 'Route not found'});

	await t.throwsAsync(async () => {
		router.add('RouteName', async payload => {
			const {param} = payload;
			return param * 3;
		});
		router.add('RouteName', async payload => {
			const {param} = payload;
			return param * 3;
		});
	}, {message: 'Route already exists'});
});
