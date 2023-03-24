import DiaryInput from './routes/components/DiaryInput.svelte';


function Input(): string[]|null {
    const DEFAULT_INPUT = null;
    /* this could come from the url params? definitely! */
    let url = new URL(window.location.href);
    let value = url.searchParams.get('input')?.split(' ') || DEFAULT_INPUT;
    return value;

    /* Returns the value of the key--> http://localhost/?input= { VALUE } */
}

async function SplicedFile(): Promise<Map<string, string>> {
	/*
    -> Splice each line of the keys of the json file
    -> Return it as a Map object
    */
	const JSON_FILE = './json/keywords.json';

	const file = await fetch(`${JSON_FILE}`);
	const retrieveData = await file.json();

	const dataMap = new Map<string, string>();

	retrieveData.forEach((elem: Object) => {
		const [key, value] = Object.values(elem);
		const splittedValue = value.split(' ');
		splittedValue.forEach((split: string) => dataMap.set(key, splittedValue));
	});

	return dataMap;
}

function Comparison(parsedInput: String, splicedFile: Object): Number {
	let urlValue = Input(); // RETURNS TYPE STRING ARRAY ["Hi", "Nice"]
	let map = SplicedFile(); // RETURNS TYPE MAP [{"key1": ["This", "is", "a", "spliced", "file"]}, {"key2": ["This", "is", "a", "spliced", "file", "two"]} ]

	/*
        Math Wise Ideas -
            -> so if the urlValue exists in the map, add one to the sentiment score
            -> we sort of want to compare the urlValue array to the map
    */

	return 1; // a holder
}
