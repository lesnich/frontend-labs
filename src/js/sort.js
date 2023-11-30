const _ = require('lodash');

module.exports = (users, param, ascending) => {
  const result = [...users];
  const ascendingModifier = ascending ? 1 : -1;

  // Використовуємо метод sort() для сортування копії масиву користувачів
  result.sort((user1, user2) => {
    let first;
    let second;
    if (param === 'full_name' || param === 'course' || param === 'country' || param === 'gender') {
      first = _.toLower(user1[param]);
      second = _.toLower(user2[param]);
    } else {
      first = user1[param];
      second = user2[param];
    }
    if (first === second) return 0;
    if (!first) return -1 * ascendingModifier;
    if (!second) return 1 * ascendingModifier;
    return first > second ? 1 * ascendingModifier : -1 * ascendingModifier;
  });
  return result;
};
