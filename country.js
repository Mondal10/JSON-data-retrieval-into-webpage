var inputVal;
var count = 0; 
// var image = document.getElementById("image");
// console.log(image);

var x = document.createElement("SELECT");
x.setAttribute("id","myselect");
document.body.appendChild(x);



function getData(){
	// var form = document.getElementById("txt1").value;
	// inputVal = form;
	// console.log(inputVal);
    var select = document.getElementById("myselect").value;
    inputVal = select;
    console.log(inputVal);
    // if(count<1){
	   init();
    // }
}

function clicked(name,country,flag){

    if(name==inputVal)
        {    
            $("#display1").html(name);
            $("#display2").html(country);
            var a = flag;
            console.log(a);
            // image.src = a;
            document.getElementById("image").src = a;
        }
}

function init(){
	console.log("init called")
        $(document).ready(function(){	
        	$.getJSON("sample.json", function(result){	   
				$.each(result,function(key,value){
                    // if(count<1){
                        var z = document.createElement("option");
                        z.setAttribute("value",value.firstname);
                        console.log(z);
                        var t = document.createTextNode(value.firstname);
                        z.appendChild(t);
                        document.getElementById("myselect").appendChild(z);
                        var name = value.firstname;
                        var country = value.country;
                        var flag = value.flag;
                        count++;
                    // }
                    clicked(name,country,flag);
                    		
				});
         	});
        });
};

