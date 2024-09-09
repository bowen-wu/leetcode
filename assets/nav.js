document.addEventListener('DOMContentLoaded', function () {
  var collapsibleElements = document.querySelectorAll('.nav-link');

  collapsibleElements.forEach(function (element) {
    element.addEventListener('click', function () {
      var parent = element.parentElement;
      var isActive = parent.classList.contains('active');

      // Close all menus
      document.querySelectorAll('.nav-item').forEach(function (item) {
        item.classList.remove('active');
        item.querySelector('.collapse').classList.remove('show');
      });

      // If this menu wasn't already open, open it
      if (!isActive) {
        parent.classList.add('active');
        parent.querySelector('.collapse').classList.add('show');
      }
    });
  });
});
