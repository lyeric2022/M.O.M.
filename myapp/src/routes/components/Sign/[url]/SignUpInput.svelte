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

  <svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
  </svelte:head>
  
  <div class = 'parent'>
    
  <div class="signup">
    <div class = 'title'>
      <h1> Mind of Matter welcomes you! </h1>
    </div>
    <form>
      <Button on:click={RandomName} /><br />
       <!-- svelte-ignore a11y-label-has-associated-control -->
     <label> Generate A Username! </label><br />
    <input
      class="user"
      name="username"
      bind:value={username}
      required
    />  <br />
     <!-- svelte-ignore a11y-label-has-associated-control -->
     <label> Password </label><br />
    <input
      class="pass"
      name="password"
      required
    />
   
    </form>
  </div>
</div>

  <style>
.parent {
  position: relative;
}

.signup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%);
}

h1 {

  max-width: 20rem;
  text-shadow: 0.2rem 0.2rem 0.35rem rgba(81, 105, 190, 0.793);
}
input {
  margin: 1rem;
  padding: 2rem 5rem 2rem 5rem;
  font-size: 1rem;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.697);
  border: none;
  border-radius: 10px;
}

</style>
  