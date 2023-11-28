function checkString(str) {
  return typeof str === 'string' && str.charAt(0).toUpperCase() === str.charAt(0);
}

module.exports = (user) => {
  if (!checkString(user.full_name) || !checkString(user.country) || !checkString(user.city)) {
    return false;
  }
  if (typeof (user.gender) !== 'string') return false;

  if (typeof user.age !== 'number' || (user.age > 100 || user.age < 17)) return false;

  if (!user.email.includes('@')) return false;

  if (!user.phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)) {
    return false;
  }

  return true;
};
