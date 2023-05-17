function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    var meridiem = hours < 12 ? "AM" : "PM";
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  
    document.getElementById("hello").textContent = timeString;
  }
  
  setInterval(displayTime, 1000);
  
