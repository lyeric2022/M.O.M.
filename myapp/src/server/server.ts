import { join } from 'path';
import fs from 'fs';

const filePath = './json/accounts.json';

async function readAccounts(): Promise<any> {
	try {
		const DATA = await fs.promises.readFile(filePath, 'utf-8');
		return JSON.parse(DATA);
	} catch (err) {
		console.log(err);
		return [];
	}
}

async function writeAccounts(accounts: string[]): Promise<void> {
	const DATA = JSON.stringify(accounts);
	await fs.promises.writeFile(filePath, DATA, 'utf-8');
}

export const accountsAPI = {
	readAccounts,
	writeAccounts
};
