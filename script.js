
		//Constants
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
const allHands    = document.querySelectorAll('.hand');

//Gets user's date and uses data to set up the pointers
function setDate() {
	
	const now = new Date();
			//Seconds

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
			// Minutes
			
	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + 90;
	minsHand.style.transform = `rotate(${minsDegrees}deg`;
			//Hours 
			
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg`;
	
	
	if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none'); // remove the all 0.05s transition
      } else {
        allHands.forEach(hand => hand.style.transition = '');      // using '' removes the inline style and reverts back to the stylesheet
      }
	
	
}
//Sets interval to 1s
setInterval(setDate, 1000);