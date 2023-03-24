import DiaryInput from './routes/components/Diary/DiaryInput.svelte';

function Input(): string[] | null[] {
	const DEFAULT_INPUT = null;
	/* this could come from the url params? definitely! */
	let url = new URL(window.location.href);
	let value = url.searchParams.get('input')?.split(' ') || [DEFAULT_INPUT];
	return value;

	/* Returns the value of the key--> http://localhost/?input= { VALUE } */
}

async function SplicedFile(): Promise<Map<string, string>> {
	const JSON_FILE = './json/keywords.json';

	const file = await fetch(`${JSON_FILE}`);
	const retrieveData = await file.json();

	const dataMap = new Map<string, string>();

	for (const [key, value] of Object.entries(retrieveData)) {
		const splittedValue = (value as string).split(' ');
		splittedValue.forEach((elem: string) => dataMap.set(key, elem));
	}

	return dataMap;
}

async function Comparison(): Promise<number> {
	const URL_VALUE = Input(); // RETURNS TYPE STRING ARRAY ["Hi", "Nice"]
	const MAP = await SplicedFile(); // RETURNS TYPE MAP [{"positive": ["This", "is", "a", "nice", "file"]}, {"key2": ["This", "is", "a", "spliced", "file", "two"]} ]
	let sentimentScore: number = 0;

	// const AWAITING = await MAP;

	/* DOING MATH FOR DIVISION */
	let positive: Array<Object> = [];
	Object.entries(MAP)
		.filter(([key]) => key === 'positive')
		.map(([key, value]) => positive.push(key, value));

	let negative: Array<Object> = [];
	Object.entries(MAP)
		.filter(([key]) => key === 'negative')
		.map(([key, value]) => negative.push(key, value));

	const TOTAL = positive.length + negative.length;

	/* DOING SENTIMENT SCORE */
	let [key, value] = Object.entries(MAP);
	URL_VALUE.forEach((word) => {
		value.forEach((val) => {
			if (key.includes('positive')) {
				if (val?.includes(word)) sentimentScore += 1;
			} else if (key.includes('negative')) {
				if (val?.includes(word)) sentimentScore -= 1;
			}
		});
	});

	/* DOING CALCULATION FOR SCORE */
	let SCORE: number = +(sentimentScore / TOTAL).toFixed(1);

	return SCORE; // a holder
}
/*

 --> 12	.toFixed(1)

	USER INPUTS --> "I am having a nice day but I felt like I was going to cry. I just failed my exam." --> NEUTRAL?
[
	{"positive": "Todays a nice day"}, + 2
	{"negtaive": "I feel like I am going to cry"} - 3
]

        Math Wise Ideas -
            -> so if the URL_VALUE exists in the map, add one to the sentiment score
            -> we sort of want to compare the urlValue array to the map


			--> For each value of the map, we compare the urlValue to it
			--> We look at the key of the map
			--> if the key is positive --> + 1
			--> if the key is negative --> - 1
			--> / size()
    */
