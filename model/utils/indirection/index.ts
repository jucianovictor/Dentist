export default class Indirection<T> {
	private _value: T;

	constructor(value: T) {
		this._value = value;
	}

	public get value(): T {
		return this._value;
	}

	set value(value: T) {
		this._value = value;
	}
}
