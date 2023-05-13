const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = today.getFullYear();

const lastupdated = document.querySelector("#lastupdated");
lastupdated.textContent = document.lastModified;

menubutton = document.querySelector("#menu-button");

menubutton.addEventListener('click', ()=>
{
    document.querySelector('#navbar').classList.toggle('active');
    document.querySelector('#menu-open').classList.toggle('active');
    document.querySelector('#menu-close').classList.toggle('active');
});