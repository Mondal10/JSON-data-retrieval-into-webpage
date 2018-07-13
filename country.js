var inputVal;
var image = document.getElementById("image");

function getData(){
	var form = document.getElementById("txt1").value;
	inputVal = form;
	// console.log(inputVal);
	init();
}

function init(){
	// console.log("init called")
        $(document).ready(function(){	
        	$.getJSON("sample.json", function(result){	   
				$.each(result,function(key,value){
					if(value.firstname==inputVal)
       				{
        				$("#display").html(value.country);
        				var a = value.flag;
        				// console.log(a);
        				image.src = a;
       				}		
				});
         	});
        });
};