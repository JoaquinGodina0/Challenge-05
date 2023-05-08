$(document).ready(function () {

// Displays current date to header
let today = dayjs().format("dddd, MMMM D YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = today;
let currentHour = dayjs().format("HH");

// Listener that saves user data to local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time,value);
});

// If the the current hour is 3 the block that the hour lands on is highlighted red while anything past 3 is grey and anything higher than 3 is green
$(".time-div").each(function() {
    var hourBlock = $(this).attr("id").split("-")[1];

    if (currentHour == hourBlock) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");

    } else if (currentHour < hourBlock) {
        $(this).removeClass("present");
        $(this).addClass("future");

    } else if (currentHour > hourBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

// grabs data from local storage
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));

});