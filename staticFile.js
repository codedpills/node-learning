const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//Middlewares

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

//Request handlers

const loginRequestHandler = (req, res) => {
	// let body = '';
	// // console.log(req);
	// req.on('data', (chuck) => {
	// 	body += chuck;
	// });

	// req.on('end', () => console.log(body));

	console.log(req.body);
	res.send('Login Done');
};

//Route
app.post('/login', loginRequestHandler);

app.listen(3000, () => console.log('beautiful server is runing'));
