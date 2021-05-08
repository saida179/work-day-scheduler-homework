//# 05 Third-Party APIs: Work Day Scheduler
let container = $(".container")
let timeArry = document.querySelectorAll(["text-9am", "text-10am", "text-11am", "text-12pm", "text-1pm", "text-2pm", "text-3pm", "text-4pm", "text-5pm", "text-6pm" ]);
let timeColors= document.querySelectorAll([".past", ".present", ".future"]);
    
let currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$(document).ready(function(){
    $("#currentDay").text( moment().format('MMMM Do YYYY, h:mm:ss a'));
});

//WHEN I view the time blocks for that day
//THEN each time block is color coded to indicate 
//whether it is in the past, present, or future (need to add moment().format( h:mm:ss a'); to set time to color)
// how do you set the color to time without writing so my code?
function changeColor(){
    let currentTime = moment().format('h:mm a'); 
    for (let i = 0; i < timeArry.length; i++){
        if (table(timeArry[i]) < currentTime) {
            $("#" + time[i]).attr("style", ".past");

//code it wrong how do I set up the past, present, future?
        
    }
    else if (parseInt(time[i]) > currentTime) {
        $("#" + time[i]).attr("style", ".future");

    }
    else if (parseInt(time[i]) == currentTime) {
        $("#" + time[i]).attr("style", ".present");

    }
}

//WHEN I click the save button for that time block but it doesn't
$("saveBtn").on("click"), function () {
    let time = $(this).attr("data-time")
    console.log("saveBtn");
    localStorage.setItem(time);  
})