-- ** TEST ** THIS IS A NEW CHANGE --

-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS maps CASCADE;
DROP TABLE IF EXISTS points CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL ,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE
);

-- Create maps table with corrected UserId type and foreign key constraint
CREATE TABLE maps (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title CHAR(50) NOT NULL,
    latitude float NOT NULL,
    longtitude float NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    favourite BOOLEAN NOT NULL DEFAULT FALSE
);

-- Create points table
CREATE TABLE points (
    id SERIAL PRIMARY KEY NOT NULL,
    map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE, -- Corrected MapId type to INTEGER
    title CHAR(50) NOT NULL,
    description VARCHAR(50) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    image VARCHAR(255) NOT NULL
);
