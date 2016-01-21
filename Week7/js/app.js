//Anuthida Lertnamwongwan


$(function(){
$("a").on("click", function(e){
e.preventDefault();

var city = this.text.toLowerCase();
$.ajax({
	type:'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=2de143494c0b295cca9337e1e96b00e0',
	success: function(data){
//		console.log(data);

//		$("#container").html(data.name + " : ");
        $("#container").html("");
        
        
//        
function convertFahrToCelc(temp){
           temp = Math.round(temp - 273.15);
					return (temp  + " &deg;C");
				};
//                            
function convertCelcToFahr(temp){
           temp = Math.round((temp * 9 / 5) - 459.67);
					return (temp  + " &deg;F");
				};
        $("#FtoC").click(function(){
            $("#container").html(convertFahrToCelc(data.main.temp));
//            
        });
//        
        $("#CtoF").click(function(){
           $("#container").html(convertCelcToFahr(data.main.temp)); 
        });
    }
});
});    
});