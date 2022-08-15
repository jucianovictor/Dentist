import Flow from '.';

it('should get 1', () => expect(Flow.of(1).get()).toBe(1));

it('should map 1 to 2', () =>
	expect(
		Flow.of(1)
			.map(x => x + 1)
			.get()
	).toBe(2));
