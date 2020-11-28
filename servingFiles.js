const express = require('express');
const app = express();
const path = require('path');

//Middlewares

app.use(express.static(path.join(__dirname, 'public')));

//Request handlers

// const serveHomePage = (req, res) => {
// 	// res.send('Home page init');
// 	//1. Find the file
// 	const homePageFilePath = path.join(__dirname, 'public', 'index.html');

// 	//2. Send file to client
// 	res.sendFile(homePageFilePath);
// };

// const serveProfilePage = (req, res) => {
// 	//Find the file
// 	const profileFilePath = path.join(__dirname, 'public', 'profile.html');
// 	//Send file
// 	res.sendFile(profileFilePath);
// };

// const serveAboutPage = (req, res) => {
// 	//Find the file
// 	const aboutFilePath = path.join(__dirname, 'public', 'about.html');
// 	//Send file
// 	res.sendFile(aboutFilePath);
// };

// //Routes
// app.get('/', serveHomePage);
// app.get('/about', serveProfilePage);
// app.get('/about', serveAboutPage);

app.listen(3000, () => console.log('Server is running'));
