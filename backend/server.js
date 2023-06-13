const express = require('express');
const path = require("path");
const morgan = require('morgan');
const corsMiddleware = require('./middleware/cors.js');

const userController = require('./controller/user.js');

const app = express();
const port = process.env.PORT || 4242;

// MIDDLEWARES
app.use(corsMiddleware);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
app.use('/assets', express.static('assets'));

// ROUTING
app.use('/user', userController);

app.listen(port, () => {
    console.log(`Server listing on http://localhost:${port}`);
})