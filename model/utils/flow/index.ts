export default class Flow<T> {
	private constructor(private value: T) {}

	public static of<N>(value: N): Flow<N> {
		return new Flow<N>(value);
	}

	public map<R>(mapper: (value: T) => R): Flow<R> {
		return Flow.of(mapper(this.value));
	}

	public setAndGetFlow<P extends keyof T>(property: P, value: T[P]): Flow<T> {
		this.value[property] = value;
		return this;
	}

	public setAndGet<P extends keyof T>(property: P, value: T[P]): T {
		this.value[property] = value;
		return this.get();
	}

	public action(consumer: (value: T) => void): Flow<T> {
		consumer(this.value);
		return this;
	}

	public get(): T {
		return this.value;
	}
}
