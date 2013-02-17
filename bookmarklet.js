(function(){
	
	var onload = function(){
		
		head.js("http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
		.js("https://raw.github.com/artzstudio/jQuery-Sonar/master/jquery.sonar.min.js")
		.js("https://raw.github.com/yositosi/subliminal_ad/master/subliminal_ad.js", function(){
			
			$(document).ready(function(){
				/*
				new SubliminalAd({
					img: "http://www.shopatrip.com/wp-content/uploads/2012/10/serina.jpeg",
					interval: 3000
				});
				*/
				
				$("div").each(function(){
				   var w = $(this).width();
				   var h = $(this).height();
				   var l = w / h;
				   if(100 <= w && w <= 400 && 0.7 <= l && l <= 1.8){
				        $(this).css({position:"relative"});
				        var img = $("<img>");
				        img.attr("src","http://www.shopatrip.com/wp-content/uploads/2012/10/serina.jpeg");
				        img.css({display:"none",position:"absolute",top:"0px",left:"0px",width:w+"px",height:h+"px"});
				        $(this).append(img);
				        setInterval(function(){
							img.fadeIn(1).delay(1).fadeOut(1);
						},3000);
				   }
				});
				
			});
			
		});
	}	
	
	var script = document.createElement('script');
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", "http://cdnjs.cloudflare.com/ajax/libs/headjs/0.99/head.load.min.js");
	script.onload = function(){onload()};
	script.onreadystatechange = function(){
		if (this.readyState == 'complete' || this.readyState == 'loaded') {
			onload(s);
		}
	};
	(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);
	
/*	
	var onload = function(){
		
		https://raw.github.com/artzstudio/jQuery-Sonar/master/jquery.sonar.min.js
		
		var script = document.createElement('script');
		script.setAttribute("type", "text/javascript");
		script.setAttribute("src", "https://raw.github.com/yositosi/subliminal_ad/master/subliminal_ad.js");
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);
	}
	
	if(window.jQuery === undefined){
		var script = document.createElement('script');
		script.setAttribute("type", "text/javascript");
		script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
		script.onload = function(){onload()};
		script.onreadystatechange = function(){
			if (this.readyState == 'complete' || this.readyState == 'loaded') {
				onload(s);
			}
		};
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);
	} else {
		onload();
	}*/
	
})();