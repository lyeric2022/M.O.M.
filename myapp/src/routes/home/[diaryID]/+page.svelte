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

  <link href="https://fonts.googleapis.com/css2?family=Livvic:wght@800&display=swap" rel="stylesheet">
</svelte:head>
<h2 class = 'welcome'> Welcome back, [USERNAME]<br /><span> Last Logged In: {new Date().toLocaleDateString('en-US')}</span> <br /> <p> Your sentiment { sentiment }</p></h2>

<div class = 'starred section'>
  <h2> Starred Diaires </h2>
  <div class = 'diaires'>
    <div class = 'single-diary'>
      <a href = ""> Diary Day 1 </a>
      <p> Date Written: {new Date().toLocaleDateString('en-US')}</p>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet felis non est posuere pellentesque a sed mi. Mauris gravida ex justo, eget volutpat dolor porta ac. Morbi posuere lectus in interdum semper. Nunc in consectetur quam. Mauris massa nulla, luctus vel leo ac, auctor euismod enim. In hac habitasse platea dictumst. Aliquam consectetur euismod mollis.
      </p>
    </div>
  </div>
</div>

<div class = 'past-week section'>
  <h2> Past Week Diaires </h2>
  <div class = 'diaires'>
    <div class = 'single-diary'>
      <a href = ""> Diary Day 1 </a>
      <p> Date Written: {new Date().toLocaleDateString('en-US')}</p>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet felis non est posuere pellentesque a sed mi. Mauris gravida ex justo, eget volutpat dolor porta ac. Morbi posuere lectus in interdum semper. Nunc in consectetur quam. Mauris massa nulla, luctus vel leo ac, auctor euismod enim. In hac habitasse platea dictumst. Aliquam consectetur euismod mollis.
      </p>
    </div>
  </div>
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
    color: rgb(250, 238, 255);
    box-shadow: 0 0 1rem 0.2rem rgba(128, 0, 255, 0.727);
    background-color: rgb(115, 0, 255);
    position: absolute;
    left: 0;
    top: 0;
    padding: 1.5rem 8rem 1.5rem 1.2rem;
    border-radius: 0 0 3rem 0;
   
  }

  span {
    font-weight: 100;
    font-size: 1.2rem;
  }


  .starred {
    margin-top: 13rem;
  }

  .section h2 {
    border-bottom: solid 0.1rem rgba(96, 13, 108, 0.416);
    max-width: 13rem;
  }

  .section {
    margin-left: 13rem;
    margin-bottom: 3rem;
  }

  .diaires {
    text-align: left;
    margin-top: 1rem;
    box-shadow: 0 0 0.5rem rgb(87, 84, 84);
    padding: 1rem;
    max-width: 65em;
    transition: all 500ms ease;
  }

  .single-diary a {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .diaires:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 0 0.8rem rgb(87, 84, 84);
  }
</style>