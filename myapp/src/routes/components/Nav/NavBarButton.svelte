<script >

// let section = document.querySelector('section');


// function handleClick() {
  
//   if(section.style.display == 'none') {
//     section.style.display = 'inline';
//   }

//   section.style.display = 'none';
// }
</script>

<section>
    <div class = 'containers'>
      <h3> Diary Posts from this week: </h3>
      <ul>
        <li> Gibberish 1 </li>
        <li> Gibberish 2 </li>
        <li> Gibberish 3 </li>
      </ul>
    </div>
</section>


<div class = 'nav-container'>
    <div class = 'nav-elements'>
        <button><img src = "/src/static/home.png" alt = "A House" /></button>
        <button><img src = "/src/static/user.png" alt = "A User" /></button>
        <button><img src = "/src/static/edit.png" alt = "A View Diary Link" /></button>
    </div>
</div>

<style>
  
     
  .nav-elements {
    border-radius: 0px 40px 0px 0px;
    box-shadow: 0 0 0.5rem 0.2rem rgb(131, 22, 208);
    
    background-color: rgb(115, 0, 255);
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 40rem;
    padding: 1.2rem; /* Add padding to the container if desired */
}

.nav-elements button {
   text-align: center;
    display: flex;
    margin-top: 1rem;
    background-color: transparent; /* Remove button background color */
    border: none; /* Remove button border */
    padding: 0; /* Remove button padding */
}

    img {
        width: 25px; /* Adjust this value to the desired width */
        height: auto;
        transition: all 200ms ease;
    }

    section {
        display: none;
    }

    button {
        background: none;
        border: none;
    }

  
    img:hover {
        transform: scale(1.3);
    }
    

</style>