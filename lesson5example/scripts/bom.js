const inputButton = document.querySelector("button");
const userInput = document.querySelector("#favchap");
const lists = document.querySelector("#list");

inputButton.addEventListener('click', addItem);

function addItem() {
  const value = userInput.value.trim();
  if (value === "") {
    return;
  }

  const newItem = createListItem(value);
  lists.appendChild(newItem);

  userInput.focus();
  userInput.value = "";
}

function createListItem(value) {
  const newListItem = document.createElement('li');
  const deleteButton = document.createElement('button');

  newListItem.textContent = value;
//   newListItem.style.color = "red";
//   newListItem.style.backgroundColor = "blue";

  deleteButton.textContent = '❌';
  newListItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    newListItem.remove();
  });

  return newListItem;
}



// make sure the input is not blank before doing the following remaining tasks in this list
// create an li element
// create a delete button
// populate the li elements textContent or innerHTML with the input
// populate the button textContent with an ❌
// append the li element with the delete button
// append the list element with the li element just created and appended with text and the delete button
// add an event listener to the delete button that removes the li element when clicked
// send the focus to the input element
// change the input value to nothing or the empty string to clean up the interface for the user