$.klass=function(a){var b=function(){this.init&&this.init.apply(this,arguments);};b.prototype=a;return b;};

var SubliminalAd = $.klass({
	size: {},
	imgsize: {},
	options: {},
	init: function(options){
		this.id = new Date().getTime();
		this.options = {};
		for (i in options)this.options[i] = options[i];
		
		this.size.w = $(window).width();
		this.size.h = $(window).height();
		this.load();
	},
	load: function(){
		var self = this;
		var img = $("<img>");
		img.bind("load",function(){
			self.imgsize.w = img[0].width;
			self.imgsize.h = img[0].height;
			self.start(img);
		});
		img.attr("src",this.options.img);
	},
	start: function(img){
		img.css({maxWidth:parseInt(this.size.w * 0.9)+"px",maxHeight:parseInt(this.size.h * 0.9)+"px"});
		var elm = $("<div id='ad'>").append(img).hide().appendTo("body");
		this.imgsize.h = elm.height();
		this.imgsize.w = elm.width();
		elm.css({position:"fixed",top:parseInt((this.size.h - this.imgsize.h) / 2)+"px",left:parseInt((this.size.w - this.imgsize.w) / 2)+"px",zIndex:this.id});
		setInterval(function(){
			elm.fadeIn(1).delay(1).fadeOut(1);
		},this.options.interval);
	}
});


$.image = function (src) {
    return $.Deferred(function (task) {
    	var images = [];
    	var res = $(src).map(function(){
    		var val = this;
    	    return $.Deferred(function (task2) {
    	        var image = new Image();
    	        image.onload = function () { images.push(image);task2.resolve(); }
    	        image.onerror = function () { task2.reject(); }
    	        image.src = val;
    	    }).promise();
    	});
    	$.when.apply(this,res).done(function(){
    		task.resolve(images);
    	});
    }).promise();
};

$.rand = function(min,max){
	return min + Math.floor( Math.random() * (max+1) ); 
};

var SubliminalAd2 = $.klass({
	size: {},
	imgs: [],
	options: {},
	init: function(options){
		this.id = new Date().getTime();
		this.options = {};
		for (i in options)this.options[i] = options[i];
		
		var self = this;
		$.image(this.options.imgs).done(function(imgs){
			
			$(imgs).each(function(){
				var p = self.detect(this.width,this.height);
				if(p > 0){
					var img = {};
					img.src = this.src;
					img.w = this.width;
					img.h = this.height;
					if(!self.imgs[p])self.imgs[p] = [];
					self.imgs[p].push(img);
				}
			});
			self.search();
		});
	},
	detect: function(w,h){
		if(50 <= w){
			var r = w / h;
			if(0.5 < r && r <= 0.8){
				return 1;
			}
			if(0.8 < r && r <= 0.9){
				return 2;
			}
			if(0.9 < r && r <= 1.2){
				return 3;
			}
			if(1.2 < r && r <= 1.7){
				return 4;
			}
			if(1.7 < r && r <= 2){
				return 5;
			}
			if(4 < r && r <= 5){
				return 6;
			}
			return 0;
		}
	},
	search: function(){
		var self = this;
		$("div,a,span,ul,li").each(function(){
		   var w = $(this).width();
		   var h = $(this).height();
		   var p = self.detect(w,h);
		   if(p > 0){
			   $(this).addClass("subliminal");
			   $(this).addClass("subliminal_"+p);
			   $(this).parents(".subliminal").removeClass("subliminal");
		   }
		   
		});
		
		for(var p = 1;p < 6;p++){
			if(!this.imgs[p] || !this.imgs[p].length)continue;
			var imgs = this.imgs[p];
			$(".subliminal_"+p).each(function(){
				if($(this).hasClass("subliminal")){
					var o = $(this);
					if(o.css("position") == "static"){
						o.css({position:"relative"});
					}
					var w = o.width();
					var h = o.height();
					
					var tmp = imgs[Math.floor(Math.random()*imgs.length)];
					
			        var img = $("<img>");
			        img.attr("src",tmp.src);
			        img.css({display:"none",position:"absolute",top:"0px",left:"0px",width:w+"px",height:h+"px"});
			        img.css("paddingLeft",o.css("paddingLeft"));
			        img.css("paddingTop",o.css("paddingTop"));
			        if(debug)o.css({backgroundColor:"#900",opacity:0.3});
			        o.append(img);
			        
			        var t = null;
			        o.bind("scrollin",{ full: true }, function(evt){
			        	if(!t){
				        	t = setInterval(function(){
								img.fadeIn(1).delay(1).fadeOut(1);
							},$.rand(2500,3500));
			        	}
			        }).bind("scrollout",{ full: true }, function(evt){
			        	if(t){
			        		clearInterval(t);
			        		t = null;
			        	}
			        });
				}
			});
		};
	},

});