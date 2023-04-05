const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Connect to the SQLite database
const db = new sqlite3.Database('./data/data.sqlite', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the genshin database.');
  }
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle GET requests to retrieve characters with a specific rarity
app.get('/characters/:rarity', (req, res) => {
  const rarity = req.params.rarity;
  const sql = `SELECT * FROM personnages WHERE rarete_personnage = ?`;
  
  db.all(sql, rarity, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    } else {
      const characters = rows.map(row => ({
        nom_personnage: row.nom_personnage,
        rarete_personnage: row.rarete_personnage,
        arme_personnage: row.arme_personnage,
        portrait_personnage: row.portrait_personnage,
        element_personnage: row.element_personnage
      }));
      res.json(characters);
    }
  });
});

// Handle GET requests to retrieve weapons with a specific rarity
app.get('/weapons/:rarity', (req, res) => {
  const rarity = req.params.rarity;
  const sql = `SELECT * FROM armes WHERE rarete_arme = ?`;
  
  db.all(sql, rarity, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    } else {
      const weapons = rows.map(row => ({
        nom_arme: row.nom_arme,
        rarete_arme: row.rarete_arme,
        type_arme: row.type_arme,
        portrait_arme: row.portrait_arme
      }));
      res.json(weapons);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Genshin Tracker app listening at http://localhost:${port}`);
});


/*const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Connect to the SQLite database
const db = new sqlite3.Database('./data/data.sqlite', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the genshin database.');
  }
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle GET requests to retrieve characters with a specific rarity
app.get('/characters/:rarity', (req, res) => {
  const rarity = req.params.rarity;
  const sql = `SELECT * FROM personnages WHERE rarete_personnage = ?`;
  
  db.all(sql, rarity, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    } else {
      const characters = rows.map(row => ({
        nom_personnage: row.nom_personnage,
        rarete_personnage: row.rarete_personnage,
        arme_personnage: row.arme_personnage,
        portrait_personnage: row.portrait_personnage
      }));
      res.json(characters);
    }
  });
});

// Handle GET requests to retrieve weapons with a specific rarity
app.get('/weapons/:rarity', (req, res) => {
  const rarity = req.params.rarity;
  const sql = `SELECT * FROM armes WHERE rarete_arme = ?`;
  
  db.all(sql, rarity, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
    } else {
      const weapons = rows.map(row => ({
        nom_arme: row.nom_arme,
        rarete_arme: row.rarete_arme,
        type_arme: row.type_arme,
        image_arme: row.image_arme
      }));
      res.json(weapons);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Genshin Tracker app listening at http://localhost:${port}`);
});*/

/* V2 ??
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/data.sqlite');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  let personnages_rareté_5 = [];
  let personnages_rareté_4 = [];
  let armes_rareté_5 = [];
  let armes_rareté_4 = [];

  // Execute the queries and extract the results
  db.all('SELECT * FROM personnages WHERE rarete_personnage = 5', function(err, rows) {
    rows.forEach((row) => {
      personnages_rareté_5.push(row);
    });
  });

  db.all('SELECT * FROM personnages WHERE rarete_personnage = 4', function(err, rows) {
    rows.forEach((row) => {
      personnages_rareté_4.push(row);
    });
  });

  db.all('SELECT * FROM armes WHERE rarete_arme = 5', function(err, rows) {
    rows.forEach((row) => {
      armes_rareté_5.push(row);
    });
  });

  db.all('SELECT * FROM armes WHERE rarete_arme = 4', function(err, rows) {
    rows.forEach((row) => {
      armes_rareté_4.push(row);
    });
    // Pass the extracted data to the view
    res.render('index', {
      personnages_rareté_5: personnages_rareté_5,
      personnages_rareté_4: personnages_rareté_4,
      armes_rareté_5: armes_rareté_5,
      armes_rareté_4: armes_rareté_4
    });
  });
});

app.listen(3000, function () {
  console.log('Listening on http://localhost:3000');
});
*/