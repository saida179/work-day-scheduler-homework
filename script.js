//# 05 Third-Party APIs: Work Day Scheduler
    let currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$(document).ready(function(){
    $("#currentDay").text( moment().format('MMMM Do YYYY, h:mm:ss a'));
});

//WHEN I view the time blocks for that day
//THEN each time block is color coded to indicate 
//whether it is in the past, present, or future
let timeSlotIds = document.querySelectorAll(["text-9am", "text-10am", "text-11am", "text-12pm", "text-1pm", "text-2pm", "text-3pm", "text-4pm", "text-5pm", "text-6pm" ]);


//WHEN I click the save button for that time block
$(".fas fa-save").on("click"), function () {
    console.log("button works");  
};