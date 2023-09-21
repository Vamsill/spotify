// script.js

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.hover-button, .my-button, .home-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });
});





   



