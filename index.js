/*$(document).keypress(function(event){
	console.log(event.key);
$("h1").text(event.key);
});*/



// var array = [1, 2, 3, 4, 5]
// for(let i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 10000);
// }



var started = false;

$(document).keypress(function() {
  if (!started) {
     fun();
    started = true;
  }
});




function radNumb(){return Math.floor(Math.random()*4)} 
var lev=1;var count=0,arr;



var buttonColours = ["green", "blue", "red", "yellow"];


function task(i) {
  setTimeout(function() {
      

		var test=radNumb();
		arr.push(test);
		var randomChosenColour = buttonColours[test];
					$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  					playSound(randomChosenColour);

         



  }, 1000 * i);
}



function fun(){

	arr=[];
	$("h1").text("Level"+" "+lev);


	for(let i=1; i<=lev; i++){

		task(i);

		// var test=radNumb();
		// arr.push(test);
		// var randomChosenColour = buttonColours[test];

  //        setTimeout(function(){

  // 					$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  // 					playSound(randomChosenColour);

  //        }, 1000);

}


	}




$("button").click(function(){



		
		if(this.id.length!=buttonColours[arr[count]].length){

				

			
			$("h1").text("Game Over, Press Any Key to Restart");
			playSound("error");
			
			$("body").addClass("game-over");
			
			setTimeout(function () {
        $("body").removeClass("game-over");
      },200);
			startOver();
			lev=1;



		}
		else{
			playSound(this.id);
			count++;

			
		}
		if(count==lev){
			lev++;
			count=0;
			fun(lev);
			

		}
			

		
	});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}



function startOver() {
	arr=[];
 	started = false;
}


           /*var audio =new Audio("sounds/"+event.key+".mp3");
			audio.play();
			document.querySelector("."+event.key).classList.add("pressed");
			document.querySelector("."+event.key).style.color="white";

			setTimeout(function(){
				document.querySelector("."+event.key).classList.remove("pressed");
				document.querySelector("."+event.key).style.color="#DA0463";
			} ,100);*/




	
	

