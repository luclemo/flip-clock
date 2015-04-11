now = new Date();

// Get hours
var hour = now.getHours();
	// append them to .number-box-hours .number

// Get minutes
var mins = now.getMinutes();
	// append them to .number-box-minutes .number

// Get seconds
var secs = now.getSeconds();
	// append them to .number-box-seconds .number

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

	// If am, hide pm
	// if pm, hide am

$(document).ready(function() {

	console.log(hour);
	console.log(mins);
	console.log(secs);


});