// Today
now = new Date();

// Get current hours, minutes, seconds
var hour = now.getHours();
var mins = now.getMinutes();
var secs = now.getSeconds();

// Define am and pm
var ap = 'am';
if (hour > 11) ap = 'pm';

// Define hours in 12-hour format
if (hour > 12) hour = hour - 12;
if (hour == 0) hour = 12;

// Set hours, minutes, and seconds as double digits
if (hour < 10) hour = '0' + hour;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;

// Add hours to .number-box-hours .number
var hoursElement = document.getElementById('hours');
hoursElement.textContent = hour;

// Add minutes to .number-box-minutes .number
var minsElement = document.getElementById('minutes');
minsElement.textContent = mins;

// Add seconds to .number-box-seconds .number
var secsElement = document.getElementById('seconds');
secsElement.textContent = secs;

// If am, hide pm
// if pm, hide am

$(document).ready(function() {

	console.log(hour);
	console.log(mins);
	console.log(secs);
	console.log(ap);

});