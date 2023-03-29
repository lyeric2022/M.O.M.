<script lang="ts">

    import Button from "./Button.svelte";
    export let username = "";

    import { RandomName } from "./page";

    function handleSubmit() {
      const PAGE_URL = new URL(`http://localhost:5173/?username=${username}`);

      /* trying to construct a new url */
      return PAGE_URL;
    }
   
    
   RandomName();
  </script>
  
  <div class="signup">
    <form>
    <input
      class="user"
      name="username"
      bind:value={username}
      required
    />  <Button on:click={RandomName} />
    <br />
    <input
      class="pass"
      name="password"
      
      required
    />
   
    </form>
  </div>
  