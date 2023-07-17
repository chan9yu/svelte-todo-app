<script lang="ts">
	import { onMount } from 'svelte';

	import type { Todo } from '../@types';
	import { todos } from '../store';
	import { getTodosFromStorage } from '../utils';
	import TodoItem from './TodoItem.svelte';

	let todoList: Todo[];
	todos.subscribe(data => (todoList = data.todoList));

	onMount(() => {
		const savedTodoList = getTodosFromStorage();
		todos.set({ editMode: '', todoList: savedTodoList });
	});
</script>

<div>
	<ul>
		{#each todoList as todo (todo.id)}
			<li>
				<TodoItem {todo} />
			</li>
		{/each}
	</ul>
</div>
