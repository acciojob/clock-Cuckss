//your JS code here. If required.
function getCurrentDateAndTime(){
const now=new Date();
	let year=now.getFullYear();
	let month=String(now.getMonth()+1).padStart(2,"0");
	const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
	const ampm=now.getHours()>=12?'PM':'AM'
	return `${year}-${month}-${day}, ${hours}:${minutes}:${seconds} ${ampm}`;
}
function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = getCurrentDateAndTime();
}
setInterval(updateTimer, 1000);

// Initial update
updateTimer();