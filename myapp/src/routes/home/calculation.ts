/*  todo #1 -> Diary Input, refer to +page.svelte in /home/ 
	todo #2-> Review some code
	todo #3-> Add the sentence from the user into the json file to determine the ups and downs or the trend + substrings
*/
function Input(): string[] {
	// /* this could come from the url params? definitely! */
	let url = new URL(window.location.href);
	let value = url.searchParams.get('input')?.split(' ') || [];
	console.log(value);
	return value;
	/* What happens when you stalk ACM CSUF code lol. Anyways we wanna learn about this more before implementing anything */
	/* Returns the value of the key--> http://localhost/?input= { VALUE } */
}

async function SplicedFile(fileName: string): Promise<Array<Object>> {
	const response = await fetch(fileName);
	const file: { [key: string]: string }[] = await response.json();
	/* This is saying the key is a string and the value is a string of the object, and the array is an array of objects */

	const dataMap = new Array<Object>();

	for (const value of Object.values(file)) {
		if (typeof value === 'object' && value.hasOwnProperty('positive')) {
			const splittedValue = value.positive.split(' ');
			dataMap.push({ positive: splittedValue });
		}
		if (typeof value === 'object' && value.hasOwnProperty('negative')) {
			const splittedValue = value.negative.split(' ');
			dataMap.push({ negative: splittedValue });
		}
	}
	return dataMap;
}

export async function ComparsionTwo(): Promise<number> {
	/* Test number 2 */
	const FILETWO = await fetch('/src/routes/home/weights.json');
	const DATA = await FILETWO.json();

	const TEST = Input();
	console.log(Object.entries(DATA));

	for (let i of Object.values(DATA)) {
		console.log(i);
	}
	return 1;
}

export async function Comparison(v: string[]): Promise<number> {
	const URL_VALUE = Input(); // For now just returns the URL value ( need to uncomment code and figure out next part )

	const MAP = await SplicedFile('/src/routes/home/keywords.json');
	// For now just returns the URL value ( need to uncomment code and figure out next part )

	const POSITIVE_WORDS = new Array<string>();
	const NEGATIVE_WORDS = new Array<string>();
	let sentimentScore: number = 0;

	for (let value of Object.values(MAP)) {
		/* We can delete this if statement */
		let positiveValue = (value as { positive: string })?.positive ?? []; // Thanks stackoverflow and my udemy courses - Boushra
		let negativeValue = (value as { negative: string })?.negative ?? []; // Thanks stackoverflow and my udemy courses - Boushra
		/* the value contains as object which is negatives/positives value */
		/* How come this worked..? I literally swear to deleted this and then added it back word by word. */
		URL_VALUE.forEach((i) => {
			if (positiveValue.includes(i)) {
				sentimentScore += 1;
				POSITIVE_WORDS.push(i);
			} else if (negativeValue.includes(i)) {
				sentimentScore -= 1;
				NEGATIVE_WORDS.push(i);
			}
		});
	}

	console.log(sentimentScore, URL_VALUE.length);
	console.log(NEGATIVE_WORDS);
	console.log(POSITIVE_WORDS);
	let SCORE: number = +(sentimentScore / URL_VALUE.length).toFixed(1); // Later figure out more unique way

	return SCORE;
}

/*
	the more the instance of a word is seen the more itll weigh by the original weight.

	e.g. --> I am crying. I crying again. I cry. I crying.

	theoretically crying is seen 3 times

	so if the value of crying was like lets say -0.3; 
	if the value is seen more than >= once, it increases its original score by -0.05 and adds it to itself



*/
