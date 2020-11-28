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

const readFileAsArray = function (file, cb = () => {}) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, function (err, data) {
			if (err) {
				reject(err);
				return cb(err);
			}
			const lines = data.toString().trim().split('\n');
			resolve(lines);
			cb(null, lines);
		});
	});
};

async function countOdd() {
	try {
		const lines = await readFileAsArray('./numbers');
		const numbers = lines.map(Number);
		const oddCount = numbers.filter((n) => n % 2 === 1).length;
		console.log('Odd numbers count:', oddCount);
	} catch (err) {
		console.error(err);
	}
}
countOdd();

//From docs
// server.get(
// 	'/user/:id',
// 	function (req, res, next) {
// 		console.log('ID:', req.params.id);
// 		next();
// 	},
// 	function (req, res, next) {
// 		res.send('User Info');
// 	}
// );

// // handler for the /user/:id path, which prints the user ID
// server.get('/user/:id', function (req, res, next) {
// 	res.end(req.params.id);
// });

// server.get(
// 	'/user/:id',
// 	function (req, res, next) {
// 		// if the user ID is 0, skip to the next route
// 		if (req.params.id === '0') next('route');
// 		// otherwise pass the control to the next middleware function in this stack
// 		else next();
// 	},
// 	function (req, res, next) {
// 		// send a regular response
// 		res.send('regular');
// 	}
// );

// // handler for the /user/:id path, which sends a special response
// server.get('/user/:id', function (req, res, next) {
// 	res.send('special');
// });

//Loading ROUTER
// const router = express.Router();

// router.use((req, res, next) => {
// 	res.send('From Router function');
// 	next();
// });

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
// router.use(
// 	'/user/:id',
// 	function (req, res, next) {
// 		console.log('Request URL:', req.originalUrl);
// 		next();
// 	},
// 	function (req, res, next) {
// 		console.log('Request Type:', req.method);
// 		next();
// 	}
// );

// router.use(
// 	'/user/:id',
// 	(req, res, next) => {
// 		res.send('jgkhbn');
// 		console.log('Request Type:', req.originalUrl);
// 		next();
// 	},
// 	(req, res, next) => {
// 		console.log(req.method);
// 		next();
// 	}
// );
// server.use('/', router);
