import { writable, get } from "svelte/store";

export const todos = writable([])
export function saveStorage() {
  localStorage.setItem('todos', JSON.stringify(get(todos)))
}