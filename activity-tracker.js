document.addEventListener("DOMContentLoaded", function() {
    var activitySelect = document.getElementById("activity-select");
    var customActivityInput = document.getElementById("custom-activity-input");
    var startTimeInput = document.getElementById("start-time-input");
    var endTimeInput = document.getElementById("end-time-input");
    var activityList = document.getElementById("activity-list");
    var addActivityButton = document.getElementById("add-activity-button");
  
    // Populate the activity select list with the predefined activities
    activities.forEach(function(activity) {
      var option = document.createElement("option");
      option.value = activity.name;
      option.innerHTML = "<i class='fas " + activity.icon + "'></i> " + activity.name;
      activitySelect.appendChild(option);
    });
  
    // Add the custom activity to the select list and the activities array
    function addCustomActivity() {
      var customActivityName = customActivityInput.value;
      if (customActivityName.trim() === "") {
        return;
      }
      // Add the custom activity to the select list
      var option = document.createElement("option");
      option.value = customActivityName;
      option.innerHTML = "<i class='fas fa-tasks'></i> " + customActivityName;
      activitySelect.appendChild(option);
  
      // Add the custom activity to the activities array
      var customActivity = {
        name: customActivityName,
        icon: "fa-tasks",
      };
      activities.push(customActivity);
  
      // Select the custom activity in the select list
      activitySelect.value = customActivityName;
      customActivityInput.value = "";
    }
  
    // Handle the add activity button click event
    addActivityButton.addEventListener("click", function() {
      var activityName = activitySelect.value;
      var startTime = startTimeInput.value;
      var endTime = endTimeInput.value;
  
      // Validate input
      if (activityName.trim() === "" || startTime === "" || endTime === "") {
        return;
      }
  
      // Create the activity object
      var activity = {
        name: activityName,
        startTime: startTime,
        endTime: endTime,
      };
  
      // Add the activity to the activity list
      var li = document.createElement("li");
      li.innerHTML = "<span class='activity-name'><i class='fas " + getActivityIcon(activityName) + "'></i> " + activityName + "</span> <span class='activity-time'>" + startTime + " - " + endTime + "</span>";
      activityList.appendChild(li);
  
      // Clear the input fields
      activitySelect.value = "";
      customActivityInput.value = "";
      startTimeInput.value = "";
      endTimeInput.value = "";
    });
  
    // Get the icon class for the given activity name
    function getActivityIcon(activityName) {
      var activity = activities.find(function(activity) {
        return activity.name === activityName;
      });
      return activity ? activity.icon : "fa-question";
    }
  
    // Add custom activity when enter key is pressed in the custom activity input field
    customActivityInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        addCustomActivity();
      }
    });
  });
  