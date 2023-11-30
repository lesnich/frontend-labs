/* eslint-disable linebreak-style */
module.exports = (arr, value) => {
  const condition = (obj) => {
    const [firstName, lastName] = obj.full_name.split(' ');

    return (
      `${firstName} ${lastName}` === value
      || obj.full_name === value
      || firstName === value
      || lastName === value
      || obj.note === value
      || (obj.age && obj.age.toString() === value)
    );
  };

  return arr.filter(condition);
};
