<script lang="ts">
	import { repository } from '../package.json';
	import { githubSvg } from './assets';
	import { TodoForm, TodoHeader, TodoList } from './components';

	const handleOpenRepositoryTab = () => {
		window.open(repository.url, '_blank');
	};
</script>

<main>
	<div class="todo-app">
		<div class="todo-app__top">
			<TodoHeader />
			<TodoForm />
		</div>
		<TodoList />
	</div>
	<img
		role="presentation"
		class="todo-app__github-icon"
		src={githubSvg}
		alt="github logo"
		on:click={handleOpenRepositoryTab}
		on:keypress={handleOpenRepositoryTab}
	/>
</main>

<style lang="scss">
	.todo-app {
		width: inherit;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;

		&__top {
			width: 100%;
			height: 200px;
			background-color: $gray-700;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
		}

		&__github-icon {
			position: absolute;
			top: 20px;
			right: 30px;
			width: 36px;
			height: 36px;
			cursor: pointer;
			transition: 250ms ease-out;

			&:hover {
				filter: brightness(80%);
			}
		}
	}
</style>
