<script lang="ts">
	import { onMount } from 'svelte';

	import type { Todo } from '../@types';
	import { paperPng } from '../assets';
	import { TodoInfo, TodoItem } from '../components';
	import { todos } from '../store';
	import { getTodosFromStorage } from '../utils';

	let todoList: Todo[];
	todos.subscribe(data => (todoList = data.todoList));

	onMount(() => {
		const savedTodoList = getTodosFromStorage();
		todos.set({ editMode: '', todoList: savedTodoList });
	});
</script>

<main class="todo-list">
	<TodoInfo />
	{#if todoList.length}
		<ul class="todo-list__wrapper">
			{#each todoList as todo (todo.id)}
				<TodoItem {todo} />
			{/each}
		</ul>
	{:else}
		<div class="todo-list__empty">
			<img class="todo-list__empty__img" src={paperPng} alt="todo item empty" />
			<div class="todo-list__empty__contents">
				<span>내용이 비어있습니다.</span>
				<span>자유롭게 내용을 추가해보세요!</span>
			</div>
		</div>
	{/if}
</main>

<style lang="scss" scoped>
	.todo-list {
		width: 80%;
		max-width: $content-width;
		margin: calc($form-height / 2) 0;
		display: flex;
		flex-direction: column;
		gap: 24px;

		&__wrapper {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		&__empty {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 16px;
			padding: 64px 0;

			&__img {
				width: 48px;
				height: 48px;
			}

			&__contents {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 4px;

				> span {
					color: $gray-300;
				}

				:first-of-type {
					font-weight: 800;
				}

				:last-of-type {
					font-weight: 400;
				}
			}
		}
	}
</style>
