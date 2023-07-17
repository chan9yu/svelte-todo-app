<script lang="ts">
	import type { Todo } from '../@types';
	import { todoForm, todos } from '../store';
	import { setTodosToStorage } from '../utils';

	let todoList: Todo[];
	todos.subscribe(data => (todoList = data.todoList));

	const addTodo = () => {
		todos.addTodo($todoForm);
		todoForm.resetForm();
		setTodosToStorage(todoList);
	};

	const handleKeyup = (e: KeyboardEvent) => e.key === 'Enter' && addTodo();
	const handleClick = () => addTodo();
</script>

<header>
	<div>
		<h1>TODO LIST</h1>
		<input type="text" bind:value={$todoForm} on:keyup={handleKeyup} />
		<button on:click={handleClick}>ADD</button>
	</div>
</header>
