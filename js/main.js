const container = document.querySelector(".main-container");

import { deletePerson } from "./delete.js";

// ! temp
const personsArr = [
  // {
  //   id: "018",
  //   gender: "female",
  //   firstName: "מור",
  //   lastName: "מנשה",
  //   hobby: "לקרוא",
  //   age: 31,
  //   city: "תל אביב",
  //   capsule: 4,
  // },
  // {
  //   id: "016",
  //   gender: "male",
  //   firstName: "מור",
  //   lastName: "מנשה",
  //   hobby: "לקרוא",
  //   age: 31,
  //   city: "תל אביב",
  //   capsule: 4,
  // },
];

// ! temp

const getFetchedData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// todo makePeopleArr()
/**
 * @return {array} array of people objests:
 * @exapel : 
/**
 * @return {array} array of people objests:
 * @exapel : 
 *  {
 id: '018',
    gender: 'female',
    firstName: 'מור',
    lastName: 'מנשה',
    hobby: 'לקרוא',
    age: 31,
    city: 'תל אביב',
    capsule: 4,
    // DONel: document.querySelector('.person'),
  },
 *
 */
async function makePeopleArr() {
  const data1 = await getFetchedData(
    "https://capsules-asb6.herokuapp.com/api/teacher/mordi"
  );
  const data2 = await getFetchedData(
    "https://capsules-asb6.herokuapp.com/api/teacher/toam"
  );
  const generalData = data1.concat(data2);
  const urls = [];
  for (const element of generalData) {
    urls.push(`https://capsules-asb6.herokuapp.com/api/user/${element.id}`);
  }
  const requests = urls.map((url) => getFetchedData(url));
  await Promise.all(requests)
    .then((responses) =>
      responses.forEach((response) => {
        const person = {
          id: response.id,
          gender: response.gender,
          firstName: response.firstName,
          lastName: response.lastName,
          hobby: response.hobby,
          age: response.age,
          city: response.city,
          capsule: response.capsule,
        };
        personsArr.push(person);
      })
    )
    .catch((e) => console.log(e));
}

async function check() {
  await makePeopleArr();
  console.log(personsArr);
}
check();

// todo draw(array)
// ! genetate person div according to "person" input
// ! set events listeners on "delete" and "edit" btn's

/**
 * @param {}
 * @return {array} array of people objests:
 * @exapel :
 */

// todo deletePerson(id) return void
/**
 * @param {string} id
 * @return void
 * @side_effect delelt person from personArr + DOM
 */

// todo edit(id)
/**
 * @param {string} id
 * @return void
 * @side_effect update person's data in personArr + DOM
 */

// todo sort(event)
/**
 * @param {event}
 * @return void
 * @side_effect re-draw all divs, by new template
 */

// todo filter(event)
/**
 * @param {event}
 * @return void
 * @side_effect re-draw only relevant divs, by new template
 */

export { personsArr };
