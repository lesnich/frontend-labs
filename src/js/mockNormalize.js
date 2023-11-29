const randomUserMock = require('../mocks/lab3');
const additionalUsers = require('../mocks/additional');

function color() {
  const sybmols = '0123456789abcdef';
  // eslint-disable-next-line no-shadow
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += sybmols[Math.floor(Math.random() * sybmols.length)];
  }
  return color;
}

const mockNormalize = (obj1, obj2) => {
  const arr = [];
  const course = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry', 'Law', 'Art', 'Medicine', 'Statistics'];
  const favorite = [true, false];
  for (let i = 0; i < obj1.length; i += 1) {
    let id = '';
    for (let j = 0; j < 11; j += 1) {
      id += Math.floor(Math.random() * 10);
    }
    const obj = {
      id: `FN${id}`,
      course: course[Math.floor(Math.random() * course.length)],
      favorite: favorite[Math.floor(Math.random() * favorite.length)],
      color: color(),
      gender: obj1[i].gender,
      title: obj1[i].name.title,
      full_name: `${obj1[i].name.first} ${obj1[i].name.last}`,
      city: obj1[i].location.city,
      state: obj1[i].location.state,
      country: obj1[i].location.country,
      postcode: obj1[i].location.postcode,
      coordinates: obj1[i].location.coordinates,
      timezone: obj1[i].location.timezone,
      email: obj1[i].email,
      b_date: obj1[i].dob.date,
      age: obj1[i].dob.age,
      phone: obj1[i].phone,
      picture_large: obj1[i].picture.large,
      picture_thumbnail: obj1[i].picture.thumbnail,
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorum dolorem sapiente. Pariatur aspernatur asperiores dignissimos! Rem ea explicabo ipsum numquam labore maiores voluptas. Fuga hic architecto accusamus eligendi voluptas!',
    };
    arr.push(obj);
  }
  for (let i = 0; i < obj2.length; i += 1) {
    let add = true;
    for (let j = 0; j < arr.length; j += 1) {
      if (obj2[i].full_name === arr[j].full_name) add = false;
    }
    if (add) {
      arr.push(obj2[i]);
    }
  }
  return arr;
};

module.exports = mockNormalize(randomUserMock, additionalUsers);
