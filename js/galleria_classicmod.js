(function($){Galleria.addTheme({name:'classicmod',author:'Jan-Philip Gehrcke, Galleria',css:'../css/galleria.classicmod.css',defaults:{transition:'fade',thumbCrop:'height',imageCrop:false,_toggleInfo:true,slideshowInterval:1000},init:function(options){Galleria.requires(1.28,'This version of Classic theme requires Galleria 1.2.8 or later');var gallery=this;gallery.addElement('info-link','info-close');gallery.append({'info':['info-link','info-close']});gallery.addElement("navbar","navbarhelper","playbutton","fullscreenbutton");gallery.append({container:"navbar",navbar:"navbarhelper",navbarhelper:["playbutton","thumbnails-container","fullscreenbutton"]});gallery.prependChild("stage","info").appendChild("container","tooltip");gallery.classicplay=function(){gallery.setPlaytime(options.slideshowInterval);gallery.playToggle();};gallery.classicfullscreen=function(){gallery.toggleFullscreen(function(){gallery._carousel.set(gallery.getIndex());});};gallery.$("fullscreenbutton").click(function(e){e.preventDefault();gallery.classicfullscreen();});gallery.$("playbutton").click(function(e){e.preventDefault();gallery.classicplay();});gallery.bind("play",function(){this.$("playbutton").addClass("pause");});gallery.bind("pause",function(){this.$("playbutton").removeClass("pause");});gallery.bindTooltip({fullscreenbutton:function(){if(gallery.isFullscreen()){return "Exit fullscreen";}
return "Enter fullscreen";},playbutton:function(){if(gallery.isPlaying()){return "Pause slideshow";}
return "Start slideshow";}});var info=this.$('info-link,info-close,info-text'),touch=Galleria.TOUCH,click=touch?'touchstart':'click';this.$('loader,counter').show().css('opacity',0.4);if(!touch){this.addIdleState(this.get('image-nav-left'),{left:-50});this.addIdleState(this.get('image-nav-right'),{right:-50});this.addIdleState(this.get('counter'),{opacity:0});}
if(options._toggleInfo===true){info.bind(click,function(){info.toggle();});}else{info.show();this.$('info-link, info-close').hide();}
$(".galleria").mouseenter(function(){info.show();});$(".galleria").mouseleave(function(){info.hide();});this.bind('thumbnail',function(e){if(!touch){$(e.thumbTarget).css('opacity',0.6).parent().hover(function(){$(this).not('.active').children().stop().fadeTo(100,1);},function(){$(this).not('.active').children().stop().fadeTo(400,0.6);});if(e.index===this.getIndex()){$(e.thumbTarget).css('opacity',1);}}else{$(e.thumbTarget).css('opacity',this.getIndex()?1:0.6);}});this.bind('loadstart',function(e){if(!e.cached){this.$('loader').show().fadeTo(200,0.4);}
this.$('info').toggle(this.hasInfo());$(e.thumbTarget).css('opacity',1).parent().siblings().children().css('opacity',0.6);});this.bind('loadfinish',function(e){this.$('loader').fadeOut(200);});}});}(jQuery));