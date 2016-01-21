$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},

		init_effect: function() {
			$("#head_tagline").height(200);
			$("#head_tagline>h1").hide().fadeIn(700); 
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
            $("#head_tagline>p:last").hide();
            $("#head_tagline>a").hide().delay(1400).fadeIn(700);
           //hide the error
            $(".error").hide();	
            
		},

		init_event: function() {
			$("#head_tagline>a:first").on("click",function(){

			$("#head_tagline").height(350);
			$("#head_tagline>p:last").fadeIn(700);
		});

		$("#head_tagline>a:last").on("click",function(){
			$("#head_tagline").height(200);
			$("#head_tagline>p:last").hide();
		});

		//send us email action
		$("#form-submit").on("click",function(){
			var phonenum = $("#form-number").val();
			if(!$.isNumeric(phonenum)){
				$(".error:first").show();
			}
			else{
				$(".error:first").hide();
				//alert("Message successfully sent!");
			}


		});

		//image flip
		$(".image-flip").flip({
			axis: 'x',
			trigger: 'hover'
		});

		}
	};

	$("input").on("click", function redirect(e){
		e.preventDefault();
		alertify.confirm("Are you sure you want to be redirected?", function(e){
             if (e) {
                 window.location.href =  "http://www.google.com";
                 return false;
//            window.location.href = href;
        }
        });
//        .alert("Are you sure you want to be redirected to this page?")

	});

	
	app.init();
});
