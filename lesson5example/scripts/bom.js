const input_button = document.querySelector("button");

const user_input = document.querySelector("#favchap");

const lists = document.querySelector("#list");


input_button.addEventListener('click', () => 
{
    if (user_input.value == ""){
        return
    }

    newlistitem = document.createElement('li')
    deleteButton = document.createElement('button')
    newlistitem.textContent = user_input.value
    newlistitem.style.color = "red"
    newlistitem.style.backgroundColor = "blue"
    deleteButton.textContent = '❌'
    newlistitem.append(deleteButton)
    lists.append(newlistitem)
    deleteButton.addEventListener('click', () => 
    {
        lists.remove()
    })
    user_input.focus()
    user_input.value = ""
});


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