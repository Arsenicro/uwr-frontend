export let arr = $state([1, 2, 3]);

export let counter = $state({
  value: 0,
});

export const handleClick = () => {
  console.log("Hello from Svelte!");
  counter.value += 1;
};

/* export const getCounter = () => {
  return counter;
}; */
