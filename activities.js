const activities = [
    {
      name: "Sleeping",
      icon: "fa-bed",
    },
    {
      name: "Working",
      icon: "fa-briefcase",
    },
    {
      name: "Studying",
      icon: "fa-book",
    },
    {
      name: "Reading",
      icon: "fa-book-open",
    },
    {
      name: "Playing",
      icon: "fa-gamepad",
    },
  ];
  
  function addCustomActivity(name) {
    activities.push({
      name: name,
      icon: "fa-tasks",
    });
  }
  