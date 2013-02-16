(function(){
	var onload = function(){
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
	}
	
})();