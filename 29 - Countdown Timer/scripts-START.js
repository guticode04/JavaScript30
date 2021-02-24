let countdown;

function timer(seconds) {
   const now = Date.now();
   const then = now + seconds * 1000;

   countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      //check if we should stop it
      if(seconds <= 0) {
         clearInterval(countdown);
         return;
      }
   }, 1000)
}