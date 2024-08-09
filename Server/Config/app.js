const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const axios = require('axios');

// Routing modules
const indexRouter = require('../Routes/index');
const mediaRouter = require('../Routes/media');
const blogRouter = require('../Routes/blog');
const authRouter = require('../Routes/auth');

const app = express();

// Link to .env file if not in production mode
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// DB connection
mongoose.connect(process.env.CONNECTION_STRING, {})
  .then((res) => { console.log('Connected to MongoDB') })
  .catch((err) => { console.log(`Connection failure: ${err}`) });

// View engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'hbs');

// Middleware configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// Passport config
app.use(session({
  secret: process.env.PASSPORT_SECRET,
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
const User = require('../Models/user');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/auth', authRouter);
app.use('/media', mediaRouter);
app.use('/blog', blogRouter);
app.use('/', indexRouter);

// HBS custom helpers
const hbs = require('hbs');
hbs.registerHelper('selectOption', (currentValue, selectedValue) => {
  let selectedProperty = '';
  if (currentValue === selectedValue) {
    selectedProperty = ' selected';
  }
  return new hbs.SafeString(`<option${selectedProperty}>${currentValue}</option>`);
});

// Directs the site where to go for image assets
app.use('/img', express.static(path.join(__dirname, '../../Client/Assets/images')));
app.use('/', indexRouter);

// Fetch and render Twitter embed code
app.get('/social', async (req, res) => {
  try {
    const response = await axios.get('https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2Fasuraspru');
    const embedCode = response.data.html;
    res.render('social', { embedCode });
  } catch (error) {
    res.status(500).send('Error fetching Twitter embed code');
  }
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: `Error: ${err.status}`, page: 'error' });
});

module.exports = app;
