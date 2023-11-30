/* eslint-disable linebreak-style */
const _ = require('lodash');

module.exports = (arr, country, age, gender, photo, favorite) => {
  const newArr = arr.filter((user) => {
    if ((!_.isNull(country) && user.country !== country)) {
      return false;
    }
    if (!_.isNull(gender) && user.gender !== gender) {
      return false;
    }
    if (!_.isNull(favorite) && typeof favorite === 'boolean' && user.favorite !== favorite) {
      return false;
    }
    if (!_.isNull(photo) && typeof photo === 'boolean' && (user.picture_large !== '../images/user.png') !== photo) {
      return false;
    }
    if (!_.isNull(age) && !(user.age.toString() >= age.split('-')[0].toString() && user.age.toString() <= age.split('-')[1].toString())) {
      return false;
    }
    return true;
  });
  return newArr;
};
