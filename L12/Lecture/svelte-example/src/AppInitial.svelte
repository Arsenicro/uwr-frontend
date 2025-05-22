<script lang="ts">
  import NestedComponent from "./NestedComponent.svelte";

  const name: string = "alice";
  const src = "https://svelte.dev/svelte-logo-horizontal.svg";
</script>

<main>Hello {name.toUpperCase()}!</main>
<div>Hello2!</div>
<img {src} alt="{name} is here" />
<NestedComponent />

<style>
  div {
    color: red;
  }
</style>
