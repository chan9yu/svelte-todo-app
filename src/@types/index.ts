export interface Todo {
	id: string;
	content: string;
	done: boolean;
}

export interface TodoStore {
	todoList: Todo[];
	editMode: string;
}
