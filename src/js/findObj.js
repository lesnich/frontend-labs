const _ = require('lodash');

module.exports = (arr, value) => {
  const condition = (obj) => {
    const [firstName, lastName] = obj.full_name.split(' ');

    return (
      `${firstName} ${lastName}` === _.trim(value)
      || obj.full_name === _.trim(value)
      || firstName === _.trim(value)
      || lastName === _.trim(value)
      || obj.note === _.trim(value)
      || (!_.isUndefined(obj.age) && obj.age.toString() === _.trim(value))
    );
  };

  return arr.filter(condition);
};
