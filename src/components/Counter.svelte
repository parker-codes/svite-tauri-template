<script>
  let count = 0;
</script>

<button on:click={() => count++} class="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
  {count}
</button>