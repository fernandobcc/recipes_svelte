<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<div class="main-container">
	<Header />
	<div class="main-style">
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
</style>
