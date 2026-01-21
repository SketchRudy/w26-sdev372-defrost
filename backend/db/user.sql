   CREATE DATABASE defrost_app;
   CREATE USER 'dev'@'localhost' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON defrost_app.* TO 'dev'@'localhost';
   FLUSH PRIVILEGES;