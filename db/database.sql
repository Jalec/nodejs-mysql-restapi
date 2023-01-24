CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employees;

INSERT INTO employees VALUES
    (1, 'Joe', 1000),
    (2, 'Sancho', 2000),
    (3, 'Quijote', 40000),
    (4, 'Kaladin', 8000),
    (5, 'Adolin', 6000)