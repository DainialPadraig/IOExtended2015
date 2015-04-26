// Listener to switch pages when tab selected.
var tabs = document.querySelector('paper-tabs');
var pages = document.querySelector('core-pages');

tabs.selected = 0;

tabs.addEventListener('core-select', function() {
  pages.selected = tabs.selected;
});
