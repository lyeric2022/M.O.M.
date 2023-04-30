<script>

  import Button from './Button.svelte';
  import { AllNames, RandomID } from './usernames';

  


  export let username = '';
  let password = '';

  function RandomName() {
    const names = AllNames();
    const foundName = names[Math.floor(Math.random() * names.length)];
    console.log(foundName);
    username = foundName;
  }

  function handleClick() {
    console.log("clicked");
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

  
}



</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
</svelte:head>


<p class = 'mom'> 💙 M.O.M. </p>
<div class="parent">
  <div class="signup">
    <div class="title">
      <h1>Mind of Matter welcomes you!</h1>
    </div>
    <div class = 'form'>
    <Button on:click={RandomName} /><br />
    <form on:submit={handleSubmit}>
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
.signup {
  display: flex;
  align-items: center;
}

.title {
  margin: 5rem;
}

.form {
  background-color: #1134e59e;
  box-shadow: 0 0 0.5rem #1134e5b8;
  text-align: center;
  padding: 3rem;
  border-radius: 0.25rem;
}
h1 {

  color: #5244A8;
  font-size: 3rem;
 
  text-shadow: 0.2rem 0.2rem 0.15rem rgba(21, 37, 94, 0.44);
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
  background-color:  rgb(94, 81, 183);
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
  color: white;
}

.mom {
  margin: 1rem;
  font-size: 2rem;
  color: rgba(68, 94, 225, 0.866);
}

</style>
  