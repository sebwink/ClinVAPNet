const express = require('express');
const morgan = require('morgan');

const clinvap = {};
clinvap.reports = require('./src/clinvap/clinvapReport.js');

const api = express();

api.use(morgan('common', { immediate: true }));

const HOST = '0.0.0.0';
const PORT = 3000;

api.get('/reports', async (req, res) => {
  const reports = await clinvap.reports.getAll();
  if (reports) {
    res.json(reports.data);
  }
  res.end();
});

api.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
