<script lang="ts">
	import type { Todo } from '../@types';
	import { addSvg } from '../assets';
	import { todos } from '../store';
	import { setTodosToStorage } from '../utils';

	let todoValue = '';
	let todoList: Todo[];
	todos.subscribe(data => (todoList = data.todoList));

	const clearTodoInput = () => {
		todoValue = '';
	};

	const addTodo = () => {
		if (!todoValue) return alert('Todo 내용을 입력해 주세요');
		todos.addTodo(todoValue);
		setTodosToStorage(todoList);
		clearTodoInput();
	};

	const handleKeyup = (e: KeyboardEvent) => e.key === 'Enter' && addTodo();
	const handleClick = () => addTodo();
</script>

<div class="todo-form">
	<input
		type="text"
		class="todo-form__input"
		placeholder="Add a new todo"
		bind:value={todoValue}
		on:keyup={handleKeyup}
	/>
	<button type="button" class="todo-form__button" on:click={handleClick}>
		<img src={addSvg} alt="addIcon" />
		ADD
	</button>
</div>

<style lang="scss" scoped>
	.todo-form {
		position: absolute;
		width: 80%;
		max-width: $content-width;
		height: $form-height;
		bottom: calc(0px - $form-height / 2);
		display: flex;
		gap: 8px;

		&__input {
			width: 100%;
			height: inherit;
			margin: 0px;
			padding: 16px;
			box-sizing: border-box;
			border-radius: 4px;
			border: 0px;
			background-color: $gray-500;
			transition: 250ms ease-out;
			font-size: 16px;
			color: $gray-100;

			&::placeholder {
				color: $gray-300;
			}

			&:hover,
			&:focus {
				box-shadow: inset 0 0 0 1px $primary-dark;
			}

			&:focus {
				outline: none;
			}
		}

		&__button {
			width: inherit;
			max-width: 90px;
			border-radius: 4px;
			border: 0;
			margin: 0;
			padding: 16px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 4px;
			background-color: $primary-dark;
			color: $gray-100;
			cursor: pointer;
			transition: 250ms ease-out;

			> img {
				width: 16px;
				height: 16px;
			}

			&:hover {
				filter: brightness(80%);
			}
		}
	}
</style>
