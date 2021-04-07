//REFERENCE
var open = $('.header-right .fa-bars');
var menu = $('.hamburger-menu');
var close = $('.hamburger-menu .fa-times');

//Show-Hide Menu
open.click(openClose);
close.click(openClose);

// FUNCTIONS
/**
 * Toggle visibility
 */
function openClose(){
    menu.toggle();
}