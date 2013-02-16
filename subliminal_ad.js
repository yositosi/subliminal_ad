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
		console.log(this.options);
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

new 

$(document).ready(function(){
	
	new SubliminalAd({
		img: "http://www.shopatrip.com/wp-content/uploads/2012/10/serina.jpeg",
		interval: 3000
	});
	
});
