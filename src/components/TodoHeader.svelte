<script lang="ts">
	import { stickyNotesPng } from '../assets';
</script>

<header class="todo-header">
	<img class="todo-header__img" src={stickyNotesPng} alt="title-img" />
	<h1>
		<span class="todo-header__title todo-header__title--primary-dark">To</span>
		<span class="todo-header__title todo-header__title--primary">do</span>
	</h1>
</header>

<style lang="scss" scoped>
	.todo-header {
		display: flex;
		align-items: center;
		gap: 12px;
		position: relative;

		&__img {
			width: 48px;
			height: 48px;
		}

		> h1 {
			display: flex;
		}

		&__title {
			font-size: 40px;
			font-weight: 900;
			line-height: normal;

			&--primary {
				color: $primary;
			}

			&--primary-dark {
				color: $primary-dark;
			}
		}
	}
</style>
