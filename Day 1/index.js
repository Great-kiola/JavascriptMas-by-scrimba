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

    var days = Math.floor(remainingDate / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingDate % (1000 * 60)) / 1000);

    // var hours = new Date().getHours();
    // var min = new Date().getMinutes();
    // var seconds = new Date().getSeconds();

    countdownDisplay.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

}, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.



// // Set the date we're counting down to
// var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   countdownDisplay.innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     countdownDisplay.innerHTML = "EXPIRED";
//   }
// }, 1000);