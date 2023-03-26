<script>
    import DiaryInput from "./DiaryInput.svelte";
    import DiaryButton from './DiaryButton.svelte'
    import DiaryDesign from "./DiaryDesign.svelte";
    

    export let message;
  
    function handleSubmit() {
      const PAGE_URL = new URL(`http://localhost:5173/?username=${message}&password=#`);
     
      /* trying to construct a new url */
      return PAGE_URL;
    }
  </script>
  
 
  <DiaryDesign>
    <form>
      <DiaryInput />
      <DiaryButton type='submit'/>
    </form>
  </DiaryDesign>
  