displayTime = function(){

	// Today
	now = new Date();

	// Get current hours, minutes, seconds
	var hour = now.getHours();
	var mins = now.getMinutes();
	var secs = now.getSeconds();

	// Set variable for meridiem
	var meridiem = 'am';

	// Define hours in 12-hour format
	// Redefine meridiem based on 12-hour format
	if (hour > 12) {
		hour = hour - 12;
		meridiem = 'pm';
	}
	if (hour == 0) {
		hour = 12;
	}

	// Set hours, minutes, and seconds as double digits
	if (hour < 10) hour = '0' + hour;
	if (mins < 10) mins = '0' + mins;
	if (secs < 10) secs = '0' + secs;

	// Add hours to clock
	var hoursElement = document.getElementById('hours');
	hoursElement.textContent = hour;

	// Add minutes to clock
	var minsElement = document.getElementById('minutes');
	minsElement.textContent = mins;

	// Add seconds to clock
	var secsElement = document.getElementById('seconds');
	secsElement.textContent = secs;

	// Add meridiem to clock
	var am = document.getElementById('am');
	var pm = document.getElementById('pm');
	
	if (meridiem === 'am') {
		am.textContent = meridiem;	
	} else{
		pm.textContent = meridiem;
	}

}

$(document).ready(function() {

	displayTime();
	setInterval(displayTime, 1000);

});