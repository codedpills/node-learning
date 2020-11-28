const express = require('express');
const app = express();

//Middlewares

//Request handlers

const serveHomePage = (req, res) => {
	res.send('Home page init');
	//1. Find the file

	//2. Send file to client
};

app.get('/', serveHomePage);

app.listen(3000, () => console.log('Server is running'));
