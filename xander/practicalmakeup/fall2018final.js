"use strict";
$(".menu").click(function (event) {
    $(this).next(".items").toggle("slow");
});
$(document).ready(function () {
    let load = "article1.txt";
    $("article").load(load);
});

$("input").click(function (event) {
    let file = $("input").attr("value");
    let root = "article1.txt"
    let fullname = root + file;
   $("article").load(fullname);
});