const filter = require('./filter');

module.exports = (arr, value) => {
  const data = filter(arr, null, value, null, null, null);
  const percentage = ((data.length / arr.length) * 100).toFixed(2);
  return percentage;
};
