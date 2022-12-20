<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import MyList from '$components/MyList.svelte';
	import Title from '$components/Title.svelte';

	import categories from '$lib/json/categories.json';
	import Category from '$components/Category.svelte';
	import Tag from '$components/Tag.svelte';
  import Footer from '$components/Footer.svelte';

	let myList: string[] = [];

	const addIngredients = (event: CustomEvent<string>) => {
		const ingredient = event.detail;
		myList = [...myList, ingredient];
	};

	const removeIngredients = (event: CustomEvent<string>) => {
		const ingredient = event.detail;
		myList = myList.filter((item) => item !== ingredient);
	};
</script>

<svelte:head>
	<title>APP | Index</title>
</svelte:head>

<div class="main-container">
	<Header />
	<div class="main-style">
		{#if myList.length}
			<div class="my-list-container">
				<MyList ingredients={myList} />
				<div class="diviser" />
			</div>
		{/if}
		<main>
			<Title tag={'h1'}>Ingredients</Title>
			<div class="info">
				<p>Please select the ingredients you would like to use below:</p>
				<p>*Important: It is assumed that you already have salt, pepper and water at home.</p>
			</div>

			<ul class="categories">
				{#each categories as category (category.name)}
					<li>
						<Category
							{category}
							on:addIngredients={addIngredients}
							on:removeIngredients={removeIngredients}
						/>
					</li>
				{/each}
			</ul>

			<div class="search-recipes">
				<a href="/recipes" class="button">
					<Tag active={true} size={'lg'}>Search recipes!</Tag>
				</a>
			</div>
		</main>
	</div>

	<Footer />
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main-style {
		text-align: center;
		padding: 0 5vw 3.375rem;
		flex: 1;
	}

	.my-list-container {
		margin-bottom: 2rem;
	}

	.diviser {
		width: 40vw;
		height: 2px;
		background-color: var(--verde);
		margin: 0 auto;
	}

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
