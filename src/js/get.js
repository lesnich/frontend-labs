/* eslint-disable linebreak-style */
const getUrl = 'https://randomuser.me/api/?results=55';

module.exports = fetch(getUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((response) => response.results);
