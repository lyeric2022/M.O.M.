<script>
    import { onMount } from "svelte";
   
    import { SentimentScore } from "../calculation.ts";
    import NavBar from "../../components/Nav/NavBar.svelte";
    import Diary from "../../components/Diary/Diary.svelte";
    
    let username = "";

    
    
    export let sentiment = 0;

    onMount(async () => {
      const value = await SentimentScore();
      sentiment = value;
    });
  </script>
 <svelte:head>
  <link rel="stylesheet" href="../node_modules/bulma/css/bulma.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
</svelte:head>
<h2 class = 'welcome'> Welcome back, [USERNAME]<br /><span> Last Logged In: {new Date().toLocaleDateString('en-US')}</span> <br /> <p> Your sentiment { sentiment }</p></h2>
<div class = 'button-container'>
  <button class="button is-danger is-rounded is-large ">+ Share your Story</button>
  <button class="button is-danger is-rounded is-large "> <a href = "stats">+ 365-Day Overview</a></button>
</div>



    <!-- To do: Figure out the INPUT URL and use that in CALCULATION.TS -->
  <Diary />
  
  <NavBar />


<style>
   /* @import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css'); */
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
  }
  
  .welcome {
    text-align: center;
    margin: 4rem;
    font-size: 2.5rem;
  }

  .button-container {
    text-align: center;
  }
  
  
  button {
    transition: all 200ms ease;
    margin-top: 2rem;
    width: 60%;
    
  }

  button:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0.2rem 2rem rgba(100, 51, 24, 0.576);
  }



</style>