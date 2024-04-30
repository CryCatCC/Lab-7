// const categoriesList = document.getElementById('categories-list');
// const specialsLink = document.getElementById('specials-link');

// // Завантаження даних категорій з JSON-файлу
// fetch('categories.json')
//   .then(response => response.json())
//   .then(data => {
//     // Отримання категорій
//     const categories = data.categories;

//     // Створення посилань на категорії
//     categories.forEach(category => {
//       const categoryLink = document.createElement('a');
//       categoryLink.href = `#${category.name}`;
//       categoryLink.textContent = category.name;

//       const categoryItem = document.createElement('li');
//       categoryItem.appendChild(categoryLink);

//       categoriesList.appendChild(categoryItem);
//     });

//     // Обробка посилання "Specials"
//     specialsLink.addEventListener('click', () => {
//       const randomIndex = Math.floor(Math.random() * categories.length);
//       const randomCategory = categories[randomIndex];

//       // Оновлення вмісту сторінки для випадкової категорії
//       // ...
//     });
//   })
//   .catch(error => {
//     console.error('Помилка при завантаженні даних категорій:', error);
//   });

//   // Обробка даних товарів для категорії
// function renderCategoryItems(categoryData) {
//   const itemsList = document.getElementById('items-list');
//   itemsList.innerHTML = ''; // Очищення списку елементів перед додаванням нових

//   categoryData.items.forEach(item => {
//     const itemElement = document.createElement('li');
//     itemElement.classList.add('catalog-item');

//     const itemImage = document.createElement('img');
//     itemImage.src = `images/${categoryData.shortname}/${item.image}`; // Шлях до зображення
//     itemImage.alt = item.name;
//     itemImage.width = 200;
//     itemImage.height = 200;

//     const itemName = document.createElement('h3');
//     itemName.textContent = item.name;

//     const itemDescription = document.createElement('p');
//     itemDescription.textContent = item.description;

//     const itemPrice = document.createElement('span');
//     itemPrice.classList.add('price');
//     itemPrice.textContent = `${item.price} грн`; // Формування ціни

//     itemElement.appendChild(itemImage);
//     itemElement.appendChild(itemName);
//     itemElement.appendChild(itemDescription);
//     itemElement.appendChild(itemPrice);

//     itemsList.appendChild(itemElement);
//   });
// }

// // Обробка посилання "Specials"
// specialsLink.addEventListener('click', () => {
//   const randomIndex = Math.floor(Math.random() * categories.length);
//   const randomCategory = categories[randomIndex];

//   // Завантаження та відображення даних випадкової категорії
//   fetch(`categories/${randomCategory.shortname}.json`)
//     .then(response => response.json())
//     .then(data => renderCategoryItems(data))
//     .catch(error => {
//       console.error('Помилка при завантаженні даних категорії:', error);
//     });
// });




        // Отримуємо посилання на елемент з ID "specialsLink"
        const specialsLink = document.getElementById('specialsLink');
        // Додаємо обробник подій для кліків на посилання
        specialsLink.addEventListener('click', () => {
            // Генеруємо випадкове число від 1 до 3 (або скільки категорій у вас є)
            const randomCategoryNumber = Math.floor(Math.random() * 3) + 1;
            // Переходимо за посиланням на випадкову категорію, замість "#" можна вказати URL категорії
            window.location.href = `category${randomCategoryNumber}.html`; // Припустимо, що категорії мають URL у форматі "category1.html", "category2.html" і т. д.
        });

const categories = ['Категорія 1', 'Категорія 2', 'Категорія 3', 'Категорія 4'];

// Генеруємо випадковий індекс в межах довжини масиву categories
const randomIndex = Math.floor(Math.random() * categories.length);

// Вибираємо категорію за випадковим індексом
const randomCategory = categories[randomIndex];

console.log('Випадкова категорія:', randomCategory);
