// Get references to the form and its inputs
const smoothieForm = document.querySelector('#smoothie-form');
const smoothieNameInput = document.querySelector('#smoothie-name');
const smoothieBaseInput = document.querySelector('#smoothie-base');
const smoothieFruitsInput = document.querySelector('#smoothie-fruits');
const smoothieVegetablesInput = document.querySelector('#smoothie-vegetables');
const smoothieExtrasInput = document.querySelector('#smoothie-extras');
const orderButton = document.querySelector('#order-button');

// Define Smoothie class
class Smoothie {
  constructor(name, base, fruits, vegetables, extras) {
    this.name = name;
    this.base = base;
    this.fruits = fruits;
    this.vegetables = vegetables;
    this.extras = extras;
  }

  // Method to calculate total price of the smoothie
  getTotalPrice() {
    // Define price of each ingredient
    const basePrice = 4.0;
    const fruitPrice = 0.7;
    const vegetablePrice = 1.2;
    const extraPrice = 1.0;

    // Calculate total price based on number of ingredients
    let totalPrice = basePrice;
    totalPrice += this.fruits.length * fruitPrice;
    totalPrice += this.vegetables.length * vegetablePrice;
    totalPrice += this.extras.length * extraPrice;
    console.log('Base price:', basePrice);
console.log('Fruit price:', fruitPrice);
console.log('Vegetable price:', vegetablePrice);
console.log('Extra price:', extraPrice);
console.log('Number of fruits:', this.fruits.length);
console.log('Number of vegetables:', this.vegetables.length);
console.log('Number of extras:', this.extras.length);
console.log('Total price:', totalPrice);


    // Round to 2 decimal places and return
    return totalPrice.toFixed(2);
  }

  // Method to generate description of the smoothie
  describeSmoothie() {
  let description = `You have ordered a ${this.name} smoothie with ${this.base} as the base. `;
    description += `It contains ${this.fruits.join(', ')} as fruits and ${this.vegetables.join(', ')} as vegetables. `;
    description += `You have also added ${this.extras.join(', ')} as extras. `;
    description += `The total cost of your smoothie is $ ${this.getTotalPrice()}. Enjoy!`;

    return description;
  }
}

// Event listener for order button
smoothieForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get values from form inputs
  const smoothieName = smoothieNameInput.value;
  const smoothieBase = smoothieBaseInput.value;
  const smoothieFruits = Array.from(smoothieFruitsInput.selectedOptions, option => option.value);
  const smoothieVegetables = Array.from(smoothieVegetablesInput.selectedOptions, option => option.value);
  const smoothieExtras = Array.from(smoothieExtrasInput.selectedOptions, option => option.value);

  // Create Smoothie object
  const smoothie = new Smoothie(smoothieName, smoothieBase, smoothieFruits, smoothieVegetables, smoothieExtras);

  // Display smoothie description in HTML Page
  const smoothieDescription = document.querySelector('#smoothie-description');
  if (smoothieDescription) {
    smoothieDescription.textContent = smoothie.describeSmoothie();
  }

  // Display smoothie image in HTML
  const smoothieImage = document.querySelector('#smoothie-image');
  if (smoothieImage) {
    const imageUrl = `images/${smoothieBase.toLowerCase()}.jpg`;
    smoothieImage.innerHTML ='<img src='+imageUrl+' alt='+smoothieBase+'Smoothie width=100%>';
  }


});

