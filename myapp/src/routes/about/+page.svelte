
<script context="module">
    import { connectToDatabase, disconnectFromDatabase } from '$lib/db';
    
    // This function is called when the page is loaded
    export async function load() {
      await connectToDatabase();
      console.log('Connected to database!');
    }
  
    // This function is called when the page is unloaded
    export async function unload() {
      await disconnectFromDatabase();
      console.log('Disconnected from database!');
    }
  </script>
  
  <script>
    export let email;
  
    async function handleSubmit(event) {
      event.preventDefault();
      await fetch('/api/register', {
        method: 'POST',
        body: new FormData(event.target),
      });
    }
  </script>

<h1>Testing</h1>



<form method="POST" action = "?/register" on:submit={handleSubmit}>
    <input name = 'email' required bind:value={email} />
    <button type = 'submit'> Submit </button>
</form>