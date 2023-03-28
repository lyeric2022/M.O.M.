<script>
    /*
    get its value here, and create url params
    like url.
    
    */

   import DiaryButton from "./DiaryButton.svelte";
   export let message = "";
  
  function handleSubmit() {
    const PAGE_URL = new URL(`http://localhost:5173/?input=${message}`);
   
    /* trying to construct a new url */
    return PAGE_URL;
  }
</script>

<div class = 'input'>
    <form>
        <input size = '30' class = 'text' name ='input' required />
        <DiaryButton on:click:{handleSubmit} />
    </form>
</div>
