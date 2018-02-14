const pgp 	= require('pg-promise')();
const db 	= pgp(process.env.DATABASE_URL || 'postgres://Jean-Robert@localhost:5432/api_challenge');  //update YOURNAMEHERE with your name and create a db called "movie 3"

module.exports = db;