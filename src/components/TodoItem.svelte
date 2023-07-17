<script lang="ts">
	import type { Todo } from '../@types';
	import { todos } from '../store';
	import { setTodosToStorage } from '../utils';

	let todoList: Todo[];
	let editMode: string;

	todos.subscribe(data => {
		todoList = data.todoList;
		editMode = data.editMode;
	});

	const handleCheckTodo = () => {
		todos.checkTodo(todo.id);
		setTodosToStorage(todoList);
	};

	const handleEditTodo = () => {
		todos.editTodo(todo);
		todos.closeTodoEditMode();
		setTodosToStorage(todoList);
	};

	const handleChangeTodoEditMode = () => {
		todos.changeTodoEditMode(todo.id);
	};

	const handleRemoveTodo = () => {
		todos.removeTodo(todo.id);
		setTodosToStorage(todoList);
	};

	export let todo: Todo;
</script>

<input type="checkbox" bind:checked={todo.done} on:click={handleCheckTodo} />
{#if editMode === todo.id}
	<input type="text" bind:value={todo.content} on:focusout={handleEditTodo} />
{:else}
	<span role="button" tabindex="0" on:dblclick={handleChangeTodoEditMode}>
		{todo.content}
	</span>
{/if}
<button on:click={handleRemoveTodo}>X</button>
