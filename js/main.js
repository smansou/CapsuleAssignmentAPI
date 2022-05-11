const container = document.querySelector('.main-container');

// ! temp
const personsArr = [
  {
    id: '018',
    gender: 'female',
    firstName: 'מור',
    lastName: 'מנשה',
    hobby: 'לקרוא',
    age: 31,
    city: 'תל אביב',
    capsule: 4,
  },
  {
    id: '016',
    gender: 'male',
    firstName: 'מור',
    lastName: 'מנשה',
    hobby: 'לקרוא',
    age: 31,
    city: 'תל אביב',
    capsule: 4,
  },
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

// todo draw(array)
// ! genetate person div according to "person" input
// ! set events listeners on "delete" and "edit" btn's

/**
 * @param {}
 * @return {array} array of people objests:
 * @exapel :
 */

// todo delete(id) return void
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
 * @param {event} id
 * @return void
 * @side_effect re-draw all divs, by new template
 */

// todo filter(event)
/**
 * @param {event} id
 * @return void
 * @side_effect re-draw only relevant divs, by new template
 */
