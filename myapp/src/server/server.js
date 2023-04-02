import express from 'express';
const app = express();
import { readFileSync, writeFileSync } from 'fs';

app.listen(4000, () => {
    console.log('its working');
});

let accounts = [];
app.post('/server', (req, res) => {
    try {
        accounts = readFileSync('./json/accounts.json');
    } catch (err) {
        console.log(err);
    }

    accounts.push(req.body);

    writeFileSync(
        './json/accounts.json',
        JSON.stringify(accounts),
        'utf-8'
      );

})