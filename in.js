/*
	====================================================================================================
	
	NOTE:
	The code below serves only demonstration purposes.
	
	It could be improved.
	
	The use of global variables is not recommended, due to higher risk of errors.
	
	====================================================================================================
*/



//Purpose: Contains all deletable attributes as numbers which will be needed for the formular "(X+Y+Z) * n = R"
function Numbers()
{
	this.X = 50;
	this.Y = 36;
	this.Z = 1;
}


//Global varibales
var Guess 	= new Numbers();
var target = Math.floor(Math.random() * 3) + 1;



//Purpose: Uses the formular "(X+Y+Z) * n = R" to calculate a result
function calculateResult()
{

	
	var result 	= document.getElementById('calc-result');
	var radios	= document.getElementsByName('property'); //This is an array
	
	
	//Random number between 1 and 5
	//random number defines which attribute in "Numbers" will be deleted
	/*
		1: this.X = 50;
		2: this.Y = 36;
		3: this.Z = 1;
	*/
	var n 		= Math.floor(Math.random() * 5) + 1;
	 
	
	//Deleting properties
	if(target === 1)//X
	{
		
		delete Guess.X;
		
		result.innerHTML = (Guess.Y + Guess.Z) * n; 
	}
	else if(target === 2)//Y
	{

		delete Guess.Y;
		
		result.innerHTML = (Guess.X + Guess.Z) * n; 
	}
	else if(target === 3)//Z
	{
	
		delete Guess.Z;
		
		result.innerHTML = (Guess.X + Guess.Y) * n; 
	}
	

	//Reseting radio buttons
	for(var radio = 0; radio < radios.length; radio++)
	{
		radios[radio].checked = false;
	}
	
}


//Call on load
calculateResult();


//Purpose:Checks if the guess was correct or not
function checkGuess()
{
	var radios	= document.getElementsByName('property');
	
	if(radios[0].checked === true && ('X' in Guess) === false)
	{
		alert("X is correct! Restarting game...");
		
		calculateResult();
	}
	else if(radios[1].checked === true && ('Y' in Guess) === false)
	{
		alert("Y is correct! Restarting game...");	

		calculateResult();
	}
	else if(radios[2].checked === true && ('Z' in Guess) === false)
	{
		alert("Z is correct!  Restarting game...");		
		
		calculateResult();
	}
	else
	{
		alert("Wrong is wrong! Restarting game...");
		
		calculateResult();
	}
		
}