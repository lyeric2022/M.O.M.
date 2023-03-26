/*  todo #1 -> Diary Input, refer to +page.svelte in /home/ 
	todo #2-> Review some code
	todo #3-> Add the sentence from the user into the json file to determine the ups and downs or the trend
*/
export function Input(value: string[]): string[] {
	// const DEFAULT_INPUT = null;
	// /* this could come from the url params? definitely! */
	// let url = new URL(window.location.href);
	// let value = url.searchParams.get('input')?.split(' ') || [DEFAULT_INPUT];
	return value;
	/* What happens when you stalk ACM CSUF code lol. Anyways we wanna learn about this more before implementing anything */
	/* Returns the value of the key--> http://localhost/?input= { VALUE } */
}

export async function SplicedFile(fileName: string): Promise<Array<Object>> {
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
	console.log(dataMap);

	return dataMap;
}

export async function Comparison(v: string[]): Promise<number> {
	const URL_VALUE = Input(v); // For now just returns the URL value ( need to uncomment code and figure out next part )

	const MAP = await SplicedFile('/src/routes/home/keywords.json');
	// For now just returns the URL value ( need to uncomment code and figure out next part )

	let sentimentScore: number = 0;

	for (let value of Object.values(MAP)) {
		if (value.hasOwnProperty('positive') || value.hasOwnProperty('negative')) {
			/* We can delete this if statement */
			let positiveValue = (value as { positive: string })?.positive ?? []; // Thanks stackoverflow and my udemy courses - Boushra
			let negativeValue = (value as { negative: string })?.negative ?? []; // Thanks stackoverflow and my udemy courses - Boushra
			/* the value contains as object which is negatives/positives value */
			/* How come this worked..? I literally swear to deleted this and then added it back word by word. */
			URL_VALUE.forEach((word) => {
				if (positiveValue.includes(word)) {
					sentimentScore += 1;
				} else if (negativeValue.includes(word)) {
					sentimentScore -= 1;
				}
			});
		}
	}

	let SCORE: number = +(sentimentScore / MAP.length).toFixed(1); // Later figure out more unique way

	return SCORE;
}
