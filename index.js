const express = require('express');

const handleAllRequests = (req, res) => {
	res.send('response on server use');
};

const middlewareFunc = (req, res, next) => {
	console.log('hello from middleware');

	next();
};

//Specific Middleware
const routeSpecificMiddleware = (req, res, next) => {
	console.log('specific route');
	next();
};

const server = express();

//General Middleware
server.use(middlewareFunc);

//Routes
server.get('/fin', handleAllRequests);
server.get('/go', (req, res) => res.send('specfic route'));
server.get('/try', routeSpecificMiddleware, (req, res) =>
	res.send('try specfic route')
);
server.listen(3000, () => {
	console.log('Server has started and it is runing');
});
