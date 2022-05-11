import { personsArr } from './main.js';

let editIsActiv = false;

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

export function edit(id) {
  if (editIsActiv) return;
  editIsActiv = true;
  const btnElement = document.querySelector(`#edit${id}`);
  if (!btnElement) {
    console.error(`Elelment with id "${id}" is ont in the DOM`);
    return;
  }
  const element = btnElement.parentElement;

  const person = personsArr.find((person) => person.id === id);
  if (!person) {
    console.error(`Person with id "${id}" is ont in personsArr`);
    return;
  }

  addInputsToDOM(element);
  sesEventListeners(person, element);
}

function addInputsToDOM(element) {
  const children = [...element.children];
  children.shift();
  const editBtn = children.pop();
  const delBtn = children.pop();

  editBtn.classList.add('hidden');
  delBtn.classList.add('hidden');

  const save = document.createElement('div');
  save.classList.add('btn', 'save');
  save.textContent = 'Save';
  element.appendChild(save);

  const cancel = document.createElement('div');
  cancel.classList.add('btn', 'cancel');
  cancel.textContent = 'Cancel';
  element.appendChild(cancel);

  children.forEach((element) => {
    const data = element.textContent;
    element.innerHTML = `<input type="text" value="${data}" />`;
  });
}

function sesEventListeners(person, element) {
  const save = element.children[10];
  save.addEventListener('click', () => {
    saveChanges(person, element);
  });
  const cancel = element.children[11];
  cancel.addEventListener('click', () => {
    discardChanges(person, element);
  });
}

const saveChanges = (person, element) => {
  const children = [...element.children];
  person.gender = children[1].children[0].value;
  person.firstName = children[2].children[0].value;
  person.lastName = children[3].children[0].value;
  person.hobby = children[4].children[0].value;
  person.age = children[5].children[0].value;
  person.city = children[6].children[0].value;
  person.capsule = children[7].children[0].value;

  removeInputsFromRow(person, element);
  editIsActiv = false;
};

const discardChanges = (person, element) => {
  removeInputsFromRow(person, element);
  editIsActiv = false;
};

const removeInputsFromRow = (person, element) => {
  const children = [...element.children];
  children.shift(); // get the id out of the arrat
  children.pop().remove(); // removes the "save" button
  children.pop().remove(); // removes the "cancel" button
  children.pop().classList.remove('hidden'); // re-displlay the "delete" button
  children.pop().classList.remove('hidden'); // re-displlay the "edit" button

  children[0].innerHTML = person.gender;
  children[1].innerHTML = person.firstName;
  children[2].innerHTML = person.lastName;
  children[3].innerHTML = person.hobby;
  children[4].innerHTML = person.age;
  children[5].innerHTML = person.city;
  children[6].innerHTML = person.capsule;
};
