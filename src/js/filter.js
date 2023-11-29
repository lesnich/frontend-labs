/* eslint-disable linebreak-style */
module.exports = (arr, country, age, gender, photo, favorite) => {
  const newArr = arr.filter((user) => {
    if (country && user.country !== country) {
      return false;
    }
    if (gender && user.gender !== gender) {
      return false;
    }
    if (typeof favorite === 'boolean' && user.favorite !== favorite) {
      return false;
    }
    if (typeof photo === 'boolean' && photo && (user.picture_large !== '../images/user.png') !== photo) {
      return false;
    }
    if (age && !(user.age.toString() >= age.split('-')[0].toString() && user.age.toString() <= age.split('-')[1].toString())) {
      return false;
    }
    return true;
  });
  return newArr;
};
