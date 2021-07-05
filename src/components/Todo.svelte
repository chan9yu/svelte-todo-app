<script>
  import { todos, saveStorage } from '~/store'

  export let todo

  let isEditMode = false
  let title = ''

  function onEditMode() {
    title = todo.title
    isEditMode = true
  }
  function offEditMode() {
    isEditMode = false
  }
  function upadteTodo() {
    todo.title = title
    saveStorage()
    offEditMode()
  }
  function deleteTodo() {
    $todos = $todos.filter(t => t.id !== todo.id)
    saveStorage()
  }
</script>

<div class="todo">
  {#if isEditMode}
    <div class="edit-mode">
      <input 
        bind:value={title} 
        type="text" 
        class="form-control"
        on:keyup={e => {
          if (e.key === 'Enter') upadteTodo()
        }} />
        <button
          class="btn btn-primary"
          on:click={upadteTodo}>
          OK
        </button>
        <button
          class="btn btn-sescondary"
          on:click={offEditMode}>
          Cancel
        </button>
    </div>
  {:else}
    <div class="normal-mode">
      <div class="title">
        {todo.title}
      </div>
      <button 
        class="btn btn-secondary"
        on:click={onEditMode}>
        Edit
      </button>
      <button 
        class="btn btn-danger"
        on:click={deleteTodo}>
        Delete
      </button>
    </div>
  {/if}
</div>

<style lang="scss">
  .todo {
    padding: 10px 14px;
    border-radius: 6px;
    &:hover {
      background-color: $gray-100;
    }
    .edit-mode,
    .normal-mode {
      display: flex;
    }
    .title {
      flex-grow: 1;
      display:flex;
      align-items: center;
      font-size: 18px;
    }
    .btn {
      flex-shrink: 0;
      margin-left: 10px;
    }
  }
</style>
