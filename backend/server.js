// opening express on use
const express = require('express');
const cors = require('cors');
const app = express(); 

const { fetchWeatherData, addData } = require('./db');

app.use(express.json()); // use json parsing
app.use(cors());

const port = 5000;



app.get('/api/weather', async(req, res) => {
    res.send(await fetchWeatherData());
});

app.post('/api/weather', (req, res) => {
    res.send("Lisätty: " + JSON.stringify(req.body));
    addData("'" + JSON.stringify(req.body) + "'", '"' + req.body.S_name1 + '"');
});


app.listen(port, () => {
    console.log(`Running in port: ${port}`);
});