const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log('REQ', req.method, req.url);
  next();
});

app.get('/_check', (req, res) => {
  res.send('CHECK OK');
});

app.get('/_settings', (req, res) => {
  res.json({
    views: app.get('views'),
    viewEngine: app.get('view engine')
  });
});

app.use('/', routes);

module.exports = app;
