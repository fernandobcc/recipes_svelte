import { writable } from 'svelte/store';

export const myList = writable<string[]>([]);
