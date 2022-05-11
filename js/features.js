import {personsArr} from "./main.js";
import { deletePerson } from "./delete.js";
import { makePeopleArr } from "./main.js";

const container = document.querySelector('.main-container');




async function createHTMlElements(){
    const arrOfObj = await makePeopleArr();
    
    let personKeys = ['id', 'gender', 'firstName', 'lastName', 'hobby', 'age', 'city', 'capsule'];
   
      for(let i = 0 ; i < arrOfObj.length; i++){
          const row = document.createElement('div');
          row.setAttribute('class', 'row');
          const delBtn = document.createElement('button');
          const editBtn = document.createElement('button');
          
       for(let j = 0 ; j < personKeys.length ; j++){
          const cell = document.createElement('div');
          cell.innerHTML = arrOfObj[i][personKeys[j]];
          cell.setAttribute('class', 'cell');
          row.appendChild(cell);
          row.setAttribute('id', `id${arrOfObj[i]['id']}`);   //* id018
          
      }
      editBtn.setAttribute('id', arrOfObj[i]['id']);
      editBtn.addEventListener('click', ()=>{alert("I will activate edit func")});
      editBtn.innerText = 'Edit';
      row.appendChild(editBtn);
    
      delBtn.setAttribute('id', arrOfObj[i]['id']);
      delBtn.addEventListener('click', ()=>{deletePerson(arrOfObj[i]['id'])});
      delBtn.innerText = 'Delete';
      row.appendChild(delBtn);
      container.appendChild(row);


      document.documentElement.style.setProperty("--columns", personKeys.length );
  document.documentElement.style.setProperty("--rows", arrOfObj.length);

}
}




createHTMlElements();