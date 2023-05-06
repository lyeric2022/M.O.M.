<script>
import FeedbackItem from "./components/feedbackItem.svelte";
import FeedbackList from "./components/feedbackList.svelte";
import FeedbackStats from "./components/FeedbackStats.svelte";
import FeedbackForm from "./components/FeedbackForm.svelte";
    import { each } from "svelte/internal";

let feedback = [
	{
		id: 1,
		rating: 8,
		text: 'Great experience! The staff was friendly and helpful.'
	},
	{
		id: 2,
		rating: 5,
		text: 'The service was okay, but the food could have been better.'
	},
	{
		id: 3,
		rating: 9,
		text: 'I had a fantastic time and would definitely come back again!'
	}
];

$: count = feedback.length;
$: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length;

const deleteFeedBack = (e) => {
	const itemId = e.detail;
	feedback = feedback.filter(elem => elem.id != itemId);
	// 1 2 3
	// if clicked 1 
	// 1 == 1 "false"
	// 1 != 2 " true"
	// 1 != 3 "true"
}

let message;

fetch('test.txt')
  .then(response =>{ 
	response.text();
	console.log(response.text())
})
  .then(data => {
	console.log(data)
    message = data;
  })
  .catch(err => console.error(err));
</script>

<main>
  <h1>{message}</h1>


	<FeedbackForm />
	<FeedbackStats count = {count} average = {average} />
	<h1>Hello</h1>
	<FeedbackList feedback={feedback} on:delete-item = {deleteFeedBack} /> <!-- pasing in feedback-->
</main>

<style>
	
</style>