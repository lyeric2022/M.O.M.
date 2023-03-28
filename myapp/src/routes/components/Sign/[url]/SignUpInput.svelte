<script lang="ts">
    import { onMount } from "svelte";
    import Button from "./Button.svelte";
    export let username = "";
    export let password = "";

    function handleSubmit() {
      const PAGE_URL = new URL(`http://localhost:5173/?username=${username}&password=${password}`);
     
      /* trying to construct a new url */
      return PAGE_URL;
    }
   
  
    onMount(() => {
      console.log(username, password);
     
    });
  </script>
  
  <div class="signup">
    <form>
    <input
      class="user"
      name="username"
      bind:value={username}
      required
    />
    <input
      class="pass"
      name="password"
      bind:value={password}
      required
    />
    <Button on:click={handleSubmit} />
    </form>
  </div>
  