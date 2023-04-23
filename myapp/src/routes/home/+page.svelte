<script>
    import { onMount } from "svelte";
    import { SentimentScore } from "./calculation.ts";
    import NavBar from "../components/Nav/NavBar.svelte";
    import Diary from "../components/Diary/Diary.svelte";
    
    
    let sentiment = 0;


    
   
  
    onMount(async () => {
      const value = await SentimentScore();
      // await POST();
  
      sentiment = value;
    });
  </script>
 <svelte:head>
  <link rel="stylesheet" href="/src/root/root.css">
  <link href="https://fonts.googleapis.com/css2?family=Livvic:wght@800&display=swap" rel="stylesheet">
</svelte:head>

  <div class = 'welcome'>
    <!-- Will be a component -->
    <h1> Welcome back, FunnyBear21!</h1>
    <h4><i>" You're only the best version of yourself when you relax... "</i></h4>
    <h2> Tell us about your day! </h2>
  </div>
    <!-- To do: Figure out the INPUT URL and use that in CALCULATION.TS -->
  <Diary />

  <p>The sentiment score is {sentiment}</p>
  <!-- <NavBar /> -->

  <div class = 'add-a-diary'>
    
  </div>



<style>
  
  h1 {
    font-size: 2.5rem;
  }

  .welcome {
    font-family: 'Livvic', sans-serif;
    text-align: center;
    margin: 9rem;
    color: rgb(238, 237, 237);
  }

</style>