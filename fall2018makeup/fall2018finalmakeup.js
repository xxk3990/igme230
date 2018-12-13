"use strict";

$("div").click(function () {
    $(this).children(".submenu").toggle();
    $(this).children(".submenu:hidden").show();  
    //what this does is it differentiates the two submenus so that clicking on the menus will open their
    //respective submenus and not both submenus
});
let file = "story0.txt";
$("#story").load(file);
$("#stories").val(file);
$("#stories").change(function () {
    file = $(this).val();
    $("#stories").load(file);
});