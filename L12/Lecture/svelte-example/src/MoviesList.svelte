<script>
  import Movie from "./Movie.svelte";
  import { movies } from "./movies.svelte";
</script>

<ul>
  {#if movies.length === 0}
    <li>No movies found</li>
  {:else}
    {#each movies as movie}
      <Movie title={movie.title} year={movie.year} />
    {/each}
  {/if}
</ul>
