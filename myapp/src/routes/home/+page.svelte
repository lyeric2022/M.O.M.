<script>
    import { onMount } from "svelte";
    import { Comparison } from "./calculation.ts";
    import Diary from "../components/Diary/Diary.svelte";
  
    let sentiment = 0;
   
  
    onMount(async () => {
      const value = await Comparison();
    
      /* 
        Test and it works! Returns -0.57 which is negative on our scale!

        Test out some random words dependent on the weights.json
      */

      sentiment = value;
    });
  </script>
  
  <p>The sentiment score is {sentiment}</p>

    <!-- To do: Figure out the INPUT URL and use that in CALCULATION.TS -->
  <Diary />

