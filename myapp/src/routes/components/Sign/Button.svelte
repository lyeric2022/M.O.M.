<button type = 'click'> 🎲 </button>

<style>
    
 
  @keyframes wiggle {
    0% { transform: rotate(0deg); }
   80% { transform: rotate(0deg); }
   85% { transform: rotate(5deg); }
   95% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

button {
    background: none;
    border: none;
    font-size: 4rem;
    display: flex;
    cursor: pointer;
    position: absolute;
    transition: all 500ms ease;
    left: 4rem;
    top: 12rem;
    animation: wiggle 1s infinite;
}

button:hover {
  transform: scale(1.1px);
}

</style>