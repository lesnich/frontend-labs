const _ = require('lodash');

function checkString(str) {
  return typeof str === 'string' && _.upperFirst(str) === str;
}

module.exports = (user) => {
  if (!checkString(user.full_name) || !checkString(user.country) || !checkString(user.city)) {
    return false;
  }
  if (typeof (user.gender) !== 'string') return false;

  if (typeof user.age !== 'number' || !(_.inRange(user.age, 17, 100))) return false;

  if (!user.email.includes('@')) return false;

  if (!user.phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)) {
    return false;
  }

  return true;
};
