document.body.onload = addElement;
let my_div = newDiv = null;

function addElement() {
  // Создаем новый элемент div
  // и добавляем в него немного контента
  const newDiv = document.createElement("div");
  newDiv.className = "grid";

  // Добавляем только что созданый элемент в дерево DOM
  document.body.insertBefore(newDiv, document.body.childNodes[0]);
  
}

// LOCAL STORAGE
// Grid Columns
chrome.storage.local.get('gridColumns', (response) => {
  // console.log(response); 
  // console.log(response.gridColumns)
  if (response.gridColumns) {
    // console.log(response)

    document.documentElement.style.setProperty('--grid-columns', response.gridColumns);
  }
  // console.log(response)
});


// GUTTERS
chrome.storage.local.get('gridGutter', (response) => {

  if (response.gridGutter) {
    document.documentElement.style.setProperty('--grid-gutter', response.gridGutter + 'px');
  }
});

// SIDES
chrome.storage.local.get('gridSides', (response) => {
  if (response.gridSides) {
    document.documentElement.style.setProperty('--grid-sides', response.gridSides + 'px');
  }
});


// Chrome API
chrome.runtime.onMessage.addListener(request => {
  if (request.gridSides) {
    document.documentElement.style.setProperty('--grid-sides', request.gridSides + 'px');
  }
  if (request.gridGutter) {
    document.documentElement.style.setProperty('--grid-gutter', request.gridGutter + 'px');
  }
  if (request.gridColumns) {
    document.documentElement.style.setProperty('--grid-columns', request.gridColumns);
  }
});
