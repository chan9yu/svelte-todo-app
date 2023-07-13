<script lang="ts">
	import { TodoHeader, TodoInfo, TodoList } from './components';
</script>

<main>
	<TodoHeader />
	<TodoInfo />
	<TodoList />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
