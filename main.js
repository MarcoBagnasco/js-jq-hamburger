//REFERENCE
var open = $('.header-right .fa-bars');
var menu = $('.hamburger-menu');
var close = $('.hamburger-menu .fa-times');

//Show-Hide Menu
open.click(function() {
    menu.show();
});
close.click(function() {
    menu.hide();
});