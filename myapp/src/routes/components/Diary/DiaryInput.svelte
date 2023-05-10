<script>
    /*
    get its value here, and create url params
    like url.
    
    */

  
   import { page } from "$app/stores";
   import DiaryButton from "./DiaryButton.svelte";
   export let input = "";
   export let sentiment = "";
   import { SentimentScore } from "../../home/calculation";
  
  async function handleSubmit() {
    /*
    DIARY
      - just basically do what i did for the usrename and password kbaob but make sure to include sentiment score!
    USERNAME
      - get the url params using stores
      - fetch /api/user
      - get the returned username and display that!
    */
     
    // DIARY 
    sentiment = await SentimentScore();

    const diary_response = await fetch('/api/diary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({ input, sentiment })
    });
  }
</script>

<div class = 'input'>
    <form on:submit={handleSubmit}>
       <h2> Tell us about your day!</h2>
        <textarea size = '20' class = 'text' name ='input' bind:value={input} required /> 
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