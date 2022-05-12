import { personsArr, container } from './main.js';
import { createHTMlElements } from './features.js';

let lastKeySorted = undefined;
let directionInc = true;

export function sort(key) {
  container.innerHTML = '';

  if (lastKeySorted === key) {
    directionInc = !directionInc;
  } else {
    directionInc = true;
    lastKeySorted = key;
  }
  const tempArr = [...personsArr];

  tempArr.sort((personA, personB) => {
    if (personA[key] < personB[key]) return directionInc ? 1 : -1;
    return !directionInc ? 1 : -1;
  });

  createHTMlElements(tempArr);
}

export const setSortEventListeners = () => {
  const mainHeaadings = document.querySelector('.main-hedings');
  console.log(mainHeaadings.children);
  [...mainHeaadings.children].forEach((element) => {
    const key = element.dataset.type;
    element.addEventListener('click', () => {
      sort(key);
    });
  });
};
