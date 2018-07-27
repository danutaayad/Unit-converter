let input;

//hide output
//document.querySelector("#output").style.display="none";
//document.querySelector("#output").style.visibility="hidden";
document.querySelector("#inputValue").addEventListener("input", convert);
//Catch unit selection
document.querySelector("#unit").addEventListener("input", convert);

function convert(e){
	//Test the function is called	
	//console.log("function is called");
	//Get user input value
	input=document.querySelector("#inputValue").value
	//let input = e.target.value;
	//console.log(input);
	//Get user's unit selections
	let unit=document.querySelector("#unit").value
   	// console.log(unit);
   	//check the unit value
   	switch(unit){
   		case'lbs':
   	 		convertLbs(input);
   	 		break;
   		case 'grams':
     		convertGrams(input);
     		break;
		case 'kilograms':
     		convertGrams(input);
     		break;
     	case 'meters':
     		convertMeters(input);
     		break;
     	case 'Centigrade':
     		convertCentigrade(input);
     		break;
 	}
}

function convertLbs(num){
   	document.querySelector("#output").innerHTML=
   //Grams
			'<div class="card bg-primary mb-2">'+
				'<div class="card-header">'+
				  '<h4>Grams</h4>'+
		          '<div>'+ input * 453.592 + 
			      '</div>' +	  
			    '</div>' +
		    '</div>'+ 
	//Kilograms	    
			'<div class="card bg-success mb-2">'+
				'<div class="card-header">'+
				 '<h4>Kilogram</h4>'+
		          '<div>'+ input * 453.592/1000 +  
			      '</div>'+	  
			    '</div>'+
		    '</div>'+ 
	 //Ounces
			'<div class="card bg-danger ">'+
				'<div class="card-header">'+
				  '<h4>Ounces</h4>'+
		          '<div>'+input*16 +      
			      '</div>'+
			    '</div>' + 
			'</div>'  
   }
   function convertGrams(num) {
   	document.querySelector("#output").innerHTML=
   //Pounds
			'<div class="card bg-primary mb-2">'+
				'<div class="card-header">'+
				  '<h4>Pounds</h4>'+
		          '<div>'+ num * 0.00220462 + 
			      '</div>' +	  
			    '</div>' +
		    '</div>'+ 
	//Kilograms	    
			'<div class="card bg-success mb-2">'+
				'<div class="card-header">'+
				 '<h4>Kilogram</h4>'+
		          '<div>'+ num /1000 +  
			      '</div>'+	  
			    '</div>'+
		    '</div>'+ 
	 //Ounces
			'<div class="card bg-danger ">'+
				'<div class="card-header">'+
				  '<h4>Ounces</h4>'+
		          '<div>'+num*0.035274 +      
			      '</div>'+
			    '</div>' + 
			'</div>'  
   }
function convertMeters(num) {
   	document.querySelector("#output").innerHTML=
   //miles
			'<div class="card bg-primary mb-2">'+
				'<div class="card-header">'+
				  '<h4>Miles</h4>'+
		          '<div>'+ num *0.000621371  + 
			      '</div>' +	  
			    '</div>' +
		    '</div>'+ 
	//inches    
			'<div class="card bg-success mb-2">'+
				'<div class="card-header">'+
				 '<h4>Inches</h4>'+
		          '<div>'+ num *39.370066559999998 +  
			      '</div>'+	  
			    '</div>'+
		    '</div>' 
	
   }
   function convertCentigrade(num) {
   	document.querySelector("#output").innerHTML=
   //Fahrenheit
			'<div class="card bg-primary mb-2">'+
				'<div class="card-header">'+
				  '<h4>Fahrenheit</h4>'+
		          '<div>'+ num*9/5 +32  + 
			      '</div>' +	  
			    '</div>' +
		    '</div>'
	}

	//Show output
	 //document.querySelector("#output").style.visibility="visible";
	//pounds to grams
	//document.querySelector("#gram").innerHTML=input*453.592;
	//Pounds to kilograms
	//document.querySelector("#kg").innerHTML=input*453.592/1000;
	//Pounds to ounces
	//document.querySelector("#oz").innerHTML=input*16;


