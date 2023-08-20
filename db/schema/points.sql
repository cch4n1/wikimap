DROP TABLE IF EXISTS points CASCADE;
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