"use strict";
console.log("JS is running (NICE BRO)");
let a = document.getElementById('todo').value;

//Event Listener for Text Form
document.getElementById("formeo").addEventListener("submit", (evt) => {
  let newCheck = document.getElementById("checkie");
  let checkbox = document.createElement('input');
  let value = document.getElementById('todo').value;
  let newDiv = document.createElement('div');
  let label = document.createElement('label');
  label.htmlFor = "id";
  label.appendChild(document.createTextNode(value));
  newDiv.id = "div"+value;
  let myDiv = document.getElementById("div"+value);
  checkbox.type ="checkbox";
  checkbox.name = "todocheck"
  checkbox.value = value;
  checkbox.id = value;
  newCheck.appendChild(newDiv);
  newDiv.appendChild(checkbox);
  newDiv.appendChild(label);
});
