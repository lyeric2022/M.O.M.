<script>
    import DiaryInput from "./DiaryInput.svelte";
    import DiaryButton from "./DiaryButton.svelte";
    import DiaryDesign from "./DiaryDesign.svelte";
    
</script>

<DiaryDesign>
    <DiaryInput />
    <DiaryButton message = "hello"/>
    <!-- <p> {message}</p> -->
</DiaryDesign>