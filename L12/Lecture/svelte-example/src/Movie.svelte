<script lang="ts">
  const { title = "", year }: { title: string; year: number } = $props();
</script>

<li>
  {title} ({year})
</li>
