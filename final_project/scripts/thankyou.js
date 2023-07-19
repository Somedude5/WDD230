// Retrieve the selected fruit choices from local storage
const order = JSON.parse(localStorage.getItem('order'));

if (order) {
  document.getElementById('firstName').textContent = order.firstName;
  document.getElementById('email').textContent = order.email;
  document.getElementById('phone').textContent = order.phone;
  document.getElementById('fruit1').textContent = order.fruit1;
  document.getElementById('fruit2').textContent = order.fruit2;
  document.getElementById('fruit3').textContent = order.fruit3;
  document.getElementById('instructions').textContent = order.instructions;
  
  const orderTime = new Date(order.orderTime);
  document.getElementById('orderTime').textContent = orderTime.toLocaleString(); // Display the order time
}
// Fetch fruit data from "data/fruits.json"
async function fetchFruitData() {
  try {
    const response = await fetch('./data/fruits.JSON');
    const fruitData = await response.json();
    console.log('Fruit data:', fruitData);
    return fruitData;
  } catch (error) {
    console.error('Error fetching fruit data:', error);
    return [];
  }
}

// Calculate the total amount for the desired properties
async function calculateTotalNutrition() {
  const fruitData = await fetchFruitData();

  let totalCarbohydrates = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  console.log(order.fruit1);
  console.log(order.fruit2);
  console.log(order.fruit3);

  [order.fruit1, order.fruit2, order.fruit3].forEach((fruitName) => {
    const fruit = fruitData.find((f) => f.name === fruitName);
    if (fruit) {
      totalCarbohydrates += fruit.nutritions.carbohydrates;
      totalProtein += fruit.nutritions.protein;
      totalFat += fruit.nutritions.fat;
      totalSugar += fruit.nutritions.sugar;
      totalCalories += fruit.nutritions.calories;

    }
  });


  console.log('Total Carbohydrates:', totalCarbohydrates);
  console.log('Total Protein:', totalProtein);
  console.log('Total Fat:', totalFat);
  console.log('Total Sugar:', totalSugar);
  console.log('Total Calories:', totalCalories);

  // Store the total nutrition values in local storage
  const totalNutrition = {
    carbohydrates: totalCarbohydrates,
    protein: totalProtein,
    fat: totalFat,
    sugar: totalSugar,
    calories: totalCalories,
  };
  localStorage.setItem('totalNutrition', JSON.stringify(totalNutrition));

  document.getElementById('carbs').textContent = Math.round(totalCarbohydrates) + " grams";
  document.getElementById('prot').textContent = Math.round(totalProtein) + " grams";
  document.getElementById('fat').textContent = Math.round(totalFat) + " grams";
  document.getElementById('sug').textContent = Math.round(totalSugar) + " grams";
  document.getElementById('cals').textContent = Math.round(totalCalories) + " grams";
}

calculateTotalNutrition();