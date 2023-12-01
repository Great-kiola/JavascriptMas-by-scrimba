const countdownDisplay = document.getElementById("countdown-display");

// Set interval 

var x = setInterval(() => {

    const christmas = 25

    // Task:
    // - Get today's date (you only need the day).
    var date = new Date().getDate();
    // - Calculate remaining days.
    function checkDate(c, d) {
        if (c > d) {
            return c - d;
        } else {
            return d - c;
        }
    }
    var remainingDate = checkDate(christmas, date);
    // - Display remaining days in countdownDisplay.
    countdownDisplay.innerHTML = remainingDate;
    // Clear countdown
    if (remainingDate < 0) {
        countdownDisplay.innerHTML = "Merry Xmas";
    }


    // var remainingDate = checkDate(christmas, date);

    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    countdownDisplay.innerHTML = remainingDate + "d " + hours + "h " + min + "m " + seconds + "s";

}, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.