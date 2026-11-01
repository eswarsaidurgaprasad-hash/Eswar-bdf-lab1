// Configure middleware and connect the route modules.
const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

app.use('/', mainRoutes);

// Keep the fallback after the valid routes so unknown URLs return 404.
app.use((req, res) => {
  res.status(404).type('text').send('404 - Page Not Found');
});

module.exports = app;
