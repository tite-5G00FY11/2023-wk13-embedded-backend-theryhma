
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

// fetch all the weather data from the database
const fetchWeatherData = async () => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM `weather`;');
    console.log(rows); //TODO: Remove after testing
    return rows;
  } catch (error) {
    console.log(error);
    //throw new Error(error);
  }
};

const createData = async(data) => {
    try {
        const result = await pool.query('INSERT INTO `weather` SET ?', data);
        return result[0];
    } catch (error) {
        console.log(error);
        //throw new Error(error);
    }
}
module.exports = { 
    fetchWeatherData,
    createData
  };