const url = "./data/directory.json";

async function getmemberData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);  // note that we reference the member array of the data object given the structure of the json file
  displaymembers(data.members);
  console.log(data)
}

const displaymembers = (members) => {
  const cards = document.querySelector(".cards"); // select the output container element

  members.forEach(
    (member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement("section");
      card.classList.add("directory-card")
     card.innerHTML = `
     <h2>${member.name}</h2>
     <img src="${member.imageURL}" alt="">
     <p>${member.street}</p>
     <p>${member.city},${member.country},${member.zip}</p>
     <p><a href="${member.websiteURL}">website</a></p>`
     cards.appendChild(card);
    } // end of forEach loop
  );
}; // end of function expression

console.log("Hello");

getmemberData();
