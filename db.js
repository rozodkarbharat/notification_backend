const mysql=require("mysql")


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bharat@123",
  database: "dc_bull",
  port:3306
});






module.exports = connection;
