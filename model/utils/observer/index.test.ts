import { Observer } from './index';

it('should be true', () => {
	const obs = new Observer(false);

	let done = false;

	obs.subscribe(value => {
		done = value;
	});

	obs.update(true);
	expect(done).toBe(true);
});
