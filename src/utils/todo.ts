import type { Todo } from '../@types';

const STORAGE_KEY = 'svelte-todo-app' as string;

export const getTodos = (): Todo[] => {
	const storedItems = localStorage.getItem(STORAGE_KEY) || '[]';
	return JSON.parse(storedItems) as Todo[];
};

export const saveTodos = (todoItems: Todo[]) => {
	const serializedItems = JSON.stringify(todoItems);
	localStorage.setItem(STORAGE_KEY, serializedItems);
};
