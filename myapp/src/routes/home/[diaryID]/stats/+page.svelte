<script>
	import { InlineCalendar } from 'svelte-calendar';
	import { base } from '$app/paths';

	const theme = {
		calendar: {
			colors: {
				background: {
					highlight: '#59a64e'
				}
			}
		}
	};
</script>

<svelte:head>
    <link rel="stylesheet" href="node_modules/bulma/css/bulma.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
</svelte:head>

<div class = 'header'>
    <h1> Check out your 365 Day Overview! </h1>
    <p> Here, you can analyze how your days are currently going!</p>
</div>
<body>
    <InlineCalendar {theme} />
</body>
<!--
TODOS:
- Determine colors based on sentiment score
- When a user clicks on the day, their like "links" will pop up and they
    can take a look at them
- Update each color accordingly
-->
<style>
    *{
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }
    body {
      
    }
</style>