DROP TABLE IF EXISTS shows;

CREATE TABLE shows(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
	description VARCHAR,
	duration VARCHAR,
	originalAirDate VARCHAR,
	rating VARCHAR,
	keywords VARCHAR
);

-- INSERT INTO shows (title, description, duration, originalAirDate, rating, keywords) VALUES 