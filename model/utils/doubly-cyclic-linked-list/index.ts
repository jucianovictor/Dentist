class DCNode<T> {
	value: T;
	prev: DCNode<T> | null;
	next: DCNode<T> | null;
	constructor(value: T) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class DCLinkedList<T> {
	head: DCNode<T> | null;
	selected: DCNode<T>;

	constructor() {
		this.head = null;
		this.selected = this.head;
	}

	from(list: T[]): DCLinkedList<T> {
		list.forEach(value => this.append(value));
		return this;
	}

	append(value: T): void {
		const node = new DCNode<T>(value);
		if (!this.head) {
			this.head = node;
			node.next = node;
			node.prev = node;
			this.selected = node;
		} else {
			const tail = this.head.prev;
			this.head.prev = node;
			tail.next = node;
			node.prev = tail;
			node.next = this.head;
		}
	}

	next(): DCNode<T> {
		this.selected = this.selected.next;
		return this.selected;
	}

	prev(): DCNode<T> {
		this.selected = this.selected.prev;
		return this.selected;
	}
}

export { DCNode, DCLinkedList };
