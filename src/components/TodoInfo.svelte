<script lang="ts">
	import { countTodo, doneCountTodo } from '../store';
</script>

<div class="todo-info">
	<div class="todo-info__group">
		<span class="todo-info__text todo-info__text--primary-dark">Total todo</span>
		<div class="todo-info__badge">{$countTodo}</div>
	</div>
	<div class="todo-info__group">
		<span class="todo-info__text todo-info__text--primary">Finished</span>
		<div class="todo-info__badge">{$doneCountTodo} / {$countTodo}</div>
	</div>
</div>

<style scoped lang="scss">
	.todo-info {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&__group {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		&__text {
			color: $gray-100;
			font-size: 14px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;

			&--primary-dark {
				color: $primary-dark;
			}

			&--primary {
				color: $primary;
			}
		}

		&__badge {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2px 8px;
			box-sizing: border-box;
			border-radius: 999px;
			background-color: $gray-400;
		}
	}
</style>
