var list = document.querySelector(".container");
var date = document.querySelector("#currentDay");
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var scheduleText = ["0","1","2","3","4","5","6","7","8"]

// var schedule = {
//     time: hours, text: scheduleText
// };
// console.log(schedule)
$(document).ready(function () {

    var today = moment().format("[Today is] dddd, MMMM Do YYYY");
    date.innerHTML = today

    function initialize() {
        // schedule = JSON.parse(localStorage.getItem("schedule")) || [];
         
        for (let i = 0; i < hours.length; i++) {
            // var schedule = JSON.parse(localStorage.getItem("schedule")) || [];
            var row = $("<row>");
            row.addClass("row");
            row.attr("data-hour", hours[i]);//for the time function to know what color the text should be
            $(".container").append(row)

            var hour = $("<div>");
            hour.addClass("hour");
            hour.attr("data-hour", hours[i]);
            hour.text(hours[i]);
            $(row).append(hour);

            var text = $("<input>");
            text.addClass("text past present future");
            text.attr("data-hour", hours[i]);
            text.text(scheduleText[i]);
            $(row).append(text);
            console.log(scheduleText[i])

            var save = $("<button>");
            save.addClass("saveBtn");
            save.attr("data-hour", hours[i]);
            $(row).append(save);

            // $(save).append('<img src=./Assets.save-icon-silhouette.png'); figure this out later

            

            
            
            
        }

        
       
        // schedule
        // localStorage.setItem("schedule", JSON.stringify)

    }
    //create a list of blocked hours from 9am-5pm
    //create a corresponding text block for the events to be written in
    //create a corresponding save button that saves the text to local storage
    //when the page loads it should pull the saved text from local storage to populate the text boxes

    //add current date to the top of the page that updates based on actual date
    //attach class color to the hours past, present and future


   
    

    








  initialize()
})

