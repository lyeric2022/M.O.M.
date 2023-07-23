<script>
    export let description = ""
    export let date = ""
    export let cat_url = ""

</script>

<div class="card">
    <div class="card-image">
      <figure class="image is-square">
        <img src='${cat_url}' alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src='${cat_url}' alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">[TITLE OF DIARY]</p>
          <p class=" subtitle is-6">{date}</p>
        </div>
      </div>
  
      <div class="content">
        {description}
      </div>

      <div class = "button is-medium is-rounded">
        READ
      </div>
    </div>
  </div>


  <style>
    .card {
        width: 25rem;
        margin: 5rem;
        border-radius: 0.5rem;
    }

    .button {
      background-color: #93B5C6;
      color: #F2F2F2;
    }
  </style>