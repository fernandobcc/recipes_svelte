<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Tag from './Tag.svelte';

	const dispatch = createEventDispatcher<{
		addIngredients: string;
    removeIngredients: string;
	}>();

	export let ingredient: string;
	let selected = false;

	const onclick = () => {
		selected = !selected;
		if (selected) {
			dispatch('addIngredients', ingredient);
		} else {
      dispatch('removeIngredients', ingredient);
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
