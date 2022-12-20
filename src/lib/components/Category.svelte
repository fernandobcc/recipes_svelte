<script lang="ts">
	import Tag from './Tag.svelte';
	import type ICategory from '$lib/interfaces/ICategory';
	import SelectedIngredient from './SelectedIngredient.svelte';

	export let category: ICategory;
</script>

<div class="category-container">
	<img
		src="icons/category_ingredients/{category.image}"
		alt={category.name}
		class="category-image"
	/>

	<h3 class="category-name">{category.name}</h3>

	<ul class="ingredients">
		{#each category.ingredients as ingredient (ingredient)}
			<li>
				<SelectedIngredient {ingredient} on:addIngredients on:removeIngredients />
			</li>
		{/each}
	</ul>
</div>

<style>
	.category-container {
		width: 300px;
		min-height: 100%;
		background: var(--branco);
		box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.1);
		padding: 0.75rem 0.5rem;
	}

	.category-image {
		margin-bottom: 0.5rem;
	}

	.category-name {
		font-size: 1.125rem;
		color: var(--verde);
		margin-bottom: 0.875rem;
	}

	.ingredients {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem 1rem;
	}
</style>
