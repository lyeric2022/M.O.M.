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


<button class = 'heart' > ❤️ </button>

<style>

    section {
        display: none;
    }

    .heart {
        font-size: 2rem;
        background-color: pink;
        border-color: rgb(205, 141, 152);
        border-radius: 50rem;
        align-items: center;
        padding: 0.5rem;
        margin: 0.8rem;
        transition: all 500ms ease;

    }

    .heart:hover {
        transform: scale(1.1) rotateZ(-15deg);
        background-color: rgb(245, 203, 54);
        border-color: rgb(239, 219, 119);
        box-shadow: 0 0rem 2rem rgba(255, 166, 0, 0.759);
    }

    

</style>