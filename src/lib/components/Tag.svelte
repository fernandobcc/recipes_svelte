<script lang="ts">
	export let active = false;
	export let size: 'lg' | 'md' = 'md';
</script>

<div class="tag {size}" class:active>
	<slot />
</div>

<style>
	.tag {
		height: 48px;
		border-radius: 8px;
		padding: 1rem;
		text-align: center;
		color: var(--color-main-text);
		background-color: var(--gray);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.active {
		color: var(--white);
		background-color: var(--orange);
	}

	.lg {
		font-size: 1.125rem;
		padding: 1rem 1.5rem;
	}
</style>
