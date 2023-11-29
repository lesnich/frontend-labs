const testModules = require('./test-module');
const validation = require('./validation');
const filter = require('./filter');
const findObj = require('./findObj');
const sort = require('./sort');
const get = require('./get');
const getPagination = require('./pagination');
const post = require('./post');
require('../css/app.css');

let data;
let sortedData;
let filteredData;
let isAsc = false;
let ageCondition = false;
let countryCondition = false;
let genderCondition = false;
let onlyFav = false;
let onlyPhoto = false;
let currentFav = 0;
let currentTop = 0;

function normalize(obj1) {
  const arr = [];
  const course = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry', 'Law', 'Art', 'Medicine', 'Statistics'];
  const favorite = [true, false];
  const color = ['red', 'pink', 'green', 'blue', 'yellow', 'purple', 'white', 'gray', 'black', 'lightblue', 'orange', 'rose', 'aqua'];
  for (let i = 0; i < obj1.length; i += 1) {
    let id = '';
    for (let j = 0; j < 11; j += 1) {
      id += Math.floor(Math.random() * 10);
    }
    const obj = {
      id: `FN${id}`,
      course: course[Math.floor(Math.random() * course.length)],
      favorite: favorite[Math.floor(Math.random() * favorite.length)],
      color: color[Math.floor(Math.random() * color.length)],
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
  return arr;
}

function showTop() {
  const starsContainer = document.querySelector('.stars-container');
  const stars = document.getElementsByClassName('star');

  for (let i = 0; i < 10; i += 1) {
    const div = document.createElement('div');
    div.classList.add('starred');

    const img = document.createElement('img');
    img.classList.add('image-large');
    img.src = data[i].picture_large;
    div.appendChild(img);

    const name = document.createElement('p');
    name.classList.add('image-name');
    const nameText = data[i].full_name.split(' ')[0];
    if (nameText) name.textContent = nameText;
    div.appendChild(name);

    const lastname = document.createElement('p');
    lastname.classList.add('image-lastname');
    const lastNameText = data[i].full_name.split(' ')[1];
    if (lastNameText) lastname.textContent = lastNameText;
    div.appendChild(lastname);

    const speciality = document.createElement('p');
    speciality.classList.add('image-speciality');
    speciality.textContent = data[i].course;
    div.appendChild(speciality);

    const country = document.createElement('p');
    country.classList.add('image-country');
    country.textContent = data[i].country;
    div.appendChild(country);

    const star = document.createElement('p');
    star.classList.add('star');
    star.textContent = '★';
    div.appendChild(star);

    starsContainer.appendChild(div);

    if (data[i].favorite) {
      stars[i].style.visibility = 'visible';
    }
  }
}

function showFilterTop() {
  filteredData = data;
  if (countryCondition) {
    filteredData = filter(filteredData, countryCondition, null, null, null, null);
  }
  if (ageCondition) {
    filteredData = filter(filteredData, null, ageCondition, null, null, null);
  }
  if (genderCondition) {
    filteredData = filter(filteredData, null, null, genderCondition, null, null);
  }
  if (onlyFav) {
    filteredData = filter(filteredData, null, null, null, null, true);
  }
  if (onlyPhoto) {
    filteredData = filter(filteredData, null, null, null, true, null);
  }
  for (let i = 0; i < 10; i += 1) {
    if (filteredData.length > i) {
      document.getElementsByClassName('starred')[i].style.visibility = 'visible';
      document.getElementsByClassName('image-large')[i].src = filteredData[i].picture_large;
      const firstName = filteredData[i].full_name.split(' ')[0];
      const lastName = filteredData[i].full_name.split(' ')[1];
      document.getElementsByClassName('image-name')[i].innerHTML = firstName;
      if (lastName) {
        document.getElementsByClassName('image-lastname')[i].innerHTML = lastName;
      } else {
        document.getElementsByClassName('image-lastname')[i].innerHTML = ' ';
      }
      document.getElementsByClassName('image-speciality')[i].innerHTML = filteredData[i].course;
      document.getElementsByClassName('image-country')[i].innerHTML = filteredData[i].country;
      if (filteredData[i].favorite) {
        document.getElementsByClassName('star')[i].style.visibility = 'visible';
      } else {
        document.getElementsByClassName('star')[i].style.visibility = 'hidden';
      }
    } else {
      document.getElementsByClassName('starred')[i].style.visibility = 'hidden';
      document.getElementsByClassName('star')[i].style.visibility = 'hidden';
    }
  }
}

function showTable() {
  for (let i = 0; i < 10; i += 1) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    td1.textContent = data[i].full_name;
    td2.textContent = data[i].course;
    td3.textContent = data[i].age;
    td4.textContent = data[i].gender;
    td5.textContent = data[i].country;
    td1.classList.add('left-col');
    td1.classList.add('table-name');
    td2.classList.add('table-course');
    td3.classList.add('table-age');
    td4.classList.add('table-gender');
    td5.classList.add('table-country');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    document.getElementsByClassName('table-content')[0].appendChild(tr);
  }
}

function showNewTable() {
  for (let i = 0; i < 10; i += 1) {
    if (data[i]) {
      document.getElementsByClassName('table-name')[i].innerText = data[i].full_name;
      document.getElementsByClassName('table-course')[i].innerText = data[i].course;
      if (data[i].age) {
        document.getElementsByClassName('table-age')[i].innerText = data[i].age;
      } else {
        document.getElementsByClassName('table-age')[i].innerText = ' ';
      }
      document.getElementsByClassName('table-gender')[i].innerText = data[i].gender;
      document.getElementsByClassName('table-country')[i].innerText = data[i].country;
    } else {
      document.getElementsByClassName('table-name')[i].innerText = '';
      document.getElementsByClassName('table-course')[i].innerText = '';
      document.getElementsByClassName('table-age')[i].innerText = ' ';
      document.getElementsByClassName('table-gender')[i].innerText = '';
      document.getElementsByClassName('table-country')[i].innerText = '';
    }
  }
}

function showFav() {
  const fav = data.filter((obj) => obj.favorite);
  const next = document.getElementById('next2');
  for (let i = 0; i < 5; i += 1) {
    const div = document.createElement('div');
    div.classList.add('favorites');

    const img = document.createElement('img');
    img.classList.add('image-large');
    img.src = fav[i].picture_large;
    div.appendChild(img);

    const name = document.createElement('p');
    name.classList.add('image-name');
    const nameText = fav[i].full_name.split(' ')[0];
    if (nameText) name.textContent = nameText;
    div.appendChild(name);

    const lastname = document.createElement('p');
    lastname.classList.add('image-lastname');
    const lastNameText = fav[i].full_name.split(' ')[1];
    if (lastNameText) lastname.textContent = lastNameText;
    div.appendChild(lastname);

    const country = document.createElement('p');
    country.classList.add('image-country');
    country.textContent = fav[i].country;
    div.appendChild(country);

    const speciality = document.createElement('p');
    speciality.classList.add('image-speciality');
    speciality.textContent = fav[i].course;
    div.appendChild(speciality);

    document.getElementsByClassName('fav-container')[0].insertBefore(div, next);
  }
}

function showNewFav() {
  const fav = data.filter((obj) => obj.favorite);
  for (let i = 0; i < 5; i += 1) {
    if (fav.length > i) {
      document.getElementsByClassName('image-large')[i + 10].src = fav[i].picture_large;
      const firstName = fav[i].full_name.split(' ')[0];
      const lastName = fav[i].full_name.split(' ')[1];
      document.getElementsByClassName('image-name')[i + 10].innerHTML = firstName;
      if (lastName) {
        document.getElementsByClassName('image-lastname')[i + 10].innerHTML = lastName;
      } else {
        document.getElementsByClassName('image-lastname')[i + 10].innerHTML = ' ';
      }
      document.getElementsByClassName('image-speciality')[i + 10].innerHTML = fav[i].course;
      document.getElementsByClassName('image-country')[i + 10].innerHTML = fav[i].country;
    } else {
      document.getElementsByClassName('favorites')[i + 10].style.visibility = 'hidden';
      document.getElementsByClassName('star')[i + 10].style.visibility = 'hidden';
    }
  }
}

function openInfoPopup(searchData) {
  const teachers = findObj(data, searchData.trim());
  const teacher = teachers[0];

  if (teacher.full_name) document.getElementsByClassName('info-text-name')[0].innerHTML = teacher.full_name;
  if (teacher.course) document.getElementsByClassName('info-text-speciality')[0].innerHTML = teacher.course;
  if (teacher.city) document.getElementsByClassName('info-text')[0].innerHTML = `${teacher.country}, ${teacher.city}`;
  if (teacher.age) document.getElementsByClassName('info-text')[1].innerHTML = `${teacher.age}, ${teacher.gender}`;
  if (teacher.email) document.getElementsByClassName('info-text-mail')[0].innerHTML = teacher.email;
  if (teacher.phone) document.getElementsByClassName('info-text')[2].innerHTML = teacher.phone;
  if (teacher.note) document.getElementsByClassName('info-textinfo')[0].innerHTML = teacher.note;
  if (teacher.picture_large) document.getElementById('popup-img').src = teacher.picture_large;

  if (teacher.favorite) document.getElementById('info-star').innerHTML = '★';
  if (!teacher.favorite) document.getElementById('info-star').innerHTML = '☆';

  document.getElementsByClassName('info-popup')[0].style.visibility = 'visible';
}

function closeSearch() {
  for (let i = 0; i < document.getElementsByClassName('search-list').length; i += 1) {
    document.getElementsByClassName('search-list')[i].style.visibility = 'hidden';
  }
}

function search() {
  closeSearch();
  const searchData = document.getElementsByClassName('search-teacher')[0].value.trim();
  const teachers = findObj(data, searchData);
  const div = document.createElement('div');
  div.classList.add('search-list');
  for (let i = 0; i < teachers.length; i += 1) {
    const container = document.createElement('div');
    container.classList.add('search-container');
    const img = document.createElement('img');
    img.classList.add('image-small');
    img.src = teachers[i].picture_large;
    const name = document.createElement('p');
    name.textContent = teachers[i].full_name;
    container.appendChild(img);
    container.appendChild(name);
    div.appendChild(container);
  }
  if (!teachers.length) {
    const message = document.createElement('p');
    message.textContent = 'Teacher not found';
    div.appendChild(message);
  }
  document.getElementsByTagName('body')[0].appendChild(div);
}

function sortTable(field) {
  isAsc = !isAsc;
  sortedData = sort(data, field, isAsc);
  for (let i = 0; i < 10; i += 1) {
    document.getElementsByClassName('table-name')[i].innerHTML = sortedData[i].full_name;
    document.getElementsByClassName('table-course')[i].innerHTML = sortedData[i].course;
    if (sortedData[i].age) {
      document.getElementsByClassName('table-age')[i].innerHTML = sortedData[i].age;
    } else {
      document.getElementsByClassName('table-age')[i].innerHTML = ' ';
    }
    document.getElementsByClassName('table-gender')[i].innerHTML = sortedData[i].gender;
    document.getElementsByClassName('table-country')[i].innerHTML = sortedData[i].country;
  }
}

function changeFav(name) {
  const obj = findObj(data, name.trim())[0];
  if (obj.favorite) {
    data[data.indexOf(obj)].favorite = false;
    document.getElementById('info-star').innerHTML = '☆';
    document.getElementsByClassName('star')[data.indexOf(obj)].style.visibility = 'hidden';
  } else {
    data[data.indexOf(obj)].favorite = true;
    document.getElementById('info-star').innerHTML = '★';
    document.getElementsByClassName('star')[data.indexOf(obj)].style.visibility = 'visible';
  }
  showNewFav();
}

function filterCountry(country) {
  if (country === 'all') {
    countryCondition = false;
  } else {
    countryCondition = country;
  }
  showFilterTop();
}

function filterAge(age) {
  if (age === 'all') {
    ageCondition = false;
  } else {
    ageCondition = age;
  }
  showFilterTop();
}

function filterGender(gender) {
  if (gender === 'male' || gender === 'female') {
    genderCondition = gender;
  } else {
    genderCondition = false;
  }
  showFilterTop();
}

function showOnlyFav() {
  if (!onlyFav) {
    onlyFav = true;
  } else {
    onlyFav = false;
  }
  showFilterTop();
}

function showOnlyPhoto() {
  if (!onlyPhoto) {
    onlyPhoto = true;
  } else {
    onlyPhoto = false;
  }
  showFilterTop();
}

function cleanFilter() {
  document.getElementById('filter-gender').value = 'all';
  document.getElementById('filter-age').value = 'all';
  document.getElementById('filter-country').value = 'all';
  ageCondition = false;
  countryCondition = false;
  genderCondition = false;
  onlyFav = false;
  onlyPhoto = false;
  filteredData = data;
}

function addTeacher() {
  const obj = {};
  obj.full_name = document.getElementById('addName').value;
  obj.email = document.getElementById('addMail').value;
  obj.phone = document.getElementById('addPhone').value;
  obj.course = document.getElementById('addCourse').value;
  obj.country = document.getElementById('addCountry').value;
  obj.city = document.getElementById('addCity').value;
  obj.b_date = document.getElementById('addDate').value;
  obj.age = 2023 - document.getElementById('addDate').value.split('-')[0];
  obj.color = document.getElementById('addColor').value;
  obj.note = document.getElementById('addNote').value;
  if (document.getElementById('addMale').checked) obj.gender = 'male';
  if (document.getElementById('addFemale').checked) obj.gender = 'female';
  obj.picture_large = '../images/user.png';
  if (validation(obj)) {
    document.getElementsByClassName('add-popup')[0].style.visibility = 'hidden';
    data.unshift(obj);
    cleanFilter();
    showFilterTop();
    showNewTable();
    post(obj).then((response) => {
      console.log(response);
    });
  }
}

function paginationTop(index) {
  const changedCurrentTop = currentTop + index;
  if (changedCurrentTop > -1 && changedCurrentTop < filteredData.length) {
    currentTop = changedCurrentTop;
    for (let i = 0; i < 10; i += 1) {
      if ((currentTop + i) < filteredData.length) {
        document.getElementsByClassName('starred')[i].style.visibility = 'visible';
        document.getElementsByClassName('image-large')[i].src = filteredData[currentTop + i].picture_large;
        const firstName = filteredData[currentTop + i].full_name.split(' ')[0];
        const lastName = filteredData[currentTop + i].full_name.split(' ')[1];
        document.getElementsByClassName('image-name')[i].innerHTML = firstName;
        if (lastName) {
          document.getElementsByClassName('image-lastname')[i].innerHTML = lastName;
        } else {
          document.getElementsByClassName('image-lastname')[i].innerHTML = ' ';
        }
        document.getElementsByClassName('image-speciality')[i].innerHTML = filteredData[currentTop + i].course;
        document.getElementsByClassName('image-country')[i].innerHTML = filteredData[currentTop + i].country;
        if (filteredData[currentTop + i].favorite) {
          document.getElementsByClassName('star')[i].style.visibility = 'visible';
        } else {
          document.getElementsByClassName('star')[i].style.visibility = 'hidden';
        }
      } else {
        document.getElementsByClassName('starred')[i].style.visibility = 'hidden';
        document.getElementsByClassName('star')[i].style.visibility = 'hidden';
      }
    }
  }
}

function paginationFav(index) {
  const fav = data.filter((obj) => obj.favorite);
  currentFav += index;
  if (currentFav === -1) {
    currentFav = fav.length;
  }
  for (let i = 0; i < 5; i += 1) {
    document.getElementsByClassName('image-large')[i + 10].src = fav[(currentFav + i) % fav.length].picture_large;
    const firstName = fav[(currentFav + i) % fav.length].full_name.split(' ')[0];
    const lastName = fav[(currentFav + i) % fav.length].full_name.split(' ')[1];
    document.getElementsByClassName('image-name')[i + 10].innerText = firstName;
    if (lastName) {
      document.getElementsByClassName('image-lastname')[i + 10].innerText = lastName;
    } else {
      document.getElementsByClassName('image-lastname')[i + 10].innerText = ' ';
    }
    document.getElementsByClassName('image-speciality')[i + 10].innerText = fav[(currentFav + i) % fav.length].course;
    document.getElementsByClassName('image-country')[i + 10].innerText = fav[(currentFav + i) % fav.length].country;
  }
}

function paginationTable(index) {
  for (let i = 0; i < 10; i += 1) {
    if ((index + i) < data.length) {
      document.getElementsByClassName('table-name')[i].innerText = sortedData[index + i].full_name;
      document.getElementsByClassName('table-course')[i].innerText = sortedData[index + i].course;
      if (data[i].age) {
        document.getElementsByClassName('table-age')[i].innerText = sortedData[index + i].age;
      } else {
        document.getElementsByClassName('table-age')[i].innerText = ' ';
      }
      document.getElementsByClassName('table-gender')[i].innerText = sortedData[index + i].gender;
      document.getElementsByClassName('table-country')[i].innerText = sortedData[index + i].country;
    } else {
      document.getElementsByClassName('table-name')[i].style.visibility = 'hidden';
      document.getElementsByClassName('table-course')[i].style.visibility = 'hidden';
      document.getElementsByClassName('table-age')[i].style.visibility = 'hidden';
      document.getElementsByClassName('table-gender')[i].style.visibility = 'hidden';
      document.getElementsByClassName('table-country')[i].style.visibility = 'hidden';
    }
  }
}

function pagination(index) {
  getPagination(index).then((response) => {
    const responseData = normalize(response);
    for (let i = 0; i < 10; i += 1) {
      document.getElementsByClassName('table-name')[i].innerText = responseData[i].full_name;
      document.getElementsByClassName('table-course')[i].innerText = responseData[i].course;
      if (responseData[i].age) {
        document.getElementsByClassName('table-age')[i].innerText = responseData[i].age;
      } else {
        document.getElementsByClassName('table-age')[i].innerText = ' ';
      }
      document.getElementsByClassName('table-gender')[i].innerText = responseData[i].gender;
      document.getElementsByClassName('table-country')[i].innerText = responseData[i].country;
    }
  });
}
function setCountries(users) {
  const uniqueCountries = [];
  users.forEach((user) => {
    if (!uniqueCountries.includes(user.country)) {
      uniqueCountries.push(user.country);
    }
    uniqueCountries.sort();
  });

  const selectElement1 = document.getElementById('filter-country');
  const selectElement2 = document.getElementById('addCountry');
  selectElement1.innerHTML = '';
  selectElement2.innerHTML = '';

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'All';
  selectElement1.appendChild(allOption);

  uniqueCountries.forEach((country) => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value = country;
    option2.textContent = country;
    option2.value = country;
    option1.textContent = country;
    selectElement1.appendChild(option1);
    selectElement2.appendChild(option2);
  });
}

