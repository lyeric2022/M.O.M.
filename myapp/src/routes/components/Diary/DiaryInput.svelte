<script>
    /*
    get its value here, and create url params
    like url.
    
    */

  
 
   import DiaryButton from "./DiaryButton.svelte";
   export let input = "";
   export let sentiment = "";

   import { SentimentScore } from "../../home/calculation";
   import { page } from "$app/stores";
   
   const diaryID = $page.params.diaryID;

  //  async function GetImage() {
  //   const url = "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=live_gS9i3YjjzvPgn1oJLx7rST5ImWSiDazIZ4sE0ncNeEQskoJAWiwmp7NI7NwminfD";
  //   const img = new Image();
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       const imgURL = data[0].url;

  //       document.body.appendChild(img);
  //     })
  //     .catch(error => console.log(error));

  //     return imgURL;
  //  }

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

    let img = "";
    const url = "https://api.thecatapi.com/v1/images/search?limit=50&api_key=live_gS9i3YjjzvPgn1oJLx7rST5ImWSiDazIZ4sE0ncNeEQskoJAWiwmp7NI7NwminfD";
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        img = data[0].url;
      })
      .catch(error => console.log(error));


    sentiment = await SentimentScore();


    // https://thecatapi.com/thanks
    await fetch('/api/diary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ input, sentiment, img, diaryID })
    });

    

  }
</script>

<div class = 'box'>
    <form on:submit={handleSubmit}>
       <h2> Tell us about your day!</h2>
        <textarea class='textarea text' name ='input' bind:value={input} rows = '10' placeholder="My day today was..." required /> 
        <!-- <textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>-->
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
/* .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    max-width: 500px;
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 50px 10px;
  } */

  .box {
    margin: auto 10rem;
  }
  form {
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