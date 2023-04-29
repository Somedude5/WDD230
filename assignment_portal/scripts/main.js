const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = today.getFullYear();

const lastupdated = document.querySelector("#lastupdated");
lastupdated.textContent = document.lastModified;