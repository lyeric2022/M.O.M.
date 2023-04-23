<script>
	  import Diary from "../../Diary/Diary.svelte";
    //import { navigate } from '@sveltejs/kit';
    import Button from "./Button.svelte";
    import { AllNames, RandomID } from "./page";
     let username = "";
     let password = "";
    
  
   

     function RandomName(){
	    let names = AllNames();
      console.log(names)
	    let foundName = names[Math.floor(Math.random() * names.length)];
	    console.log(foundName);
      return foundName;

    }

    username= RandomName();


    /* Fetching Try */

    function handleSubmit(event) {
    event.preventDefault();

    const FORM_DATA = new FormData(event.target);
    console.log(FORM_DATA);
    const DATA = Object.fromEntries(FORM_DATA);

    let newData = {
      ...DATA,
      id: RandomID(12)
    };
    console.log(newData);
    fetch('http://localhost:4000/server', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData)
    });

 
    
  }
  

  function handleClick() {
    navigate('/home');
  }

   
  </script>

  <svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
  </svelte:head>
  
  <div class = 'parent'>
    
  <div class="signup">
    <div class = 'title'>
      <h1> Mind of Matter welcomes you! </h1>
    </div>
    <Button on:click={RandomName} /><br />
    <form on:submit={handleSubmit} >
    
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
      type = 'password'
      required
    /> <br />
    <button  on:click={handleClick} class = 'submit'> Start Your Journaling Journey...</button>
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
  color: rgb(255, 255, 255);
  max-width: 20rem;
  text-shadow: 0.2rem 0.2rem 0.15rem rgba(21, 37, 94, 0.793);
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
  border-radius: 2rem;
  padding: 1rem;
  background-color:  rgb(94, 81, 183);
  font-weight: 600;
  color: white;
  font-size: 0.9rem;
  transition: all 200ms ease;
  margin-left: 50px;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 0.3rem rgb(72, 65, 98);
  background-color:  rgb(75, 64, 144);
}

</style>
  