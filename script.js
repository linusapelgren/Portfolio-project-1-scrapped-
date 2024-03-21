document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown button
    var dropdownbtn = document.querySelector('.dropdownbtn');
    // Get the dropdown content
    var dropdownContent = document.querySelector('.dropdown-content');

    // Add an event listener to the dropdown button
    dropdownbtn.addEventListener('click', function() {
      // Toggle the 'active' class on the dropdown content when the button is clicked
      dropdownContent.classList.toggle('active');
    });
});
