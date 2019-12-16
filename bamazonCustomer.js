var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // querySongs();
    // queryAlbum();
    console.log(res);
    connection.end();
  });
}

// function querySongs() {
//     connection.query("SELECT * FROM top5000 WHERE song=?", ["Thriller"], function(err, res) {
//       if (err) throw err;
//       for (var i = 0; i < res.length; i++) {
//         console.log(res[i].position + " | " + res[i].song + " | " + res[i].artist + " | " + res[i].year);
//       }
//     });
// }

// function queryAlbum() {
//     var query = connection.query("SELECT * FROM top_albums WHERE song=?", ["Thriller"], function(err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//         console.log(res[i].position + " | " + res[i].song + " | " + res[i].artist + " | " + res[i].year);
//         }
//     });
       
//     // logs the actual query being run
//     console.log(query.sql);
//     connection.end();
// }