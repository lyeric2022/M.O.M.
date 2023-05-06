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
       <h2> Tell us about your day!</h2>
        <textarea size = '20' class = 'text' name ='input' required /> 
        <br />
       <DiaryButton />
    </form>
</div>

<style>

* {
  font-family: "Poppins", sans-serif;
}
/* Customize the Bootstrap styles to your liking */


/* Add styles for your component */
.input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    max-width: 500px;
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 50px 10px;
  }

  .input form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
     color: rgb(217, 188, 119);
     font-size: 2rem;
     text-transform: uppercase;
  }

  


</style>