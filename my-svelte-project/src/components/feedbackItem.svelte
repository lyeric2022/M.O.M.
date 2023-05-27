<script>
    import {createEventDispatcher} from 'svelte';
    import Card from './Card.svelte';
    export let item;
    import FeedbackForm from './FeedbackForm.svelte';

    const dispatch = createEventDispatcher();

    const handleDelete = (itemId) => {
        dispatch('delete-item', itemId);
    }
</script>

<Card>
    <div class="num-display">
        {item.rating}
    </div>
    <button class = 'close' on:click={() => handleDelete(item.id)}>X</button>
    <div class="text-display">
        {item.text}
    </div>
</Card>