/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

input.addEventListener('keydown', function (event) {
    const itemText = input.value;
    const newItem = document.createElement('div');
    newItem.textContent = itemText;

    newItem.addEventListener('click', function () {
        newItem.classList.toggle('done');
    })

    if (event.key == 'Enter' && itemText.trim() != '') {
        itemsContainer.append(newItem);
        input.value = '';
    }
});

/*
const input = document.querySelector('#input');
const itemsContainer = document.querySelector('.items');

input.addEventListener('keydown', function(event) {
  const groceryText = input.value;
  const newGrocery = document.createElement('div');
  newGrocery.textContent = groceryText;

  if (event.key == 'Enter' && groceryText.trim() != '') {
    itemsContainer.append(newGrocery);
    input.value = '';
  }

  newGrocery.onclick = function() {
    newGrocery.classList.toggle('done');
  }
});
*