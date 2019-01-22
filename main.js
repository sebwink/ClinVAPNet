const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const api = express();

api.use(morgan('common', { immediate: true }));

const HOST = '0.0.0.0';
const PORT = 3000;

async function getReports(url = 'http://clinvap:5000/reports') {
  try {
    const reports = await axios.get(url);
    return reports;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

api.get('/', async (req, res) => {
  const reports = await getReports();
  if (reports) {
    res.json(reports.data);
  }
  res.end();
});

api.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
