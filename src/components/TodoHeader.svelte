<script lang="ts">
	import { todoForm, todos } from '../store';

	const addTodo = () => {
		todos.addTodo($todoForm);
		todoForm.resetForm();
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
