<script lang="ts">
	import '../app.css';

	import Category from '$components/Category.svelte';
	import Title from '$components/Title.svelte';
	import Tag from '$components/Tag.svelte';

	import categories from '$lib/json/categories.json';
	import { myList } from '$lib/stores/myList';
	import { beforeNavigate } from '$app/navigation';

	$: isListEmpty = $myList.length === 0;

	beforeNavigate(async (navigation) => {
		isListEmpty && navigation.to?.route.id === '/recipes'
			? navigation.cancel()
			: null;
	});
</script>

<svelte:head>
	<title>APP | Index</title>
</svelte:head>

<main>
	<Title tag={'h1'}>Ingredients</Title>
	<div class="info">
		<p>Please select the ingredients you would like to use below:</p>
		<p>
			*Important: It is assumed that you already have salt, pepper and water at
			home.
		</p>
	</div>

	<ul class="categories">
		{#each categories as category (category.name)}
			<li>
				<Category {category} />
			</li>
		{/each}
	</ul>

	<div class="search-recipes">
		<a href="/recipes" class="button">
			<Tag active={true} size={'lg'} disabled={isListEmpty}>
				Search recipes!
			</Tag>
		</a>
	</div>
</main>

<style>
	.info {
		margin-bottom: 3.375rem;
	}

	.info > p {
		line-height: 2rem;
	}

	.categories {
		margin-bottom: 4.6875rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	.search-recipes {
		display: flex;
		justify-content: center;
	}
</style>
