<script lang="ts">
	import { myList } from '$lib/stores/myList';
	import Tag from './Tag.svelte';

	export let ingredient: string;
	let selected = false;

	const onclick = () => {
		selected = !selected;
		if (selected) {
			myList.addIngredients(ingredient);
		} else {
			myList.removeIngredients(ingredient);
		}
	};
</script>

<button on:click={onclick}>
	<Tag active={selected}>{ingredient}</Tag>
</button>

<style>
	button {
		cursor: pointer;
	}
</style>
