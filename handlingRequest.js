const express = require('express');

const handleAllRequests = (req, res) => {
	res.send('response on server use');
};

const testRequestHandler = (req, res) => {
	res.send('From test Resquest Handler');
};

const specificMiddlewareForTestRequestHandler = (req, res, next) => {
	console.log('Middleware from specific test request handler');
	next();
};
const middlewareFunc = (req, res, next) => {
	console.log('hello from middleware');
	// res.send('Hello from general middleware');

	next();
};

//Specific Middleware
const routeSpecificMiddleware = (req, res, next) => {
	console.log('specific route');
	next();
};

const server = express();

//Middleware With Response
server.get(
	'/foo',
	(req, res, next) => {
		console.log(req.originalUrl);
		next();
	},
	function (req, res, next) {
		res.send('special bundled middleware');
		next();
	}
);

// //General Middleware
// server.use(middlewareFunc);

const redirectRequest = (req, res) => {
	// res.send('testohkfj');
	res.redirect(301, '/fin');
};

const fileTransferRequestHandler = (req, res) => {
	res.download('/file.md');
	// res.send('file');
};
//Routes
server.get('/file', fileTransferRequestHandler);
server.get('/test', redirectRequest);
server.use('/fin', handleAllRequests);
server.get('/huz', specificMiddlewareForTestRequestHandler, testRequestHandler);
server.get('/go', (req, res) => res.send('specfic route'));
server.get('/try', routeSpecificMiddleware, (req, res) =>
	res.send('try specfic route')
);
server.listen(3000, () => {
	console.log('Server has started and it is runing');
});
