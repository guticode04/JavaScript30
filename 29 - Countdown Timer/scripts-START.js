let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
   const now = Date.now();
   const then = now + seconds * 1000;
   displayTimeLeft(seconds);

   countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      //check if we should stop it
      if(seconds < 0) {
         clearInterval(countdown);
         return;
      }
      //display it
      displayTimeLeft(secondsLeft);
   }, 1000)
}

function displayTimeLeft(seconds) {
   const minutes = Math.floor(seconds / 60);
   const remainderSeconds = seconds % 60;
   const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
   document.title = display;
   timerDisplay.textContent = display;
   console.log(minutes, remainderSeconds);
   
}
