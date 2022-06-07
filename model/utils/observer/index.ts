export class Observer<T> {
	constructor(
		private _value: T,
		public callbacks: ((value: T) => void)[] = []
	) {
		this._value = _value;
		this.callbacks = callbacks;
	}

	subscribe(callback: (value: T) => void): void {
		this.callbacks.push(callback);
	}

	unsubscribe(callback: (value: T) => void): void {
		this.callbacks.splice(this.callbacks.indexOf(callback), 1);
	}

	update(value: T): void {
		this.value = value;
	}

	notifyAll(): void {
		this.callbacks.forEach(callback => callback(this._value));
	}

	get value(): T {
		return this._value;
	}

	set value(value: T) {
		this._value = value;
		this.notifyAll();
	}
}
