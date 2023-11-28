module.exports = (users, param, ascending) => {
  const result = [...users];
  const ascendingModifier = ascending ? 1 : -1;

  // Використовуємо метод sort() для сортування копії масиву користувачів
  result.sort((user1, user2) => {
    if (user1[param] === user2[param]) return 0;
    if (!user1[param]) return -1 * ascendingModifier;
    if (!user2[param]) return 1 * ascendingModifier;
    return user1[param] > user2[param] ? 1 * ascendingModifier : -1 * ascendingModifier;
  });
  return result;
};
