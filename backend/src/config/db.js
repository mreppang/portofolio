const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  port: 3310,
  user: "root",
  password: "",
  database: "portofolio_db",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database berhasil-terhubung");
  }
});

module.exports = db;