console.log(testModules.hello);
get.then((response) => {
  data = normalize(response);
  sortedData = data;
  filteredData = data;
  setCountries(data);
  showTop();
  showTable();
  showFav();
  for (let i = 0; i < 15; i += 1) {
    document.getElementsByClassName('image-large')[i].addEventListener('click', () => openInfoPopup(`${document.getElementsByClassName('image-name')[i].textContent} ${document.getElementsByClassName('image-lastname')[i].textContent}`));
  }
});

document.getElementById('search').addEventListener('click', search);

document.getElementById('sort-name').addEventListener('click', () => sortTable('full_name'));
document.getElementById('sort-course').addEventListener('click', () => sortTable('course'));
document.getElementById('sort-age').addEventListener('click', () => sortTable('age'));
document.getElementById('sort-gender').addEventListener('click', () => sortTable('gender'));
document.getElementById('sort-country').addEventListener('click', () => sortTable('country'));

document.getElementById('addTeacher').addEventListener('click', addTeacher);
document.getElementById('info-star').addEventListener('click', () => changeFav(document.getElementsByClassName('info-text-name')[0].textContent));

document.getElementById('filter-country').addEventListener('change', () => filterCountry(document.getElementById('filter-country').value));
document.getElementById('filter-age').addEventListener('change', () => filterAge(document.getElementById('filter-age').value));
document.getElementById('filter-gender').addEventListener('change', () => filterGender(document.getElementById('filter-gender').value));

