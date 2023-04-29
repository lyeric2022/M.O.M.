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
        <br />
       <DiaryButton />
    </form>
</div>

<style>


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
    padding: 30px;
  }

  .input h1 {
    font-size: 36px;
    margin-bottom: 30px;
    color: #ff6347;
    text-align: center;
  }

  .input form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input label {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  .input input[type="text"] {
    font-size: 18px;
    padding: 10px 20px;
    margin-bottom: 30px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .input input[type="submit"] {
    font-size: 20px;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    background-color: #ff6347;
    color: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .input input[type="submit"]:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }


</style>