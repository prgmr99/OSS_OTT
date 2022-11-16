let itemsArray = [];
localStorage.setItem('item', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('item'));