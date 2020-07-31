// COLUMNS
document.querySelector('#grid-columns').addEventListener('keyup', () => {
  // read the colour that the user has selected
  const gridColumns = document.querySelector('#grid-columns').value;

// Store the user's data
chrome.storage.local.set({gridColumns});
  // get all the google tabs and send a message to their tabs 
  chrome.tabs.query({ url: "<all_urls>" }, tabs => {
    tabs.forEach(tab => 
      chrome.tabs.sendMessage(tab.id, { gridColumns } )
    );
  });
});

// GUTTER
document.querySelector('#grid-gutter').addEventListener('keyup', () => {
  // read the colour that the user has selected
  const gridGutter = document.querySelector('#grid-gutter').value;
// Store the user's data
chrome.storage.local.set({gridGutter});
  // get all the google tabs and send a message to their tabs 
  chrome.tabs.query({ url: "<all_urls>" }, tabs => {
    tabs.forEach(tab => 
      chrome.tabs.sendMessage(tab.id, {gridGutter} )
    );
  });
});

// SIDES
document.querySelector('#grid-sides').addEventListener('keyup', () => {
  // read the colour that the user has selected
  const gridSides = document.querySelector('#grid-sides').value;
// Store the user's data
chrome.storage.local.set({gridSides});
  // get all the google tabs and send a message to their tabs 
  chrome.tabs.query({ url: "<all_urls>" }, tabs => {
    tabs.forEach(tab => 
      chrome.tabs.sendMessage(tab.id, {gridSides} )
    );
  });
});




















// var gridSides = document.querySelector('#grid-sides');
// var gridGutter = document.querySelector('#grid-gutter');
// var gridColumns = document.querySelector('#grid-columns');
// var grid = document.querySelector('.grid');


// var styling = getComputedStyle(document.body);

// gridSides.addEventListener('change', function(){
//   grid.style.setProperty('--grid-sides', gridSides.value + 'px');
//   console.log(styling.getPropertyValue('--grid-sides'));
// });

