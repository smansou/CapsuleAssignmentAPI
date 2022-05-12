
const container = document.querySelector(".main-container");
const search = document.getElementById("search");
const category = document.getElementById("category");
const restart = document.getElementById("reset_btn");

import { deletePerson } from "./delete.js";
import { createHTMlElements } from "./features.js";
import { draw } from "./features.js";


export let personsArr = [];




const getFetchedData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export async function makePeopleArr() {
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
          firstName: response.firstName.replaceAll(" ", ""),
          lastName: response.lastName.replaceAll(" ", ""),
          hobby: response.hobby,
          age: response.age,
          city: response.city,
          capsule: response.capsule,
        };
        personsArr.push(person);
      })
    )
    .catch((e) => console.log(e));
  return personsArr;
}




category.addEventListener("change", filt);
search.addEventListener("keyup", filt);

function filt() {
  const text = search.value;
  const filterBy = category.value;
  if (text !== "") {
    let filterArr;
    if (filterBy !== "evreything") {
      filterArr = personsArr.filter((obj) => {
        return obj[filterBy].toString().startsWith(text);
      });
    } else {
      filterArr = personsArr.filter(
        (obj) =>
          obj["firstName"].toString().startsWith(text) ||
          obj["lastName"].toString().startsWith(text) ||
          obj["hobby"].toString().startsWith(text) ||
          obj["age"].toString().startsWith(text) ||
          obj["city"].toString().startsWith(text) ||
          obj["capsule"].toString().startsWith(text)
      );
    }
    createHTMlElements(filterArr);
  } else {
    createHTMlElements(personsArr);
  }
}
restart.addEventListener("click", () => {
  search.value = "";
  personsArr = [];
  draw();
});
