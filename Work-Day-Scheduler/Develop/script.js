//Save Button Variable
var saveBtn = $(".saveBtn");

// To show what day it currently is
var currentTimer = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

// Time blocks to show whether it is the Past, Present or Future
function timeBlock() {
  var timeNow = moment().hours();

  $(".time-block").each(function() {
      var currentMoment = parseInt($(this).attr("id"));

      // console.log(this); //each time-block

      if (currentMoment > timeNow) {
          $(this).addClass("future");
      } else if (currMoment === timeNow) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};

//Save Items in Local Storage By:
saveBtn.on("click"), function(){
  var currentTime = $(this).siblings(".hour").text();
  var currentPlan = $(this).siblings(".plan").val();

//Items saved with:
localStorage.setItem(currentTime, currentPlan)
};

//To Ensure it is Saved:
function useSchedule () {
  $(".hour").each(function() {
    var timeNow = $(this).text();
    var timePlan = localStorage.getItem(timeNow);

    // console.log(this);
    // console.log(timeNow);

    if(timePlan !== null) {
      $(this).siblings(".plan").val(timePlan);
    }
  });
}
// Call Functions
timeBlock()
useSchedule()