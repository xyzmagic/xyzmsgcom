(function(g){function f(c,a,d){if(a=="show")switch(d){case "fade":c.fadeIn();break;case "slide":c.slideDown();break;default:c.fadeIn()}else switch(d){case "fade":c.fadeOut();break;case "slide":c.slideUp();break;default:c.fadeOut()}}function k(c,a){var d=!0;c.on("click",function(){d==!0&&(d=!1,g("html, body").animate({scrollTop:0},a,function(){d=!0}))})}g.goup=function(c){var a=g.extend({location:"right",locationOffset:20,bottomOffset:10,containerSize:40,containerRadius:10,containerClass:"goup-container",
arrowClass:"goup-arrow",alwaysVisible:!1,trigger:500,entryAnimation:"fade",goupSpeed:"slow",hideUnderWidth:500,containerColor:"#000",arrowColor:"#fff",title:"",titleAsText:!1,titleAsTextClass:"goup-text",zIndex:1},c);if(a.location!="right"&&a.location!="left")a.location="right";if(a.locationOffset<0)a.locationOffset=0;if(a.bottomOffset<0)a.bottomOffset=0;if(a.containerSize<20)a.containerSize=20;if(a.containerRadius<0)a.containerRadius=0;if(a.trigger<0)a.trigger=0;if(a.hideUnderWidth<0)a.hideUnderWidth=
0;c=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;if(!c.test(a.containerColor))a.containerColor="#000";if(!c.test(a.arrowColor))a.arrowColor="#fff";if(a.title==="")a.titleAsText=!1;if(isNaN(a.zIndex))a.zIndex=1;var d=g("body"),h=g(window),e=g("<div>");e.addClass(a.containerClass);c=g("<div>");c.addClass(a.arrowClass);e.html(c);d.append(e);var i={position:"fixed",width:a.containerSize,height:a.containerSize,background:a.containerColor,cursor:"pointer",display:"none","z-index":a.zIndex};i.bottom=a.bottomOffset;
i[a.location]=a.locationOffset;i["border-radius"]=a.containerRadius;e.css(i);if(a.titleAsText){var b=g("<div>");d.append(b);b.addClass(a.titleAsTextClass).text(a.title);b.attr("style",e.attr("style"));b.css("background","transparent").css("width",a.containerSize+40).css("height","auto").css("text-align","center").css(a.location,a.locationOffset-20);d=parseInt(b.height())+10;i=parseInt(e.css("bottom"));e.css("bottom",d+i)}else e.attr("title",a.title);d=0.25*a.containerSize;c.css({width:0,height:0,
margin:"0 auto","padding-top":Math.ceil(0.325*a.containerSize),"border-style":"solid","border-width":"0 "+d+"px "+d+"px "+d+"px","border-color":"transparent transparent "+a.arrowColor+" transparent"});var j=!1;h.resize(function(){h.outerWidth()<=a.hideUnderWidth?(j=!0,f(e,"hide",a.entryAnimation),typeof b!="undefined"&&f(b,"hide",a.entryAnimation)):(j=!1,h.trigger("scroll"))});h.outerWidth()<=a.hideUnderWidth&&(j=!0,e.hide(),typeof b!="undefined"&&b.hide());a.alwaysVisible?(f(e,"show",a.entryAnimation),
typeof b!="undefined"&&f(b,"show",a.entryAnimation)):h.scroll(function(){h.scrollTop()>=a.trigger&&!j&&(f(e,"show",a.entryAnimation),typeof b!="undefined"&&f(b,"show",a.entryAnimation));h.scrollTop()<a.trigger&&!j&&(f(e,"hide",a.entryAnimation),typeof b!="undefined"&&f(b,"hide",a.entryAnimation))});h.scrollTop()>=a.trigger&&!j&&(f(e,"show",a.entryAnimation),typeof b!="undefined"&&f(b,"show",a.entryAnimation));k(e,a.goupSpeed);typeof b!="undefined"&&k(b,a.goupSpeed)}})(jQuery);