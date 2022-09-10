/* DELETE TABLES FOR CLEAN CREATION*/
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS holidays;
DROP TABLE IF EXISTS holiday_parts;
DROP TABLE IF EXISTS events;

/* CREATE NEW TABLES */
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname TEXT NOT NULL,
  surname TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE holidays (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  holiday_name TEXT NOT NULL,
  date_start DATE NOT NULL,
  date_end DATE NOT NULL,
  location_name TEXT NOT NULL,
  img_link TEXT
);

CREATE TABLE holiday_parts (
  id SERIAL PRIMARY KEY,
  holiday_id INT NOT NULL, 
  part_name TEXT NOT NULL,
  date_start DATE NOT NULL,
  date_end DATE NOT NULL,
  location_name TEXT NOT NULL,
  img_link TEXT
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  part_id INT NOT NULL, 
  event_name TEXT NOT NULL,
  location_name TEXT NOT NULL,
  img_link TEXT,
  event_description TEXT
);


