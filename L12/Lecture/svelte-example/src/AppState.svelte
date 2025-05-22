<script lang="ts">
  import Arr from "./Arr.svelte";
  import { arr, counter, handleClick } from "./state.svelte";

  const double = $derived(counter.value * 2);

  const double3 = $derived.by(() => {
    console.log("Hello from double3");
    const times = Math.random();
    return counter.value * times;
  });

  const getDouble = () => {
    console.log("Hello from getDouble");
    const times = Math.random();
    return counter.value * times;
  };

  console.log("Hello!");
</script>

<button onclick={handleClick}>Click me!</button>
<div>Clicked {counter.value} times</div>
<div>Double v1: {getDouble()}</div>
<div>Double v1: {getDouble()}</div>
<div>Double v1: {getDouble()}</div>
<div>Double v2: {double}</div>
<div>Double v3: {double3}</div>
<div>Double v3: {double3}</div>
<div>Double v3: {double3}</div>

<button onclick={() => arr.push(arr.length + 1)}>
  Add {arr.join(",")} to array
</button>

<Arr />
