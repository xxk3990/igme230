/* Don't use <script> tags in a linked js file! */
"use strict";
$(".menubox").click(function () {
    $(this).children(".submenu").slideToggle();
    $(this).children(".submenu:hidden").show(); 
    //what this does is it differentiates the two submenus so that clicking on the menu boxes will open their
    //respective submenus and not both submenus
});
let file1 = "content1.txt";
let name1 = $('#choose-content :selected').text();
$("#content").text(name1);
$("#content").load(file1);

// $(this).attr(“id”);
// or
// event.trigger.id


