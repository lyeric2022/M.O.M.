<script>
    import { onMount } from "svelte";
    import Design from "../../components/Posts/Design.svelte";
    import { SentimentScore } from "../calculation.ts";
    import NavBar from "../../components/Nav/NavBar.svelte";
    import Diary from "../../components/Diary/Diary.svelte";
    import { page } from "$app/stores";
    
    let username = "";

    export let sentiment = 0;



    async function allPosts() {
    const response = await fetch(`/api/data?diaryID=${JSON.stringify($page.params.diaryID)}`);
    const info = await response.json();

    console.log(JSON.stringify(info)); // Convert the object to JSON string
  return info;
}


   
  /*
     await fetch(url)
      .then(response => response.json())
      .then(data => {
        img = data[0].url;
      })
      .catch(error => console.log(error));


    sentiment = await SentimentScore();

      const response = await fetch(`/api/id?username=${username}`);
  const userID = await response.json();
  console.log(String(JSON.stringify(userID)));
  window.location.replace(`/home/${userID}`);

  */
    onMount(async () => {
      const value = await SentimentScore();
      sentiment = value;

      console.log( await allPosts())
    });
  </script>
 <svelte:head>
  <link rel="stylesheet" href="/src/root/global.css">
  <link rel="stylesheet" href="../node_modules/bulma/css/bulma.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
</svelte:head>
<div class = 'header'>
<!-- <h2 class = 'welcome'> Welcome back, [USERNAME]<br /><span> Last Logged In: {new Date().toLocaleDateString('en-US')}</span> <br /> <p> Your sentiment { sentiment }</p></h2> -->
<div class = 'button-container'>
  <button class="button has-background-info has-text-link-light is-rounded is-large is-fullwidth">+ Share your Story</button> <br />
  <button class="button has-background-info has-text-link-light is-rounded is-large is-fullwidth"> <a href = "stats">+ 365-Day Overview</a></button>
</div>
</div>
  <p>{JSON.stringify($page.params.diaryID)}</p>
    <!-- To do: Figure out the INPUT URL and use that in CALCULATION.TS -->
  <Diary />
  
  <!-- <NavBar /> -->

  <Design />


<style>
   /* @import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css'); */
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
   
  }
  
  a {
    text-decoration: none;
    color: white;
  }

  .welcome {
    text-align: center;
    margin-top: 7rem;
    font-size: 2.5rem;
  }

  .button-container {
    display: flex;
    gap: 1rem;
    text-align: center;
    margin:  8rem;
  }
  
  
  button {
    transition: all 200ms ease;
    margin-top: 1rem;

  }

  button:hover {
    transform: scale(1.05) translateY(-0.5rem);

    box-shadow: 0 0.2rem 2rem rgba(100, 51, 24, 0.576);
  }

  .header {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
   
  }


</style>