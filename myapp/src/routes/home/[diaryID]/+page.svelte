<script>
    import { onMount } from "svelte";
    import Design from "../../components/Posts/Design.svelte";
    import { SentimentScore } from "../calculation.ts";
    import NavBar from "../../components/Nav/NavBar.svelte";
    import Diary from "../../components/Diary/Diary.svelte";
    import { page } from "$app/stores";
    
    let username = "";

    export let sentiment = 0;



  //   async function allPosts() {
  //   const response = await fetch(`/api/data?diaryID=${JSON.stringify($page.params.diaryID)}`);
  //   const info = await response.json();
  //   console.log('here is teh svelte info')
  //   console.log(JSON.stringify(info)); // Convert the object to JSON string
  //   return info;
  // }




  
  

    onMount(async () => {
      const value = await SentimentScore();
      sentiment = value;

      // console.log( await allPosts())

      const response = await fetch(`/api/user?id=${$page.params.diaryID}`);
      const info = await response.json();
      console.log(JSON.stringify(info));
    });
  </script>
 <svelte:head>
  <link rel="stylesheet" href="/src/root/global.css">
  <link rel="stylesheet" href="../node_modules/bulma/css/bulma.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200:400:800&display=swap" rel="stylesheet" />
</svelte:head>
<p class = "spaced">M.O.M. - MIND OF MATTER</p>

<div class = "title">
  <p>Welcome,</p>
  <h1> [USERNAME]</h1>
  <p> Hope your day is going well!</p>
  <p class = "spaced">🐈 JANUARY 20, 2000 | 10:00 🐈</p>
  <p>{JSON.stringify($page.params.diaryID)}</p>
</div>

<div class = 'header'>
<!-- <h2 class = 'welcome'> Welcome back, [USERNAME]<br /><span> Last Logged In: {new Date().toLocaleDateString('en-US')}</span> <br /> <p> Your sentiment { sentiment }</p></h2> -->

<div class = 'button-container'>
  <button class="button has-text-link-light is-rounded is-large is-fullwidth">+ Share your Story</button> <br />
  <button class="button has-text-link-light is-rounded is-large is-fullwidth"> <a href = "stats">+ 365-Day Overview</a></button>
  <button class="button has-text-link-light is-rounded is-large is-fullwidth"> <a href = "stats">+ View All</a></button>
</div>
</div>

    <!-- To do: Figure out the INPUT URL and use that in CALCULATION.TS -->
 
  
  <!-- <NavBar /> -->
  <div class = "section-title">
    <p> MOST RECENT DIARIES </p>
  </div>
  <Design />


  <Diary />
<style>
   /* @import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css'); */
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    font-weight: 800;
   
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
  }
  
  
  button {
    transition: all 200ms ease;
    margin-top: 1rem;
    background-color: #93B5C6;
    border: none;
    box-shadow: 0 0rem 0.6rem rgba(35, 34, 34, 0.5);

  }

  button:hover {
    transform: translateY(-0.5rem);
    background-color: #D7816A;
  }

  .header {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    
   
  }

  .spaced, .title .spaced {
    letter-spacing: 0.4rem;
    font-weight: 200;
    font-size: 1rem;
    color: #A0A0A0;
    text-align: center;
    padding-top: 2rem;
  }

  .title {
    text-align: center;
    padding-top: 2rem;

  }

  .title p {
    font-size: 2rem;
    color: #284B63;
    font-weight: 200;
    margin-top: 1rem;
  }

  .title h1 {
    font-size: 4rem;
    color: #284B63;
  }

  .section-title {
    border-bottom: #284b638c solid 0.15rem;
    width: 55rem;
    margin: auto;
    text-align: center;
    margin-top:  8rem;
    color: #284B63;
    font-size: 2rem;
  }
  

</style>