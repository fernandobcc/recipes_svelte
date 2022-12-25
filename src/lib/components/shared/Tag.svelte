<script lang="ts">
	export let active = false;
	export let size: 'lg' | 'md' = 'md';
	export let disabled = false;
</script>

<div class="tag {size}" class:active class:disabled>
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

		transition: all 0.2s ease-in-out;
	}

	.active {
		color: var(--white);
		background-color: var(--orange);
	}

	.lg {
		font-size: 1.125rem;
		padding: 1rem 1.5rem;
	}

	.disabled {
		opacity: 0.8;
		cursor: default;
	}
</style>
