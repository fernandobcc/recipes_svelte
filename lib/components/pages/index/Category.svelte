<script lang="ts">
	import type ICategory from '$lib/interfaces/ICategory';
	import Card from '../../shared/Card.svelte';
	import SelectedIngredient from './SelectedIngredient.svelte';

	export let category: ICategory;
</script>

<Card>
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
					<SelectedIngredient {ingredient} />
				</li>
			{/each}
		</ul>
	</div>
</Card>

<style>
	.category-container {
		padding: 0.75rem 0.5rem;
	}

	.category-image {
		margin-bottom: 0.5rem;
	}

	.category-name {
		font-size: 1.125rem;
		color: var(--green);
		margin-bottom: 0.875rem;
	}

	.ingredients {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem 1rem;
	}
</style>
