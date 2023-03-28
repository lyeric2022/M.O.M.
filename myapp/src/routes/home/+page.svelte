<script>
    import { onMount } from "svelte";
    import { ComparsionTwo, Comparison } from "./calculation.ts";
    import Diary from "../components/Diary/Diary.svelte";
  
    let sentimentScoreGood = 0;
   
  
    onMount(async () => {
      const thisOne = await ComparsionTwo();
      console.log(thisOne);
      const compare = await Comparison(); 
      /* Test and it works! Returns -0.4 which is negative on our scale! Test out some random words dependent on the keywords.json*/
      sentimentScoreGood = compare;
    });
  </script>
  
  <p>The sentiment score is {sentimentScoreGood}</p>

    <!-- To do: Figure out the INPUT URL and use that in CALCULATION.TS -->
  <Diary />

