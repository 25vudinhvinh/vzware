const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    localhost: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
});

pool.on("success", () => {
    console.log("Connected to PostgreSql");
});

pool.on("error", (err) => {
    console.log("Error connected", err.stack);
});

module.exports = pool;
