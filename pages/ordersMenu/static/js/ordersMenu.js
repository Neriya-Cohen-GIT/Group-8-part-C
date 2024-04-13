
document.addEventListener('DOMContentLoaded', function() {

      const allergensData = ['Vegan', 'Gluten Free', 'Egg Free', 'Dairy Free', 'Nuts Free'];
      const ingredientsData = ['Wheat Flour', 'Sugar', 'Butter', 'Milk', 'Eggs', 'Cocoa powder', 'Fruits'];

      const cakesData = [
        {
            name: 'Regular Chocolate Cake',
            ingredients: ['Wheat Flour', 'Sugar', 'Eggs', 'Cocoa powder','Baking powder', 'Butter', 'Milk','Vanilla extract'],
            allergens: ['Gluten' ,'Eggs', 'Dairy'],
            image: 'static/pics/4- order chocolate.jpg',
            price:['15']
        },
        {
          name: 'Vegan Chocolate Cake',
          ingredients: ['Wheat Flour', 'Sugar', 'Cocoa powder', 'Oil', 'Water', 'Vanilla extract', 'Egg Free','Dairy Free', 'Vegan'],
           allergens: ['Gluten'],
          image: 'static/pics/4- order chocolate.jpg',
          price:['20']
        },
        {
            name: 'Wheat-Free Chocolate Cake',
            ingredients: ['Rice Flour', 'Sugar', 'Cocoa powder', 'Oil', 'Water', 'Vanilla extract', 'Egg Free', 'Vegan', 'Gluten Free','Dairy Free'],
            allergens: ['None'],
            image: 'static/pics/4- order chocolate.jpg',
            price:['25']
        },
        {
            name: 'Vanilla Cake',
            ingredients: ['Wheat Flour', 'Sugar', 'Baking powder', 'Butter', 'Milk', 'Vanilla extract', 'Egg Free'],
            allergens: ['Gluten','Dairy'],
            image: 'static/pics/4- order- vanilla cake.jpg',
            price:['15']
        },
        {
            name: 'Vegan Vanilla Cake',
            ingredients: ['Wheat Flour', 'Sugar', 'Baking powder', 'Oil', 'Water', 'Vanilla extract','Egg Free','Dairy Free', 'Vegan' ],
            allergens: ['Gluten'],
            image: 'static/pics/4- order- vanilla cake.jpg',
            price:['20']
        },
        {
            name: 'Wheat-Free Vanilla Cake',
            ingredients: ['Rice flour', 'Sugar', 'Baking powder', 'Oil', 'Water', 'Vanilla extract','Egg Free','Vegan', 'Gluten Free','Dairy Free'],
            allergens: ['None'],
            image: 'static/pics/4- order- vanilla cake.jpg',
            price:['25']
        },
        {
            name: 'Regular Cheesecake',
            ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Butter', 'Milk', 'Vanilla extract', 'Gluten Free'],
            allergens: ['Dairy', 'Eggs'],
            image: 'static/pics/4- order- Cheese Cake.jpg',
            price:['25']
        },
        {
            name: 'Vegan Cheesecake',
            ingredients: ['Vegan cream cheese', 'Sugar', 'oil', 'water', 'Vanilla extract', 'Vegan', 'Egg Free', 'Dairy Free', 'Gluten Free'],
            allergens: ['None'],
            image: 'static/pics/4- order- Cheese Cake.jpg',
            price:['30']
        },
        {
            name: 'Regular Sponge Cake',
            ingredients: ['Wheat Flour', 'Sugar','Eggs', 'Butter', 'Baking powder', 'Vanilla extract'],
            allergens: ['Gluten' ,'Eggs','Dairy'],
            image: 'static/pics/4- order- Sponge Cake.jpg',
            price:['10']
        },
        {
            name: 'Vegan Sponge Cake',
            ingredients: ['Wheat Flour', 'Sugar', 'oil', 'water','Baking powder', 'Vanilla extract', 'Vegan', 'Egg Free', 'Dairy Free'],
            allergens: ['Gluten'],
            image: 'static/pics/4- order- Sponge Cake.jpg',
            price:['15']
        },
        {
            name: 'Wheat-Free Sponge Cake',
            ingredients: ['Rice flour','Sugar','Eggs', 'Butter', 'Baking powder', 'Vanilla extract', 'Gluten Free'],
            allergens: ['Eggs','Dairy'],
            image: 'static/pics/4- order- Sponge Cake.jpg',
            price:['20']
        },
        {
            name: 'Regular Caramel-Lotus Cake',
            ingredients: ['Wheat Flour', 'Sugar', 'Eggs', 'Butter', 'Lotus Biscoff cookies', 'Baking powder', 'Vanilla extract', 'Caramel sauce',],
            allergens: ['Gluten','Dairy', 'Eggs'],
            image: 'static/pics/4- order- Caramel-Lotus Cake.jpg',
            price:['30']
        },
        {
            name: 'Vegan Caramel-Lotus Cake',
            ingredients: ['Wheat Flour', 'Sugar', 'oil', 'Vegan Lotus Biscoff cookies', 'Baking powder', 'Vanilla extract', 'Vegan Caramel sauce','Vegan', 'Egg Free','Dairy Free'],
            allergens: ['Gluten'],
            image: 'static/pics/4- order- Caramel-Lotus Cake.jpg',
            price:['35']
        },
        {
            name: 'Regular Strudel',
            ingredients: ['Phyllo dough', 'Sugar', 'Apples', 'Butter', 'Lemon juice', 'Cinnamon','Wheat Flour', 'Fruits', 'Egg Free'],
            allergens: ['Gluten', 'Dairy'],
            image: 'static/pics/4- order- Strudel.jpg',
            price:['15']
        },
        {
            name: 'Vegan Strudel',
            ingredients: ['Vegan Phyllo dough', 'Sugar', 'Apples', 'oil', 'Lemon juice', 'Cinnamon', 'Fruits', 'Egg Free','Vegan', 'Gluten Free', 'Dairy Free'],
            allergens: ['None'],
            image: 'static/pics/4- order- Strudel.jpg',
            price:['25']
        },

     // Add more cakes here

      ];

      const allergensList = document.querySelector('.allergens-list');
      const ingredientsList = document.querySelector('.ingredients-list');
      const cakesContainer = document.querySelector('.cakes-container');

 // Populate allergens list
      allergensData.forEach(allergen => {
        const li = document.createElement('li');
        li.textContent = allergen;
        li.addEventListener('click', function() {
            displayCakesByAllergen(allergen);
        });
        allergensList.appendChild(li);
    });


    // Populate ingredients list
    ingredientsData.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        li.addEventListener('click', function() {
            displayCakesByIngredient(ingredient);
        });
        ingredientsList.appendChild(li);
    });

    // Populate cakes
    cakesData.forEach(cake => {
        const cakeItem = document.createElement('div');
        cakeItem.classList.add('cake-item');
       cakeItem.innerHTML = `
              <div class="cake-name">${cake.name}</div>
              <div class="cake-price">$${cake.price}</div>

             <img src="${cake.image}" alt="${cake.name}" class="cake-image">
             <button class="add-to-cart-btn">Add to Cart</button>
                <div class="cake-info">
                 <div class="cake-ingredients">Ingredients: ${cake.ingredients.join(', ')}</div>
                 <div class="cake-allergens">Allergens: ${cake.allergens.join(', ')}</div>
             </div>`;

    cakeItem.addEventListener('click', function() {
        const cakeInfo = cakeItem.querySelector('.cake-info');
        if (cakeInfo.style.display === 'none') {
            // Hide all cake infos first
            document.querySelectorAll('.cake-info').forEach(info => {
                info.style.display = 'none';
            });

            // Display current cake info
          cakeInfo.style.display = 'block';
        } else {
            cakeInfo.style.display = 'none';
        }
    });

    cakeItem.querySelector('.add-to-cart-btn').addEventListener('click', function () {
        addToCart(cake);
    });

    cakesContainer.appendChild(cakeItem);
    });


        // Function to add cake to cart
    function addToCart(cake) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cake);
        localStorage.setItem('cart', JSON.stringify(cart));
    }



    // Function to display cakes containing a specific allergen
    function displayCakesByAllergen(allergen) {
      const filteredCakes = document.querySelectorAll('.cake-item');
      filteredCakes.forEach(cake => {
        const allergens = cake.querySelector('.cake-ingredients').textContent.split(', ');
        if (allergens.includes(allergen)) {
          cake.style.display = 'block';
        } else {
          cake.style.display = 'none';
        }
      });

    }


      // Function to display cakes containing a specific ingredient
    function displayCakesByIngredient(ingredient) {
        const filteredCakes = document.querySelectorAll('.cake-item');
        filteredCakes.forEach(cake => {
            const ingredients = cake.querySelector('.cake-ingredients').textContent;
           if (ingredients.includes(ingredient)) {
               cake.style.display = 'block';
            } else {
               cake.style.display = 'none';
          }
       });
    }

});
