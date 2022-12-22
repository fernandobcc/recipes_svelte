import { writable } from 'svelte/store';

const { subscribe, set, update } = writable<string[]>([]);

export const myList = {
	subscribe,
	addIngredients: (item: string) => update((items) => [...items, item]),
	removeIngredients: (item: string) => update((items) => items.filter((i) => i !== item)),
	reset: () => set([])
};
