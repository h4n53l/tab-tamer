<script>
export let url;
let message;

async function getURL(){
    chrome.storage.sync.set({url}).then(() => {
      message = url;

      setTimeout(() => {
        message = null;
      }, 2000);
    });
}
function openTab(){
    window.open('../categories/index.html', '_blank')
}
</script>

<div class=" bg-blue-50 dark:bg-slate-500 min-w-[20rem] p-4 flex flex-col gap-4">

    {#if url}
    <label for="category" class="text-sm text-blue-700 dark:text-white font-bold">Category</label>
    <input 
    class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-blue-500 text-blue-500 dark:text-white placeholder:text-blue-500 dark:!border-blue-400 dark:placeholder:!text-blue-400"
    type="text" 
    id="category" 
    value={url}
    placeholder="Enter Category" 
    >
    {/if}

{#if message}
<p>{message}</p>
{/if}

<div class="flex flex-col align-middle justify-between p-5 m-5">
<button 
class="px-4 py-3 bg-blue-600 m-2 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 hover:shadow-lg hover:shadow-[#6025F5]/50"
      type="button" 
      on:click={getURL}
  >
      <span class="ml-2">SAVE</span>
  </button>
<button 
class="px-4 py-3 bg-white m-2 rounded-md text-blue-600 outline-blue-600 focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5"
      type="button" 
      on:click={openTab}
  >
      <span class="ml-2">MY TABS</span>
  </button>
</div>

</div>
