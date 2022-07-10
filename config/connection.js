// import the sequilize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

// create connectio to the database, pass in the Mysql information  for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_LOCAL_HOST || "localhost",
      dialect: "mysql",
      port: 3306,
      // might have to remove due to mysql
      // socketPath: "/tmp/mysql.sock",
    }
  );
}
module.exports = sequelize;
