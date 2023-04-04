const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../../data/data.sqlite', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

let data = {};
db.serialize(() => {
  db.each("SELECT * FROM SuperTableA", (err, row) => {
      data[row.id] = {table: "SuperTableA", ...row};
  });
  db.each("SELECT * FROM UberTableB", (err, row) => {
      data[row.id] = {table: "UberTableB", ...row};
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection.');
});

console.log(JSON.stringify(data));