/*
Using a daily planner to create a schedule
User opens the planner and the current day is displayed at the top
User scrolls down to time blocks for standard business hours
Each time block is color-coded to indicate past, present, or future
When user clicks into a time block, they can enter an event
When user clicks the save button for that time block, the text for that even is saved in local storage
When user refreshes the page, the saved event stays
*/

$(document).ready(function(){
    $(".savebtn").on("click", function(){
        //VARIABLES
        var value=$(this).siblings(".description").val()
        var time=$(this).parent().attr("id")
        localStorage.setItem(time, value)
    })
    function updateHour() {
        //display current date and time in the subheading
        var currentHour= moment().hours()
        $(".time-block").each(function(){
        var blockHour= parseInt($(this).attr("id").split("-")[1])
        //check if time is past
        if(blockHour < currentHour) {
            $(this).addClass("past")
        }
        //check if past, present, or future
        else if(blockHour === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
        })
    }
    updateHour()
    var interval=setInterval(updateHour, 150000)
    $("#hour-9 description").val(localStorage.getItem("hour-9"))
    $("#hour-10 description").val(localStorage.getItem("hour-10"))
    $("#hour-11 description").val(localStorage.getItem("hour-11"))
    $("#hour-12 description").val(localStorage.getItem("hour-12"))
    $("#hour-13 description").val(localStorage.getItem("hour-13"))
    $("#hour-14 description").val(localStorage.getItem("hour-14"))
    $("#hour-15 description").val(localStorage.getItem("hour-15"))
    $("#hour-16 description").val(localStorage.getItem("hour-16"))
    $("#hour-17 description").val(localStorage.getItem("hour-17"))
    $("#currentDay").text(moment().format("dddd, MMMM Do"))
})

