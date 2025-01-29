const utcTimeElement = document.querySelector(".utc-time");

function updateUTCTime() {
  const now = new Date();
  utcTimeElement.textContent = `Current UTC Time: ${now.toUTCString()}`;
}

updateUTCTime();
