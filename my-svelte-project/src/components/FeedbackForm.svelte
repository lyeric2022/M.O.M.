<script>
    // ideally wanna import the card as well for styling
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    let text = '';
    let btnDisabled = true;
    let min = 10;
    let message;
    let rating = 10;


    const handleInput = () => {
        if(text.trim().length <= min) {
            message = `Text must be atleast ${min} characters`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }
    }

    const handleSelection = (e) => rating = e.detail; 
    // get value with e . detail 

    let RandomID = (length) => {
        let result = '';
        for (let i = 0; i < length; i++) {
        result += Math.trunc(Math.random() * 10);
        }
        return result;
    }


    const handleSubmit = () => {
        if(text.trim().length > min) {
            const newFeedback = {
                id: RandomID(7), // can also import a library
                text,
                rating: Number(rating),

            }
            console.log(newFeedback)
        }
        return newFeedback;
    }
</script>

<Card>
    <form on:submit|preventDefault={handleSubmit}>
        <!-- rating selection -->
        <RatingSelect on:rating-selection={handleSelection}  />
        <div class="input-group">
            <input type = 'text' on:input = {handleInput} bind:value = {text}  placeholder = 'Give your review!' required>
            <Button  disabled = {btnDisabled} type="submit">Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>