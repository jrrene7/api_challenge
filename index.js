const express 				= require('express'),
	bodyParser					= require('body-parser'),
	app									= express(),
	PORT								= process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// connect controller
app.use('/shows', require('./controllers/shows'));

// listen
app.listen(PORT, () => console.log('Server is listening on port: ', PORT));