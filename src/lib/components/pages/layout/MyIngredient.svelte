<script lang="ts">
	import { fade } from 'svelte/transition';
	import Tag from '$lib/components/shared/Tag.svelte';
	import { myList } from '$lib/stores/myList';

	export let ingredient: string;

	const removeIngredient = () => {
		myList.removeIngredients(ingredient);
	};
</script>

<div class="my-ingredient-container" transition:fade={{ duration: 200 }}>
	<Tag active={true}>
		<button class="close" on:click={removeIngredient} />
		{ingredient}
	</Tag>

	<span
		class="remove"
		on:click={removeIngredient}
		on:keypress={removeIngredient}>Remove</span
	>
</div>

<style>
	.my-ingredient-container {
		position: relative;
	}

	.close {
		background-image: url('/icons/close.svg');
		height: 10px;
		width: 10px;
		cursor: pointer;

		position: absolute;
		top: 4px;
		right: 4px;
	}

	.remove {
		line-height: 24px;
		font-size: 0.875rem;
		color: var(--orange);
		cursor: pointer;
	}
</style>
