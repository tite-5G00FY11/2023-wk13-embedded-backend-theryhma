// opening express on use
const express = require('express');
const cors = require('cors');
const app = express(); 

const { fetchWeatherData, createData } = require('./db');

app.use(express.json()); // use json parsing
app.use(cors());

const port = 5000;



app.get('/api/weather', (req, res) => {
    res.send(fetchWeatherData());

});

app.post('/api/weather', (req, res) => {
    /*if(req.body.S_name1 && req.body.S_name2) {
        // tee molemmat jutut
        console.log("molemmat");
    } else if (req.body.S_name1) {
        // tee 1name jutut
        console.log("Sname1");
    } else if (req.body.S_name2) {
        // tee 2name jutut
        console.log("Sname2");
    } else {
        console.log("dorka, korjaa DB jutut");
    };*/

    res.send("kokeiluuu");
    createData(req.body);
});


app.listen(port, () => {
    console.log(`Running in port: ${port}`);
});