<script lang="ts">
	import type { Todo } from '../@types';
	import { todos } from '../store';
	import TodoItem from './TodoItem.svelte';

	let todoList: Todo[];
	todos.subscribe(data => (todoList = data.todoList));
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
