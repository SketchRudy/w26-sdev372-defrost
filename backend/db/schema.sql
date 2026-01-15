DROP DATABASE IF EXISTS defrost_app;
CREATE DATABASE defrost_app;
USE defrost_app;

DROP USER IF EXISTS 'defrost_user'@'localhost';
CREATE USER 'defrost_user'@'localhost' IDENTIFIED BY 'impreza';
GRANT ALL PRIVILEGES ON defrost_app.* TO 'defrost_user'@'localhost';
FLUSH PRIVILEGES;

DROP TABLE IF EXISTS defrost_users;

CREATE TABLE defrost_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone_number VARCHAR(32) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
