const express = require('express');
const logger = require('./middleware/logger');
const routeError = require('./middleware/route-error');

const checkout = require('./checkout');
const asyncStuff = require('./async-stuff');

const app = express();

//middleware
app.use(logger);

//routes
app.use('/checkout', checkout);
app.use('/async-stuff', asyncStuff);

//error route
app.use(routeError);

app.listen(4000);

/*
Add a checkout route that totals the bill and does other stuff (use functional style) and also validate the JSON schema
Add tests that check the routes work
Add tests as you go along when making the functional stuff
*/