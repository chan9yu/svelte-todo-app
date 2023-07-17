import { derived, writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';

import type { Todo, TodoStore } from '../@types';

const initTodoData: TodoStore = {
	todoList: [],
	editMode: ''
};

const setFormTodo = () => {
	const todoValue = '';
	const { set, subscribe, update } = writable(todoValue);

	return {
		subscribe,
		set,
		update,
		resetForm: () => set('')
	};
};

const setTodoData = () => {
	const todoData = { ...initTodoData };
	const { set, subscribe, update } = writable(todoData);

	const addTodo = (content: string) => {
		if (!content) return alert('빈 값 입니다!');

		const newTodo: Todo = {
			id: uuid(),
			content,
			done: false
		};

		update(todoData => {
			const setData = [...todoData.todoList, newTodo];
			todoData.todoList = setData;
			return todoData;
		});
	};

	const editTodo = (editTodo: Todo) => {
		update(todoData => {
			const setData = todoData.todoList.map(todo => {
				if (todo.id === editTodo.id) todo = editTodo;
				return todo;
			});
			todoData.todoList = setData;
			return todoData;
		});
	};

	const removeTodo = (id: string) => {
		update(todoData => {
			const setData = todoData.todoList.filter(todo => todo.id !== id);
			todoData.todoList = setData;
			return todoData;
		});
	};

	const checkTodo = (id: string) => {
		update(todoData => {
			const setData = todoData.todoList.map(todo => {
				if (todo.id === id) todo.done = !todo.done;
				return todo;
			});
			todoData.todoList = setData;
			return todoData;
		});
	};

	const changeTodoEditMode = (id: string) => {
		update(todoData => {
			todoData.editMode = id;
			return todoData;
		});
	};

	const closeTodoEditMode = () => {
		update(todoData => {
			todoData.editMode = '';
			return todoData;
		});
	};

	return {
		set,
		subscribe,
		addTodo,
		editTodo,
		removeTodo,
		checkTodo,
		changeTodoEditMode,
		closeTodoEditMode
	};
};

const setCountTodo = () => {
	const count = derived(todos, $todo => $todo.todoList.length);
	return count;
};

export const todoForm = setFormTodo();
export const todos = setTodoData();
export const countTodo = setCountTodo();
