DROP TABLE IF EXISTS maps CASCADE;

-- Create maps table with corrected UserId type and foreign key constraint

CREATE TABLE
    maps (
        id SERIAL PRIMARY KEY NOT NULL,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        title CHAR(50) NOT NULL,
        latitude float NOT NULL,
        longtitude float NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        favourite BOOLEAN NOT NULL DEFAULT FALSE
    );