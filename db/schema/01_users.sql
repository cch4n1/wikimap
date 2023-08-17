-- ** TEST ** THIS IS A NEW CHANGE --

-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS maps CASCADE;
DROP TABLE IF EXISTS points CASCADE;

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    Username VARCHAR(50) NOT NULL UNIQUE
);

-- Create maps table with corrected UserId type and foreign key constraint
CREATE TABLE maps (
    id SERIAL NOT NULL PRIMARY KEY,
    UserId INTEGER NOT NULL REFERENCES users(id),
    Title CHAR(50) NOT NULL,
    Location CHAR(50) NOT NULL,
    Created_at CHAR(50) NOT NULL
);

-- Create points table
CREATE TABLE points (
    id INT NOT NULL PRIMARY KEY,
    MapId INTEGER NOT NULL REFERENCES maps(id), -- Corrected MapId type to INTEGER
    Title CHAR(50) NOT NULL,
    Description VARCHAR(50) NOT NULL,
    Latitude FLOAT NOT NULL,
    Longitude FLOAT NOT NULL,
    Image VARCHAR(255) NOT NULL
);
