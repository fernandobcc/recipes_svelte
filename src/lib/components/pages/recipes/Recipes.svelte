<script lang="ts">
	import type IRecipe from '$lib/interfaces/IRecipe';
	import Card from '../../shared/Card.svelte';

	export let recipe: IRecipe;
</script>

<Card>
	<img
		src="/images/recipes/{recipe.image}"
		alt={recipe.name}
		class="recipe-img"
	/>

	<div class="recipe-info">
		<h3 class="recipe-name">{recipe.name}</h3>
	</div>
</Card>

<style>
	.recipe-img {
		width: 100%;
		height: 150px;
	}

	.recipe-name {
		font-size: 1.125rem;
	}

	.recipe-info {
		padding: 0.75rem 0.875rem;
	}
</style>
