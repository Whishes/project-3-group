CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE,
  password TEXT
);

CREATE TABLE holidays (
  id SERIAL PRIMARY KEY,
  user_id INT,
  holiday_name TEXT,
  date_start DATE,
  date_end DATE,
  location_name TEXT,
  img_link TEXT
);

CREATE TABLE holiday_parts (
  id SERIAL PRIMARY KEY,
  holiday_id INT, 
  part_name TEXT,
  date_start DATE,
  date_end DATE,
  location_name TEXT,
  img_link TEXT
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  part_id INT, 
  event_name TEXT,
  location_name TEXT,
  img_link TEXT,
  event_description TEXT
);


