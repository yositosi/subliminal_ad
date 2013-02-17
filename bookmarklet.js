var debug = false;
(function(){
	
	var onload = function(){
		
		head.js("http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
		.js("https://raw.github.com/artzstudio/jQuery-Sonar/master/jquery.sonar.min.js")
		.js(debug ? "http://subliminal.jp/subliminal_ad.js" : "https://raw.github.com/yositosi/subliminal_ad/master/subliminal_ad.js", function(){
			
			$(document).ready(function(){
				if(true){
					new SubliminalAd({
						img: "http://www.shopatrip.com/wp-content/uploads/2012/10/serina.jpeg",
						interval: 3000
					});
				}else{
					new SubliminalAd2({
						imgs:[
	                    /*
					     "http://www.shopatrip.com/wp-content/uploads/2012/10/serina.jpeg",
					     "http://laplatavalley.net/image/1349.jpg",
					     "http://blog-imgs-43.fc2.com/y/u/y/yuyu947/img_328669_3932424_0.jpg",
					     "http://iphonewp.net/wp-content/uploads/2011/05/oshimayuko_a10.jpg",
	                     */
	                     /* 1 */
	                     /* 2 */
	                     "http://i.yimg.jp/images/shp_blog/trend/images/2012/bakusoku/200_240_IMG_6166.jpg",
	                     /* 3 */
	                     /*
	                     "http://25.media.tumblr.com/tumblr_megfpwr5i11qeei56o1_500.jpg",
	                     "http://i.yimg.jp/images/shp_edit/cms/sale/whatshot/mens/00019/IMG_5719.jpg",
	                     "http://i.yimg.jp/images/shp_edit/cms/sale/whatshot/mens/00019/IMG_6048.jpg",
	                     "http://i.yimg.jp/images/shp_blog/trend/images/2012/bakusoku/146_orange.jpg",
	                     "http://i.yimg.jp/images/shp_blog/report/images/2013/02/05_img4.jpg",
	                     */
	                     "http://smslab.jp/wp-content/uploads/2012/08/2e4472419f8ffde8d420c9a446945a15-180x180.jpeg",
	                     /* 4 */
	                     /* 5 */
	                     "http://i.yimg.jp/images/hackday/img/partner/idcf.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/jaxa.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/olympus.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/kait.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/klab.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/gree.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/kddi_webcomm.png",
	                     "http://i.yimg.jp/images/hackday/img/partner/cyberagent.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/daiwahouse.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/nifty.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/nec.jpg",
	                     "http://i.yimg.jp/images/hackday/img/partner/microsoft.png",
	                     "http://i.yimg.jp/images/hackday/img/partner/rakuten.jpg",
	                     "http://yhacks.jp/wordpress/wp-content/uploads/2013/01/Yahoo_JAPAN.jpg",
						]
					});
					
				}
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
