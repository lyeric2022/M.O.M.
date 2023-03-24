<script>
    export let message;
  
    function ShowThankYouMessage() {
      console.log(message);
      return message;
    }
  </script>
  
  <div class='button'>
    <button on:click={ShowThankYouMessage} type='submit'>Click me</button>
  </div>