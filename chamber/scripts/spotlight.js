// Get business data for spotlights
const businessDataUrl = "./data/directory.json";

function displaySpotlights(businessList) {
  businessList = businessList.filter(
    (x) => x.membershipLevel === "gold" || x.membershipLevel === "silver"
  );
  
  spotlights = [];
  for (let i = 0; i < 3; i++) {
    var elt = Math.floor(Math.random() * businessList.length);
    spotlights.push(businessList.splice(elt, 1)[0]);
  }

  // Now display stuff
  var mainspotlight = document.querySelector(".main-spotlight");
  spotlightcount = 1;
  
  results = spotlights.map((spotlight) => {
    var newdiv = document.createElement("div");
    newdiv.classList.add("spotlight" + spotlightcount);
    spotlightcount++;
    newdiv.innerHTML = `<h4>${spotlight.name}</h4>
                        <p class="centered-image"><a href="${spotlight.website}"><img src="${spotlight.imageURL}"></a></p>
                        <p>${spotlight.street + " "+spotlight.city}, ${spotlight.state}</p>
                        <p>${spotlight.phone}</p>`;
    mainspotlight.append(newdiv);
    return `${spotlight.name}`;
  });

  let maxitem = results.reduce((max, item) => {
    return item > max ? item : max;
  }, results[0]);

  console.log(results);
  console.log(maxitem);
}

async function getBusinessData() {
  const response = await fetch(businessDataUrl);
  if (response.ok) {
    const data = await response.json();
    displaySpotlights(data.members);
  } else {
    console.error("There was an error loading the data.");
  }
}

getBusinessData();
