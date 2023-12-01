/* eslint-disable linebreak-style */
const getUrl = 'https://randomuser.me/api/?results=55';

module.exports = fetch(getUrl, {
  //  HTTP-метод GET для отримання даних.
  method: 'GET',
  headers: {
    // заголовок Content-Type як 'application/json'. 
    'Content-Type': 'application/json',
  },
}) // коли отримано відповідь від сервера, викликаємо метод json().
  .then((response) => response.json())
  // повертаємо результати з об'єкта відповіді.
  .then((response) => response.results);
