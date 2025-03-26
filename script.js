// It will Update Current Date and Time Every Second
function updateDateTime() {
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
  }).format(now);

  document.getElementById('currentDateTime').innerText = `Current Date & Time: ${formattedDate}`;
}

// Automatically update the time every second
setInterval(updateDateTime, 1000);


// Calculate Difference Between Two Dates
function calculateDifference() {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDateInput = document.getElementById('endDate').value;
  const endDate = endDateInput ? new Date(endDateInput) : new Date();

  if (isNaN(startDate)) {
    document.getElementById('differenceResult').innerText = 'Please select a valid start date.';
    return;
  }

  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffDays / 365);
  const remainingDays = diffDays % 365;
  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;

  document.getElementById(
    'differenceResult'
  ).innerText = `Difference: ${years} years, ${months} months, and ${days} days.`;
}

// Calculate Future or Past Date
function calculateFutureDate() {
  const baseDate = new Date(document.getElementById('baseDate').value);
  const daysToAdd = parseInt(document.getElementById('daysToAdd').value);

  if (isNaN(baseDate) || isNaN(daysToAdd)) {
    document.getElementById('futureDateResult').innerText = 'Please enter a valid date and number of days.';
    return;
  }

  baseDate.setDate(baseDate.getDate() + daysToAdd);
  const resultDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
  }).format(baseDate);

  document.getElementById('futureDateResult').innerText = `Resulting Date: ${resultDate}`;
}

// Calculate Time Difference
function calculateTimeDifference() {
  const startTime = document.getElementById('startTime').value;
  const endTime = document.getElementById('endTime').value;

  if (!startTime || !endTime) {
    document.getElementById('timeDifferenceResult').innerText = 'Please select valid times.';
    return;
  }

  const [startHours, startMinutes] = startTime.split(':').map(Number);
  const [endHours, endMinutes] = endTime.split(':').map(Number);

  let diffMinutes = endMinutes - startMinutes;
  let diffHours = endHours - startHours;

  if (diffMinutes < 0) {
    diffMinutes += 60;
    diffHours -= 1;
  }

  if (diffHours < 0) {
    diffHours += 24;
  }

  document.getElementById('timeDifferenceResult').innerText = `Time Difference: ${diffHours} hours, ${diffMinutes} minutes.`;
}

// Convert Time Zone
function convertTimeZone() {
  const timeZone = document.getElementById('timeZone').value;
  const now = new Date();

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    timeZone: timeZone,
    dateStyle: 'full',
    timeStyle: 'medium',
  }).format(now);

  document.getElementById('timeZoneResult').innerText = `Current Time in ${timeZone}: ${formattedTime}`;
}

// Start Countdown Timer
let countdownInterval;
function startCountdown() {
  const countdownDate = new Date(document.getElementById('countdownDate').value);

  if (isNaN(countdownDate)) {
    document.getElementById('countdownResult').innerText = 'Please select a valid date.';
    return;
  }

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDiff = countdownDate - now;

    if (timeDiff <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdownResult').innerText = 'Countdown complete!';
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById(
      'countdownResult'
    ).innerText = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

