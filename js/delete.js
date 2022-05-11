import { personsArr } from './main.js';

export function deletePerson(id) {
  const elementToRemove = document.querySelector(`#id${id}`);
  if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
  } else {
    console.error(`Elelment with id "${id}" is ont in the DOM`);
  }

  const personIndex = personsArr.findIndex((person) => person.id === id);
  if (personIndex === -1) {
    console.error(`Person with id "${id}" is ont in personsArr`);
  } else {
    personsArr.splice(personIndex, 1);
  }
}


