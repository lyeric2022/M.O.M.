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
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
</svelte:head>


<div class="parent">
<p class = 'mom'> 🧡 Mind of Matter Welcomes You! </p>
  <div class="signup">
    <div class="title">
      <!-- <h1>Mind of Matter welcomes you!</h1> -->
    </div>
    <div class = 'form'>
    <Button on:click={RandomName} /><br />
    <form on:submit|preventDefault={handleSubmit}>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label> Generate A Username! </label><br />
      <input class="user" name="username" bind:value={username} required /> <br />
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label> Password </label><br />
      <input class="pass" name="password" type="password" bind:value={password} required /> <br />
      <button class="submit"> Start Your Journaling Journey...</button>
    </form>
  </div>
  </div>
</div>

  <style>

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
  background-color: #ffffff9e;
  box-shadow: 0 0 0.5rem #ebebeeb8;
  text-align: center;
  padding: 6rem;
  border-radius: 0.25rem;
}

input {
  text-align: center;
  margin: 1rem;
  padding: 2rem 5rem 2rem 5rem;
  font-size: 1rem;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.697);
  border: none;
  border-radius: 10px;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem;
  background-color:  rgb(45, 45, 46);
  font-weight: 600;
  color: white;
  font-size: 1.3rem;
  transition: all 200ms ease;
}

button:hover {
  transform: scale(1.07);
  box-shadow: 0 0 0.6rem ;
  background-color:  rgb(123, 110, 210);
}

label {
  font-size: 1.5rem;
  color: rgb(41, 22, 22);
}

.mom {
  position: absolute;
  font-size: 2rem;
  text-align: center;
  color: hsl(32, 92%, 25%);
}

p {
  margin: 0.5rem;
  font-size: 2rem;
  color:  hsl(32, 92%, 25%);
}
</style>
  