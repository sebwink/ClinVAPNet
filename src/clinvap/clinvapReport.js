const axios = require('axios');

async function getAll(url = 'http://clinvap:5000/reports') {
  try {
    const reports = await axios.get(url);
    return reports;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

module.exports = {
  getAll,
};
