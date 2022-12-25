<script lang="ts">
	import '../app.css';

	import Footer from '$components/pages/layout/Footer.svelte';
	import Header from '$components/pages/layout/Header.svelte';
	import MyList from '$components/pages/layout/MyList.svelte';
	import { myList } from '$lib/stores/myList';
</script>

<div class="main-container">
	<Header />
	<div class="main-style">
		{#if $myList.length}
			<div class="my-list-container">
				<MyList />
				<div class="diviser" />
			</div>
		{/if}

		<slot />
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
		background-color: var(--green);
		margin: 0 auto;
	}
</style>
