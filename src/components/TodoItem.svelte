<script lang="ts">
	import type { Todo } from '../@types';
	import { checkSvg, deleteSvg, editSvg, saveSvg, uncheckSvg } from '../assets';
	import { todos } from '../store';
	import { setTodosToStorage } from '../utils';

	let todoList: Todo[];
	let editMode: string;

	todos.subscribe(data => {
		todoList = data.todoList;
		editMode = data.editMode;
	});

	const handleToggleDone = () => {
		todos.checkTodo(todo.id);
		setTodosToStorage(todoList);
	};

	const editTodo = () => {
		if (!todo.content) return alert('Todo 내용을 입력해 주세요');
		todos.editTodo(todo);
		todos.closeTodoEditMode();
		setTodosToStorage(todoList);
	};

	const handleEditKeyup = (e: KeyboardEvent) => e.key === 'Enter' && editTodo();
	const handleEditClick = () => editTodo();

	const handleChangeTodoEditMode = () => {
		todos.changeTodoEditMode(todo.id);
	};

	const handleDeleteItem = () => {
		todos.removeTodo(todo.id);
		setTodosToStorage(todoList);
	};

	export let todo: Todo;
</script>

<li class="todo-item">
	<!-- doen check box -->
	<img
		class="todo-item__icon"
		src={todo.done ? checkSvg : uncheckSvg}
		alt="check icon"
		role="presentation"
		on:click={handleToggleDone}
		on:keypress={handleToggleDone}
	/>

	<!-- todo contents -->
	{#if editMode === todo.id}
		<input
			class="todo-item__edit-input"
			type="text"
			bind:value={todo.content}
			on:keyup={handleEditKeyup}
		/>
	{:else}
		<span
			class={`todo-item__content ${todo.done ? 'todo-item__content--done' : ''}`}
			role="button"
			tabindex="0"
		>
			{todo.content}
		</span>
	{/if}

	<!-- edit and delete icon -->
	<div class="todo-item__icon-group">
		{#if editMode === todo.id}
			<img
				class="todo-item__icon"
				src={saveSvg}
				alt="save"
				role="presentation"
				on:click={handleEditClick}
			/>
		{:else}
			<img
				class="todo-item__icon"
				src={editSvg}
				alt="edit"
				role="presentation"
				on:click={handleChangeTodoEditMode}
			/>
		{/if}
		<img
			class="todo-item__icon"
			src={deleteSvg}
			alt="delete"
			role="presentation"
			on:click={handleDeleteItem}
		/>
	</div>
</li>

<style lang="scss" scoped>
	.todo-item {
		width: inherit;
		background-color: $gray-500;
		display: flex;
		padding: 16px;
		box-sizing: border-box;
		align-items: center;
		gap: 12px;
		border-radius: 8px;
		border: 1px solid $gray-400;

		&__edit-input {
			flex-grow: 1;
			background-color: transparent;
			border: 0;
			font-size: 13px;
			border-bottom: 1px solid $primary-dark;
			color: $gray-100;

			&:focus {
				outline: none;
			}
		}

		&__content {
			flex-grow: 1;
			color: $gray-100;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			word-break: break-all;

			&--done {
				text-decoration: line-through;
				color: $gray-300;
			}
		}

		&__icon {
			width: 18px;
			height: 18px;
			cursor: pointer;
			border-radius: 50%;
			transition: 250ms ease-out;

			&:hover {
				filter: brightness(80%);
			}
		}

		&__icon-group {
			flex-shrink: 0;
			display: flex;
			gap: 8px;
		}
	}
</style>
