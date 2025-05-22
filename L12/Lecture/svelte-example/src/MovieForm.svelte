<script lang="ts">
  import { movies } from "./movies.svelte";

  //const { onAdd }: { onAdd: (title: string, year: number) => void } = $props();
  let title = $state("");
  let year: number | undefined = $state();

  const onSubmit = (event: Event) => {
    event.preventDefault();

    console.log("Movie added:", { title, year });

    if (!title || !year) {
      return;
    }

    movies.push({
      title: title,
      year: year,
    });
  };

  const onSubmit2 = (event: Event) => {
    event.preventDefault();

    const form = new FormData(event.target as HTMLFormElement);
    const title = form.get("title");
    const year = form.get("year");
  };
</script>

<form onsubmit={onSubmit}>
  <label for="title">Title</label>
  <input type="text" id="title" name="title" bind:value={title} />

  <label for="year">Year</label>
  <input type="number" id="year" name="year" bind:value={year} />

  <button type="submit">Add Movie</button>
</form>