document.getElementById('only-photo').addEventListener('click', showOnlyPhoto);
document.getElementById('only-fav').addEventListener('click', showOnlyFav);

document.getElementById('openAddPopup1').addEventListener('click', () => {
  document.getElementsByClassName('add-popup')[0].style.visibility = 'visible';
});
document.getElementById('openAddPopup2').addEventListener('click', () => {
  document.getElementsByClassName('add-popup')[0].style.visibility = 'visible';
});
document.getElementById('closeAddPopup').addEventListener('click', () => {
  document.getElementsByClassName('add-popup')[0].style.visibility = 'hidden';
});
document.getElementById('closeInfoPopup').addEventListener('click', () => {
  document.getElementsByClassName('info-popup')[0].style.visibility = 'hidden';
});

document.getElementById('next1').addEventListener('click', () => paginationTop(10));
document.getElementById('prev1').addEventListener('click', () => paginationTop(-10));

document.getElementById('next2').addEventListener('click', () => paginationFav(1));
document.getElementById('prev2').addEventListener('click', () => paginationFav(-1));

document.getElementById('page1').addEventListener('click', () => paginationTable(0));
document.getElementById('page2').addEventListener('click', () => paginationTable(10));
document.getElementById('page3').addEventListener('click', () => paginationTable(20));
document.getElementById('page-last').addEventListener('click', () => paginationTable(Math.floor(data.length / 10) * 10));

for (let i = 0; i < 15; i += 1) {
  document.getElementsByClassName('image-large')[i].addEventListener('click', () => openInfoPopup(`${document.getElementsByClassName('image-name')[i].textContent} ${document.getElementsByClassName('image-lastname')[i].textContent}`));
}
