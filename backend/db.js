
// get the client
const mysql = require('mysql2/promise');

// create the connection
const pool = mysql.createPool({
  host:'db', 
  user: 'root', 
  password: 'weather',
  database: 'weather_db',
  waitForConnections: true,
  connectionLimit: 10
});

// fetch all TheRyhma weather data from the database
const fetchWeatherData = async () => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM `weather` WHERE device_id="TheRyhma_speed" OR device_id="TheRyhma_dir";');
    return rows;
  } catch (error) {
    console.log(error);
    //throw new Error(error);
  }
};
// adds data to db
//TODO: might be good idea to filter only our data to go into our db
// if above ^ -> update fetchWeatherData() to fetch simply everything
const addData = async(data, device_id) => {
    try {
        const result = await pool.query(`INSERT INTO weather (device_id, data) VALUES (${device_id}, ${data});`);
        return result[0];
    } catch (error) {
        console.log(error);
        //throw new Error(error);
    }
}
module.exports = { 
    fetchWeatherData,
    addData
  };