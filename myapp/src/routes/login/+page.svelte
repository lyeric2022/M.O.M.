<script>


export let username;
export let password;

function handleSubmit() {

}

</script>
<svelte:head>
    <link rel="stylesheet" href="node_modules/bulma/css/bulma.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
</svelte:head>
<div class="parent ">
      <div class="signup ">
        <div class="title">
          <!-- <h1>Mind of Matter welcomes you!</h1> -->
        </div>
        <div class = 'form  has-background-light'>
        <!-- <Button on:click={RandomName} /><br /> -->
        <form on:submit|preventDefault={handleSubmit}>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <div class="block">
          <label> Username </label><br />
          <input class="input is-large is-rounded" type="text" placeholder="Username" name = "user" bind:value={username} required />
          </div>
          <div class = "block">
          <label> Password </label><br />
          <input class="input is-large is-rounded" type="text" placeholder="Password" name = "password" bind:value={password} required />
          </div>
          <button class="button has-background-danger is-rounded">Continue your Journaling Journey...</button>
        </form>
        <div class = "block">
          <p> Don't have an account? Go back to sign up <span><a href = "/login"> here! </a></span></p>
      </div>
      </div>
      </div>
    </div>
<style>

* {
  font-family: "Poppins", sans-serif;
 }
   .parent {
  position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}

.title {
  margin: 5rem;
}

.form {
  text-align: center;
  padding: 6rem;
  border-radius: 0.25rem;
}


button {
  cursor: pointer;
  color: white;
  font-size: 1.3rem;
  transition: all 200ms ease;
}

button:hover {
  transform: scale(1.07);
}

label {
  font-size: 1.5rem;
  color: rgb(41, 22, 22);
}
</style>