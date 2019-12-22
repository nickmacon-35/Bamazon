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
  bamazon();
});

function bamazon() {
  // query the database for all products
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to buy
    inquirer
      .prompt([
        {
          name: "choice",
          type: "input",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].id);
            }
            console.log(results);
          },
          message: "What is the id # of the product you would like to buy? (1-10)"
        },
        {
          name: "quantity",
          type: "input",
          message: "How much of this product would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var answerMod = (answer.choice - 1);
        var chosenItem = results[answerMod];
      
        // determine if bid was high enough
        if (chosenItem.stock_quantity - parseInt(answer.quantity) >= 0) {
        // bid was high enough, so update db, let the user know, and start over
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: (chosenItem.stock_quantity - parseInt(answer.quantity))
            },
            {
              id: chosenItem.id
            }
          ]);
          var totalCost = chosenItem.price * parseInt(answer.quantity);
          console.log("The total cost of your purchase comes out to: " + totalCost)
          bamazon();
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("INSUFFICIENT QUANTITY! TOO BAD!");
          // connection.end();
          bamazon();
        }
    });
  });
}