# *Project-3* Travel Diary
Group Members: Elise, Nick, Rob

## Can be found at:
[Link to Project](https://wereallyouthere.herokuapp.com/)

## Installation Instructions: 
1.  `git clone` with the specific **HTTPS** or **SSH** for this repo.
2. In the code's folder run the following commands in this order:
	1. `npm install`
3. If postgreSQL is already installed on your machine, run `psql` then `CREATE DATABASE travel_diary` to create the required database.
	1. if postgreSQL isn't already installed, follow the appropriate instructions from [here](https://www.postgresql.org/download/) and repeat step 3 when installed.
4. To create the appropriate tables in the db, run `psql travel_diary < database/schema.sql` in the venv terminal
5. To then seed some data to each table, run `psql travel_diary < database/seed.sql` in your terminal
6. Fill out a .env file with the following:
	1. `EXPRESS_SESSION_SECRET_KEY`
	2. `DATABASE_URL` -> eg. "postgres://username:password@localhost:5432/travel_diary"
	3. `PORT`
7.  If everything is successful, run `npm run dev` or `npm start` in the terminal



## Technologies Used:
During this project the technologies that had been used were; 
- VS Code
- HTML
- CSS
- JavaScript w/ axios & momentJS
- Node.js backend w/ Express 
- PostgreSQL for database management
- Google Chrome & Firefox for testing/dev tools
- Github for storing/managing code
- Heroku for hosting the website/db

## Main Features
- Login/Register
- User profile
- Create Trip (Holiday)
- Create Destinations (Holiday Parts)
- Create Activities (Events)
- Content display that flows through data
- Edit/Delete


## Ideal/Planned Features: 
- [ ] Mobile responsiveness
- [ ] Admin control panel
- [ ] Dark/light mode
- [ ] Social media features: landing page with other peoples holidays to view even when not logged in for ideas
- [ ] Individual page (/username url) with edit/delete options if logged in, or without if viewing as other user. Others can click in to view
- [ ] Google API for locations
- [ ] Cloudinary image hosting
- [ ] Group holiday planning features: add people to holiday, budgeting, etc


## Database Design 
- See `database/schema.sql`


##  Acknowledgements
- Staff at GA -
	- Instructors: Ken & Ge
	- Instructors Assistants: Lucy & Sam 
