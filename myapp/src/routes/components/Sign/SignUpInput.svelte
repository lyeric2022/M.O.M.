<script>
  import Button from './Button.svelte';
  import { goto } from '$app/navigation';
  import { RandomID } from './usernames';
  // import { _getUserID } from '../../api/sign/+server';
 
 
  export let username = '';
  let password = '';

  let ID = "";

  function RandomName() {
    username = RandomID();
  }


async function handleSubmit() {
  const res = await fetch('/api/sign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  console.log(data);


  const response = await fetch(`/api/id?username=${username}`);
  const userID = await response.json();
  console.log(String(JSON.stringify(userID)));
  window.location.replace(`/home/${userID}`);
}


</script>

<svelte:head>
  <link rel="stylesheet" href="node_modules/bulma/css/bulma.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
</svelte:head>


<div class="parent">
<p class = 'mom has-text-danger'> Mind of Matter Welcomes You! </p>
  <div class="signup">
    <div class="title">
      <!-- <h1>Mind of Matter welcomes you!</h1> -->
    </div>
    <div class = 'form has-background-light'>
    <!-- <Button on:click={RandomName} /><br /> -->
    <form on:submit|preventDefault={handleSubmit}>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <div class="block">
      <label> Generate A Username! </label><br />
      <input class="input is-large is-rounded" type="text" placeholder="Username" name = "user" bind:value={username} required />
      </div>
      <div class = "block">
      <label> Password </label><br />
      <input class="input is-large is-rounded" type="text" placeholder="Password" name = "password" bind:value={password} required />
      </div>
      <button class="button is-danger is-rounded">Start your Journaling Journey...</button>
    </form>
    <div class = "block">
      <p> Already have an account? Login <span><a href = "/login"> here! </a></span></p>
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

.mom {
  text-align: center;
  font-size: 2rem;

}


</style>
  