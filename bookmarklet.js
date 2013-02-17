var debug = false;
(function(){
	
	var onload = function(){
		
		head.js("http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
		.js("https://raw.github.com/artzstudio/jQuery-Sonar/master/jquery.sonar.min.js")
		.js(debug ? "http://subliminal.jp/subliminal_ad.js" : "https://raw.github.com/yositosi/subliminal_ad/master/subliminal_ad.js", function(){
			
			$(document).ready(function(){
				/*
				new SubliminalAd({
					img: "http://www.shopatrip.com/wp-content/uploads/2012/10/serina.jpeg",
					interval: 3000
				});
				*/
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
                     /* 3 */
                     "http://i.yimg.jp/images/shp_edit/cms/sale/whatshot/mens/00019/IMG_5719.jpg",
                     "http://i.yimg.jp/images/shp_edit/cms/sale/whatshot/mens/00019/IMG_6048.jpg",
                     "http://smslab.jp/wp-content/uploads/2012/08/2e4472419f8ffde8d420c9a446945a15-180x180.jpeg",
                     "http://i.yimg.jp/images/shp_blog/report/images/2013/02/05_img4.jpg",
                     "http://i.yimg.jp/images/shp_blog/trend/images/2012/bakusoku/146_orange.jpg",
                     "http://25.media.tumblr.com/tumblr_megfpwr5i11qeei56o1_500.jpg",
                     /* 4 */
                     /* 5 */
                     "http://a1.smlycdn.com/data/product2/1/204fdb7189de249bef7b55eafd30fa9e5e951c0a_m.jpg",
                     "http://img5.zozo.jp/goodsimages/879/2659879/2659879_26_D_215.jpg",
                     "http://internet.watch.impress.co.jp/img/iw/docs/570/166/02_s.jpg",
                     "http://i.yimg.jp/images/shp_blog/trend/images/2012/bakusoku/200_240_IMG_6166.jpg",
                     "http://i.yimg.jp/images/shp_blog/trend/images/2012/bakusoku/IMG_6128.jpg",
                     "http://farm9.staticflickr.com/8085/8458401240_dd87a8a62d_z.jpg",
                     "http://farm8.staticflickr.com/7104/7182164367_25935ce169_z.jpg",
                     "http://www.inside-games.jp/imgs/zoom/321176.jpg",
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
                     /* 6 */
                     "http://ai.yimg.jp/bdv/164354/1100841/20130211/2cttgi1pzzk2_uldcue4-a.gif",
                     "http://ai.yimg.jp/bdv/164354/1102183/20130212/jme0a3a6gomnazy2_gz1-a.gif"
					]
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
