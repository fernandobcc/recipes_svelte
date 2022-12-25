<script lang="ts">
	import Tag from './Tag.svelte';

	export let href: string;
	export let disabled: boolean = false;
</script>

<a {href} class="button">
	<Tag active={true} size={'lg'} {disabled}>
		<slot />
	</Tag>
</a>
