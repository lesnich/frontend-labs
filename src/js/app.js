const testModules = require('./test-module');
const data = require('./mockNormalize');
const validation = require('./validation');
const filter = require('./filter');
const findObj = require('./findObj');
const sort = require('./sort');
require('../css/app.css');

let sortedData = data;
let isAsc = false;
let ageCondition = false;
let countryCondition = false;
let genderCondition = false;
let onlyFav = false;
let onlyPhoto = false;

function showTop() {
  const topContainer = document.querySelector('.top-container');
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

    const country = document.createElement('p');
    country.classList.add('image-country');
    country.textContent = data[i].country;
    div.appendChild(country);

    const speciality = document.createElement('p');
    speciality.classList.add('image-speciality');
    speciality.textContent = data[i].course;
    div.appendChild(speciality);

    const star = document.createElement('p');
    star.classList.add('star');
    star.textContent = '★';
    div.appendChild(star);

    topContainer.appendChild(div);

    if (data[i].favorite) {
      stars[i].style.visibility = 'visible';
    }
  }
}

function showFilterTop() {
  let showArray = data;
  if (countryCondition) {
    showArray = filter(showArray, countryCondition, null, null, null, null);
  }
  if (ageCondition) {
    showArray = filter(showArray, null, ageCondition, null, null, null);
  }
  if (genderCondition) {
    showArray = filter(showArray, null, null, genderCondition, null, null);
  }
  if (onlyFav) {
    showArray = filter(showArray, null, null, null, null, true);
  }
  if (onlyPhoto) {
    showArray = filter(showArray, null, null, null, true, null);
  }
  for (let i = 0; i < 10; i += 1) {
    if (showArray.length > i) {
      document.getElementsByClassName('starred')[i].style.visibility = 'visible';
      document.getElementsByClassName('image-large')[i].src = showArray[i].picture_large;
      const firstName = showArray[i].full_name.split(' ')[0];
      const lastName = showArray[i].full_name.split(' ')[1];
      document.getElementsByClassName('image-name')[i].innerHTML = firstName;
      if (lastName) {
        document.getElementsByClassName('image-lastname')[i].innerHTML = lastName;
      } else {
        document.getElementsByClassName('image-lastname')[i].innerHTML = ' ';
      }
      document.getElementsByClassName('image-speciality')[i].innerHTML = showArray[i].course;
      document.getElementsByClassName('image-country')[i].innerHTML = showArray[i].country;
      if (showArray[i].favorite) {
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

function showFav() {
  const fav = data.filter((obj) => obj.favorite);
  const next = document.getElementById('next');
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
  if (!onlyFav) {
    onlyPhoto = true;
  } else {
    onlyPhoto = false;
  }
  showTop();
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
  sortedData = data;
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
  } else {
    alert('Your data is not valid.');
  }
}

console.log(testModules.hello);
showTop(data);
showTable();
showFav();

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

for (let i = 0; i < 15; i += 1) {
  document.getElementsByClassName('image-large')[i].addEventListener('click', () => openInfoPopup(`${document.getElementsByClassName('image-name')[i].textContent} ${document.getElementsByClassName('image-lastname')[i].textContent}`));
}
