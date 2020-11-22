const http = require('http');
const express = require('express');

const handleRequest = (req, res) => {
	console.log('hello');
	const url = req.url;
	res.setHeader('content-type', 'text/html');
	if (url === '/') {
		res.write(
			'<h1>Response to a GET request from the frontend, THIS IS HOME</h1>'
		);
	} else if (url === '/login') {
		res.write(
			'<h1>Response to a GET request from the frontend, THIS IS LOGIN</h1>'
		);
	} else if (url === '/profile') {
		res.write('<h1> THIS IS PROFILE</h1>');
	} else if (url === '/signup') {
		res.write(
			'<h1>Response to a GET request from the frontend, THIS IS SIGNUP</h1>'
		);
	} else {
		res.write('<h1>Page not found</h1>');
	}
	res.end();
};

const homeRoute = (req, res) => {
	res.send('Express HOME');
};
const loginRoute = (req, res) => {
	res.send('dgcfhvgjj');
};
// const server = http.createServer(handleRequest);

const server = express();
server.use('/login', loginRoute);
server.use('/', homeRoute);

server.use(handleRequest);
server.listen(3000, '127.0.0.1', () => {
	console.log('server is running');
});
