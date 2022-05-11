import { personsArr, container } from './main.js';
import { createHTMlElements } from './features.js';

let lastKeySorted = undefined;

export function sort(key) {
  let directionInc = true;
  if (lastKeySorted === key) {
    directionInc = !directionInc;
  } else {
    lastKeySorted = key;
  }

  personsArr.sort((personA, personB) => {
    return directionInc
      ? personA[key] < personB[key]
      : personA[key] > personB[key];
  });

  createHTMlElements(arrOfObj);
}
