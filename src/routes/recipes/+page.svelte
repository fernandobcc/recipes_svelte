<script>
	import Recipes from '$components/pages/recipes/Recipes.svelte';
	import TagLink from '$components/shared/TagLink.svelte';
	import Title from '$components/shared/Title.svelte';
	import { base } from '$app/paths';

	import recipes from '$lib/json/recipes.json';
	import { myList } from '$lib/stores/myList';

	$: filteredRecipes = recipes.filter((recipe) =>
		recipe.ingredients.every((ingredient) => $myList.includes(ingredient))
	);
</script>

<svelte:head>
	<title>APP | Recipes</title>
</svelte:head>

<main>
	<Title tag={'h1'}>Amazing Recipes | Recipes</Title>

	<div class="info">
		<p class="green">Results found: {filteredRecipes.length}</p>
		{#if filteredRecipes.length}
			<p>Check recipe options found with selected options:</p>
		{:else}
			<p>Try to select other or more ingredients</p>
		{/if}
	</div>

	{#if filteredRecipes.length}
		<ul class="recipes">
			{#each filteredRecipes as recipe (recipe.name)}
				<li>
					<Recipes {recipe} />
				</li>
			{/each}
		</ul>
	{/if}

	<div class="edit-list">
		<TagLink href="{base}/">Edit list!</TagLink>
	</div>
</main>

<style>
	.info {
		margin-bottom: 3.375rem;
	}

	.info > p {
		line-height: 2rem;
	}

	.info > p.green {
		color: var(--green);
	}

	.recipes {
		text-align: start;
		margin-bottom: 3.75rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	.recipes > li {
		list-style-type: none;
	}

	.edit-list {
		display: flex;
		justify-content: center;
	}
</style>
