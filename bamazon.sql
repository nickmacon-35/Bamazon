DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation", "electronics", 299.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golf Club Set", "sports", 999.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bowling Ball", "sports", 129.99, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "electronics", 199.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sofa", "furniture", 169.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DVD Player", "electronics", 39.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "appliances", 99.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tennis Racket", "sports", 49.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toaster", "appliances", 59.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Recliner", "furniture", 259.99, 3);

SELECT * FROM products;