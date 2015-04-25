// Listener to switch pages when tab selected.
var tabs = document.querySelector('paper-tabs');

tabs.selected = 0;

tabs.addEventListener('core-select', function() {
  console.log("Selected: " + tabs.selected);
});
