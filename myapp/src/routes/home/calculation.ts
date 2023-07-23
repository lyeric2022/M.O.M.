function Input2(): Array<string> {
  // /* this could come from the url params? definitely! */

  let url = new URL(window.location.href);

  let INPUT_SENTENCES = new Array<string>();
  let value: string[] =
    url.searchParams.get("input")?.toLowerCase().split(".") || []; //Splicing at every ! or . or ? etc.
  value.forEach((v) => {
    let split = v.split(" ");
    split.forEach((s) => INPUT_SENTENCES.push(s));
  });

  return INPUT_SENTENCES;
}

function FindMax(values: Array<number>): number {
  return values.reduce((a, b) => Math.max(a, b));
}

async function FetchFile(filename: string): Promise<any> {
  const FILE = await fetch(filename);
  const DATA = await FILE.json();

  return DATA;
}

async function SumOfJsonValues(): Promise<number> {
  const DATA = await FetchFile("/src/json/weights.json");
  let sum: number = 0;
  for (let key of DATA) {
    sum += Object.values(key).reduce((acc: number, elem: any) => acc + elem, 0);
  }

  return sum;
}

function Calculation(
  score: number,
  max: number,
  jsonValue: number,
  keywords: string[],
  datafile: any
): number {
  const WEIGHT = WeightIncrease(keywords, datafile);

  let math = score / max;
  let math2 = math / (jsonValue * 2 - 1);
  return math2 + WEIGHT;
}

function WeightIncrease(keywords: string[], dataFile: any): number {
  /*
		if an instance of a word is seen more than once, then the original weight plus 0.05 should be added to it
		e.g. --> I am happy and I am happy tomorrow and I am happy.
			Maybe for every instance after the first, we add 0.005 to the original amount?

		-->(1) 0.696 
		-->(2) 0.696 + 0.005
		-->(3) 0.696 + 0.005
	 */

  let score: number = 0;
  const frequency: any = {};
  for (let word of keywords) {
    frequency[word] = (frequency[word] || 0) + 1;
    // checking to see if a frequency of a word (or the count)
    for (let data of dataFile) {
      keywords.forEach((word: string) => {
        if (
          Object.keys(data)?.includes(word) &&
          data[word] < 0 &&
          frequency[word] > 4
        )
          score += 0.05;
        else if (
          Object.keys(data)?.includes(word) &&
          data[word] > 0 &&
          frequency[word] > 4
        )
          score -= 0.05;
      });
    }
  }

  console.log(`The score is ${score}`);
  return score;
}

async function EmphasisWords(score: number): Promise<number> {
  const EMPHASIS = await FetchFile("/src/json/emphasis.json");
  const DATA = await FetchFile("/src/json/weights.json");
  const INPUT = Input2();

  for (let key of DATA) {
    let emphasisFound = false;
    for (let i = 0; i < INPUT.length; i++) {
      if (Object.keys(key)?.includes(INPUT[i])) {
        if (!emphasisFound && EMPHASIS.includes(INPUT[i - 1])) {
          score += 0.005;
          emphasisFound = true;
        } else {
          console.log("There is no emphasis word!");
        }
      }
    }
  }

  return score;
}

export async function SentimentScore(): Promise<number> {
  /* Test number 2 */

  const DATA = await FetchFile("/src/json/weights.json");

  const JSON_VALUE_SUM = await SumOfJsonValues();

  const TEST = Input2();
  let score: number = 0;
  let values = new Array<number>();
  let keywords = new Array<string>();

  for (let key of DATA) {
    TEST.forEach((elem) => {
      if (Object.keys(key)?.includes(elem)) {
        if (elem) score += key[elem];
        values.push(Math.abs(key[elem]));
        keywords.push(elem);
      }
    });
  }
  console.log(keywords);
  const MAX_VALUE = FindMax(values);
  const TOTAL = Calculation(score, MAX_VALUE, JSON_VALUE_SUM, keywords, DATA);
  const EMPHASIS = await EmphasisWords(TOTAL);
  console.log(EMPHASIS);
  return +EMPHASIS.toFixed(2);
}
