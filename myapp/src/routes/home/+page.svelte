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
  <link rel="stylesheet" href="/src/root/global.css">
  <link href="https://fonts.googleapis.com/css2?family=Livvic:wght@800&display=swap" rel="stylesheet">
</svelte:head>
<NavBar />
  <div class = 'welcome'>
    <!-- Will be a component -->
    <h1> Welcome back, FunnyBear21!</h1>
    <h4> Current Date: {new Date().toLocaleDateString('en-US')}</h4>
    <h4><i>" You're only the best version of yourself when you relax... "</i></h4>
 
  
    <h1> Tell us about your day! </h1>
  </div>
    

    <!-- To do: Figure out the INPUT URL and use that in CALCULATION.TS -->
  <Diary />

  <p>The sentiment score is {sentiment}</p>
  <!-- <NavBar /> -->

  <div class = 'add-a-diary'>
    
  </div>



<style>
   /* @import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css'); */
  .welcome {
  background-color: #e3b995;
  border-radius: 30px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  color: #FFF;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin:10px auto;
  max-width: 1500px;
  padding: 50px;
  text-align: center;
}

.welcome h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.welcome h2 {
  font-size: 32px;
  margin-top: 40px;
}

.welcome h4 {
  font-size: 18px;
  font-style: italic;
  margin-bottom: 30px;
}


</style>