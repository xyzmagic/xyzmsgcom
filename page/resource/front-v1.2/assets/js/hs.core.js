(function(a){a.HSCore={init:function(){a(document).ready(function(){a('[data-toggle="tooltip"]').tooltip();a("[data-bg-img-src]").length&&a.HSCore.helpers.bgImage(a("[data-bg-img-src]"));a.HSCore.helpers.extendjQuery();a.HSCore.helpers.detectIE();a.HSCore.helpers.bootstrapNavOptions.init()});a(window).on("load",function(){})},components:{},helpers:{Math:{getRandomValueFromRange:function(a,c,e){return e&&e?Math.random()*(c-a)+a:Math.floor(Math.random()*(c-a+1))+a}},bgImage:function(b){return!b||!b.length?
void 0:b.each(function(c,b){var g=a(b),h=g.data("bg-img-src");h&&g.css("background-image","url("+h+")")})},extendjQuery:function(){a.fn.extend({afterImagesLoaded:function(){var b=this.find('img[src!=""]');if(!b.length)return a.Deferred().resolve().promise();var c=[];b.each(function(){var b=a.Deferred();c.push(b);var g=new Image;g.onload=function(){b.resolve()};g.onerror=function(){b.resolve()};g.src=this.src});return a.when.apply(a,c)}})},detectIE:function(){var a=window.navigator.userAgent;if(a.indexOf("Trident/")>
0){var c=a.indexOf("rv:");parseInt(a.substring(c+3,a.indexOf(".",c)),10);document.querySelector("body").className+=" IE"}c=a.indexOf("Edge/");c>0&&(parseInt(a.substring(c+5,a.indexOf(".",c)),10),document.querySelector("body").className+=" IE");return!1},bootstrapNavOptions:{init:function(){this.mobileHideOnScroll()},mobileHideOnScroll:function(){var b=a(".navbar");if(b.length){var c=a(window),e={sm:576,md:768,lg:992,xl:1200};a("body").on("click.HSMobileHideOnScroll",".navbar-toggler",function(b){var e=
a(this).closest(".navbar");e.length&&e.data("mobile-menu-scroll-position",c.scrollTop());b.preventDefault()});c.on("scroll.HSMobileHideOnScroll",function(){b.each(function(b,h){var d=a(h),f,i;d.hasClass("navbar-expand-xl")?f=e.xl:d.hasClass("navbar-expand-lg")?f=e.lg:d.hasClass("navbar-expand-md")?f=e.md:d.hasClass("navbar-expand-xs")&&(f=e.xs);c.width()>f||(f=d.find(".navbar-toggler"),i=d.find(".navbar-collapse"),i.data("mobile-scroll-hide")&&i.length&&(d=d.data("mobile-menu-scroll-position"),Math.abs(c.scrollTop()-
d)>40&&i.hasClass("show")&&(f.trigger("click"),d=f.find(".is-active"),d.length&&d.removeClass("is-active"))))})})}}}},settings:{rtl:!1}};a.HSCore.init()})(jQuery);