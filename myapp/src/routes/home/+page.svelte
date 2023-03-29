<script>
    import { onMount } from "svelte";
    import { SentimentScore } from "./calculation.ts";
    import Diary from "../components/Diary/Diary.svelte";
  
    let sentiment = 0;
   
  
    onMount(async () => {
      const value = await SentimentScore();
    
      /* 
        Test and it works! Returns -0.57 which is negative on our scale!

        Test out some random words dependent on the weights.json
      */

      sentiment = value;
    });
  </script>
 <svelte:head>
  <link rel="stylesheet" href="/src/root/root.css">
</svelte:head>

  <div class = 'welcome'>
    <!-- Will be a component -->
    <h1> Welcome back, [USERNAME]</h1>
    <h4> [RANDOM QUOTE]</h4>
    <h2> Tell us about your day! </h2>
  </div>
    <!-- To do: Figure out the INPUT URL and use that in CALCULATION.TS -->
  <Diary />

  <p>The sentiment score is {sentiment}</p>

<style>

</style>