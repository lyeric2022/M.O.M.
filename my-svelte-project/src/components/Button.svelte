<script>
    export let style = 'primary';
    export let disabled = false;
    export let type = 'button';
</script>

<button {type} {disabled} class = {style}>
    <slot></slot>
</button>

<style>
    button:disabled {
        cursor: auto;
        background-color: gray;
    }
</style>