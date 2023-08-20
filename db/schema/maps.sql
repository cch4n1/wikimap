DROP TABLE IF EXISTS maps CASCADE;

-- Create maps table with corrected UserId type, foreign key constraint, and description field
CREATE TABLE maps (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title CHAR(50) NOT NULL,
    description VARCHAR(255),   -- Description field added
    latitude float NOT NULL,
    longitude float NOT NULL,   -- Fixed a small typo from "longtitude" to "longitude"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    favourite BOOLEAN NOT NULL DEFAULT FALSE
);
