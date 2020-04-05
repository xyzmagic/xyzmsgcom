(function(b){function n(a,e,d){if(a&&a.length)this.element=a,this.config=e,this.observers=d&&b.isPlainObject(d)?d:{},this.viewport="xs",this.checkViewport()}function m(a){if(a&&a.length)return this.element=a,this.defaultState=!0,this.reinit=function(){this.destroy().init().check()},!0}function h(a){m.call(this,a)&&this.init()}function g(a){m.call(this,a)&&this.init()}function f(a){m.call(this,a)&&this.init()}function d(a,e){if(m.call(this,a)){this.config={fixPointSelf:!1};if(e&&b.isPlainObject(e))this.config=
b.extend(!0,{},this.config,e);this.init()}}function i(a){m.call(this,a)&&this.init()}function c(a,e){if(m.call(this,a)){this.config={fixPointSelf:!1};if(e&&b.isPlainObject(e))this.config=b.extend(!0,{},this.config,e);this.init()}}function j(a,e){if(m.call(this,a)){this.config={animated:!0};if(e&&b.isPlainObject(e))this.config=b.extend(!0,{},this.config,e);this.init()}}function k(a,e){if(m.call(this,a))this.config=e&&b.isPlainObject(e)?b.extend(!0,{},this.config,e):{},this.init()}function l(a){m.call(this,
a)}b.HSCore.components.HSHeader={_baseConfig:{headerFixMoment:0,headerFixEffect:"slide",breakpointsMap:{md:768,sm:576,lg:992,xl:1200}},init:function(a){if(a&&!(a.length!==1||a.data("HSHeader"))){var e=this;this.element=a;this.config=b.extend(!0,{},this._baseConfig,a.data());this.observers=this._detectObservers();this.fixMediaDifference(this.element);this.element.data("HSHeader",new n(this.element,this.config,this.observers));b(window).on("scroll.uHeader",function(){b(window).scrollTop()<b(a).data("header-fix-moment")-
100&&b(a).data("effect-compensation")===!0?b(a).css({top:-b(window).scrollTop()}).addClass(b(a).data("effect-compensation-start-class")).removeClass(b(a).data("effect-compensation-end-class")):b(a).data("effect-compensation")===!0&&b(a).css({top:0}).addClass(b(a).data("effect-compensation-end-class")).removeClass(b(a).data("effect-compensation-start-class"));b(window).scrollTop()>5&&!b(a).hasClass(".u-scrolled")?b(a).addClass("u-scrolled"):b(a).removeClass("u-scrolled");a.data("HSHeader").notify()}).on("resize.uHeader",
function(){e.resizeTimeOutId&&clearTimeout(e.resizeTimeOutId);e.resizeTimeOutId=setTimeout(function(){a.data("HSHeader").checkViewport().update()},100)}).trigger("scroll.uHeader");return this.element}},_detectObservers:function(){if(this.element&&this.element.length){var a={xs:[],sm:[],md:[],lg:[],xl:[]};this.element.hasClass("u-header--has-hidden-element")&&a.xs.push(new j(this.element));this.element.hasClass("u-header--sticky-top")&&(this.element.hasClass("u-header--show-hide")?a.xs.push(new g(this.element)):
this.element.hasClass("u-header--toggle-section")&&a.xs.push(new i(this.element)),this.element.hasClass("u-header--change-logo")&&a.xs.push(new d(this.element)),this.element.hasClass("u-header--change-appearance")&&a.xs.push(new c(this.element)));this.element.hasClass("u-header--floating")&&a.xs.push(new k(this.element));this.element.hasClass("u-header--invulnerable")&&a.xs.push(new l(this.element));this.element.hasClass("u-header--sticky-bottom")&&(this.element.hasClass("u-header--change-appearance")&&
a.xs.push(new c(this.element)),this.element.hasClass("u-header--change-logo")&&a.xs.push(new d(this.element)));if(this.element.hasClass("u-header--abs-top")||this.element.hasClass("u-header--static"))this.element.hasClass("u-header--show-hide")&&a.xs.push(new f(this.element)),this.element.hasClass("u-header--change-logo")&&a.xs.push(new d(this.element)),this.element.hasClass("u-header--change-appearance")&&a.xs.push(new c(this.element));if(this.element.hasClass("u-header--abs-bottom")||this.element.hasClass("u-header--abs-top-2nd-screen"))a.xs.push(new h(this.element)),
this.element.hasClass("u-header--change-appearance")&&a.xs.push(new c(this.element,{fixPointSelf:!0})),this.element.hasClass("u-header--change-logo")&&a.xs.push(new d(this.element,{fixPointSelf:!0}));this.element.hasClass("u-header--has-hidden-element-sm")&&a.sm.push(new j(this.element));this.element.hasClass("u-header--sticky-top-sm")&&(this.element.hasClass("u-header--show-hide-sm")?a.sm.push(new g(this.element)):this.element.hasClass("u-header--toggle-section-sm")&&a.sm.push(new i(this.element)),
this.element.hasClass("u-header--change-logo-sm")&&a.sm.push(new d(this.element)),this.element.hasClass("u-header--change-appearance-sm")&&a.sm.push(new c(this.element)));this.element.hasClass("u-header--floating-sm")&&a.sm.push(new k(this.element));this.element.hasClass("u-header--invulnerable-sm")&&a.sm.push(new l(this.element));this.element.hasClass("u-header--sticky-bottom-sm")&&(this.element.hasClass("u-header--change-appearance-sm")&&a.sm.push(new c(this.element)),this.element.hasClass("u-header--change-logo-sm")&&
a.sm.push(new d(this.element)));if(this.element.hasClass("u-header--abs-top-sm")||this.element.hasClass("u-header--static-sm"))this.element.hasClass("u-header--show-hide-sm")&&a.sm.push(new f(this.element)),this.element.hasClass("u-header--change-logo-sm")&&a.sm.push(new d(this.element)),this.element.hasClass("u-header--change-appearance-sm")&&a.sm.push(new c(this.element));if(this.element.hasClass("u-header--abs-bottom-sm")||this.element.hasClass("u-header--abs-top-2nd-screen-sm"))a.sm.push(new h(this.element)),
this.element.hasClass("u-header--change-appearance-sm")&&a.sm.push(new c(this.element,{fixPointSelf:!0})),this.element.hasClass("u-header--change-logo-sm")&&a.sm.push(new d(this.element,{fixPointSelf:!0}));this.element.hasClass("u-header--has-hidden-element-md")&&a.md.push(new j(this.element));this.element.hasClass("u-header--sticky-top-md")&&(console.log(1),this.element.hasClass("u-header--show-hide-md")?a.md.push(new g(this.element)):this.element.hasClass("u-header--toggle-section-md")&&a.md.push(new i(this.element)),
this.element.hasClass("u-header--change-logo-md")&&a.md.push(new d(this.element)),this.element.hasClass("u-header--change-appearance-md")&&a.md.push(new c(this.element)));this.element.hasClass("u-header--floating-md")&&a.md.push(new k(this.element));this.element.hasClass("u-header--invulnerable-md")&&a.md.push(new l(this.element));this.element.hasClass("u-header--sticky-bottom-md")&&(this.element.hasClass("u-header--change-appearance-md")&&a.md.push(new c(this.element)),this.element.hasClass("u-header--change-logo-md")&&
a.md.push(new d(this.element)));if(this.element.hasClass("u-header--abs-top-md")||this.element.hasClass("u-header--static-md"))this.element.hasClass("u-header--show-hide-md")&&a.md.push(new f(this.element)),this.element.hasClass("u-header--change-logo-md")&&a.md.push(new d(this.element)),this.element.hasClass("u-header--change-appearance-md")&&a.md.push(new c(this.element));if(this.element.hasClass("u-header--abs-bottom-md")||this.element.hasClass("u-header--abs-top-2nd-screen-md"))a.md.push(new h(this.element)),
this.element.hasClass("u-header--change-appearance-md")&&a.md.push(new c(this.element,{fixPointSelf:!0})),this.element.hasClass("u-header--change-logo-md")&&a.md.push(new d(this.element,{fixPointSelf:!0}));this.element.hasClass("u-header--has-hidden-element-lg")&&a.lg.push(new j(this.element));this.element.hasClass("u-header--sticky-top-lg")&&(this.element.hasClass("u-header--show-hide-lg")?a.lg.push(new g(this.element)):this.element.hasClass("u-header--toggle-section-lg")&&a.lg.push(new i(this.element)),
this.element.hasClass("u-header--change-logo-lg")&&a.lg.push(new d(this.element)),this.element.hasClass("u-header--change-appearance-lg")&&a.lg.push(new c(this.element)));this.element.hasClass("u-header--floating-lg")&&a.lg.push(new k(this.element));this.element.hasClass("u-header--invulnerable-lg")&&a.lg.push(new l(this.element));this.element.hasClass("u-header--sticky-bottom-lg")&&(this.element.hasClass("u-header--change-appearance-lg")&&a.lg.push(new c(this.element)),this.element.hasClass("u-header--change-logo-lg")&&
a.lg.push(new d(this.element)));if(this.element.hasClass("u-header--abs-top-lg")||this.element.hasClass("u-header--static-lg"))this.element.hasClass("u-header--show-hide-lg")&&a.lg.push(new f(this.element)),this.element.hasClass("u-header--change-logo-lg")&&a.lg.push(new d(this.element)),this.element.hasClass("u-header--change-appearance-lg")&&a.lg.push(new c(this.element));if(this.element.hasClass("u-header--abs-bottom-lg")||this.element.hasClass("u-header--abs-top-2nd-screen-lg"))a.lg.push(new h(this.element)),
this.element.hasClass("u-header--change-appearance-lg")&&a.lg.push(new c(this.element,{fixPointSelf:!0})),this.element.hasClass("u-header--change-logo-lg")&&a.lg.push(new d(this.element,{fixPointSelf:!0}));this.element.hasClass("u-header--has-hidden-element-xl")&&a.xl.push(new j(this.element));this.element.hasClass("u-header--sticky-top-xl")&&(this.element.hasClass("u-header--show-hide-xl")?a.xl.push(new g(this.element)):this.element.hasClass("u-header--toggle-section-xl")&&a.xl.push(new i(this.element)),
this.element.hasClass("u-header--change-logo-xl")&&a.xl.push(new d(this.element)),this.element.hasClass("u-header--change-appearance-xl")&&a.xl.push(new c(this.element)));this.element.hasClass("u-header--floating-xl")&&a.xl.push(new k(this.element));this.element.hasClass("u-header--invulnerable-xl")&&a.xl.push(new l(this.element));this.element.hasClass("u-header--sticky-bottom-xl")&&(this.element.hasClass("u-header--change-appearance-xl")&&a.xl.push(new c(this.element)),this.element.hasClass("u-header--change-logo-xl")&&
a.xl.push(new d(this.element)));if(this.element.hasClass("u-header--abs-top-xl")||this.element.hasClass("u-header--static-xl"))this.element.hasClass("u-header--show-hide-xl")&&a.xl.push(new f(this.element)),this.element.hasClass("u-header--change-logo-xl")&&a.xl.push(new d(this.element)),this.element.hasClass("u-header--change-appearance-xl")&&a.xl.push(new c(this.element));if(this.element.hasClass("u-header--abs-bottom-xl")||this.element.hasClass("u-header--abs-top-2nd-screen-xl"))a.xl.push(new h(this.element)),
this.element.hasClass("u-header--change-appearance-xl")&&a.xl.push(new c(this.element,{fixPointSelf:!0})),this.element.hasClass("u-header--change-logo-xl")&&a.xl.push(new d(this.element,{fixPointSelf:!0}));return a}},fixMediaDifference:function(a){if(a&&a.length&&a.filter('[class*="u-header--side"]').length)if(a.hasClass("u-header--side-left-xl")||a.hasClass("u-header--side-right-xl"))a=a.find(".navbar-expand-xl"),a.length&&a.removeClass("navbar-expand-xl").addClass("navbar-expand-lg");else if(a.hasClass("u-header--side-left-lg")||
a.hasClass("u-header--side-right-lg"))a=a.find(".navbar-expand-lg"),a.length&&a.removeClass("navbar-expand-lg").addClass("navbar-expand-md");else if(a.hasClass("u-header--side-left-md")||a.hasClass("u-header--side-right-md"))a=a.find(".navbar-expand-md"),a.length&&a.removeClass("navbar-expand-md").addClass("navbar-expand-sm");else if(a.hasClass("u-header--side-left-sm")||a.hasClass("u-header--side-right-sm"))a=a.find(".navbar-expand-sm"),a.length&&a.removeClass("navbar-expand-sm").addClass("navbar-expand")}};
n.prototype.checkViewport=function(){var a=b(window);if(a.width()>this.config.breakpointsMap.sm&&this.observers.sm.length)return this.prevViewport=this.viewport,this.viewport="sm",this.element[0].dataset.headerFixMoment&&a.scrollTop()>this.element[0].dataset.headerFixMoment&&(typeof this.config.breakpointsMap.sm==="undefined"?this.element.removeClass("js-header-fix-moment"):this.element.addClass("js-header-fix-moment")),this;if(a.width()>this.config.breakpointsMap.md&&this.observers.md.length)return this.prevViewport=
this.viewport,this.viewport="md",this.element[0].dataset.headerFixMoment&&a.scrollTop()>this.element[0].dataset.headerFixMoment&&(typeof this.config.breakpointsMap.md==="undefined"?this.element.removeClass("js-header-fix-moment"):this.element.addClass("js-header-fix-moment")),this;if(a.width()>this.config.breakpointsMap.lg&&this.observers.lg.length)return this.prevViewport=this.viewport,this.viewport="lg",this.element[0].dataset.headerFixMoment&&a.scrollTop()>this.element[0].dataset.headerFixMoment&&
(typeof this.config.breakpointsMap.lg==="undefined"?this.element.removeClass("js-header-fix-moment"):this.element.addClass("js-header-fix-moment")),this;if(a.width()>this.config.breakpointsMap.xl&&this.observers.xl.length)return this.prevViewport=this.viewport,this.viewport="xl",this.element[0].dataset.headerFixMoment&&a.scrollTop()>this.element[0].dataset.headerFixMoment&&(typeof this.config.breakpointsMap.xl==="undefined"?this.element.removeClass("js-header-fix-moment"):this.element.addClass("js-header-fix-moment")),
this;if(this.prevViewport)this.prevViewport=this.viewport;this.element[0].dataset.headerFixMoment&&a.scrollTop()>this.element[0].dataset.headerFixMoment&&(typeof this.config.breakpointsMap.xs==="undefined"?this.element.removeClass("js-header-fix-moment"):this.element.addClass("js-header-fix-moment"));this.viewport="xs";return this};n.prototype.notify=function(){if(this.prevViewport)this.observers[this.prevViewport].forEach(function(a){a.destroy()}),this.prevViewport=null;this.observers[this.viewport].forEach(function(a){a.check()});
return this};n.prototype.update=function(){for(var a in this.observers)this.observers[a].forEach(function(a){a.destroy()});this.prevViewport=null;this.observers[this.viewport].forEach(function(a){a.reinit()});return this};h.prototype.init=function(){this.defaultState=!0;this.offset=this.element.offset().top;return this};h.prototype.destroy=function(){this.toDefaultState();return this};h.prototype.check=function(){var a=b(window).scrollTop();a>this.offset&&this.defaultState?this.changeState():a<this.offset&&
!this.defaultState&&this.toDefaultState();return this};h.prototype.changeState=function(){this.element.addClass("js-header-fix-moment");this.defaultState=!this.defaultState;return this};h.prototype.toDefaultState=function(){this.element.removeClass("js-header-fix-moment");this.defaultState=!this.defaultState;return this};g.prototype.init=function(){this.direction="down";this.delta=0;this.defaultState=!0;this.offset=isFinite(this.element.data("header-fix-moment"))&&this.element.data("header-fix-moment")!==
0?this.element.data("header-fix-moment"):5;this.effect=this.element.data("header-fix-effect")?this.element.data("header-fix-effect"):"show-hide";return this};g.prototype.destroy=function(){this.toDefaultState();return this};g.prototype.checkDirection=function(){this.direction=b(window).scrollTop()>this.delta?"down":"up";this.delta=b(window).scrollTop();return this};g.prototype.toDefaultState=function(){switch(this.effect){case "slide":this.element.removeClass("u-header--moved-up");break;case "fade":this.element.removeClass("u-header--faded");
break;default:this.element.removeClass("u-header--invisible")}this.defaultState=!this.defaultState;return this};g.prototype.changeState=function(){switch(this.effect){case "slide":this.element.addClass("u-header--moved-up");break;case "fade":this.element.addClass("u-header--faded");break;default:this.element.addClass("u-header--invisible")}this.defaultState=!this.defaultState;return this};g.prototype.check=function(){var a=b(window).scrollTop();this.checkDirection();a>=this.offset&&this.defaultState&&
this.direction==="down"?this.changeState():!this.defaultState&&this.direction==="up"&&this.toDefaultState();return this};f.prototype.init=function(){if(!this.defaultState&&b(window).scrollTop()>this.offset)return this;this.defaultState=!0;this.transitionDuration=parseFloat(getComputedStyle(this.element.get(0))["transition-duration"],10)*1E3;this.offset=isFinite(this.element.data("header-fix-moment"))&&this.element.data("header-fix-moment")>this.element.outerHeight()?this.element.data("header-fix-moment"):
this.element.outerHeight()+100;this.effect=this.element.data("header-fix-effect")?this.element.data("header-fix-effect"):"show-hide";return this};f.prototype.destroy=function(){if(!this.defaultState&&b(window).scrollTop()>this.offset)return this;this.element.removeClass("u-header--untransitioned");this._removeCap();return this};f.prototype._insertCap=function(){this.element.addClass("js-header-fix-moment u-header--untransitioned");this.element.hasClass("u-header--static")&&b("html").css("padding-top",
this.element.outerHeight());switch(this.effect){case "fade":this.element.addClass("u-header--faded");break;case "slide":this.element.addClass("u-header--moved-up");break;default:this.element.addClass("u-header--invisible")}this.capInserted=!0};f.prototype._removeCap=function(){var a=this;this.element.removeClass("js-header-fix-moment");this.element.hasClass("u-header--static")&&b("html").css("padding-top",0);this.removeCapTimeOutId&&clearTimeout(this.removeCapTimeOutId);this.removeCapTimeOutId=setTimeout(function(){a.element.removeClass("u-header--moved-up u-header--faded u-header--invisible")},
10);this.capInserted=!1};f.prototype.check=function(){var a=b(window);a.scrollTop()>this.element.outerHeight()&&!this.capInserted?this._insertCap():a.scrollTop()<=this.element.outerHeight()&&this.capInserted&&this._removeCap();a.scrollTop()>this.offset&&this.defaultState?this.changeState():a.scrollTop()<=this.offset&&!this.defaultState&&this.toDefaultState()};f.prototype.changeState=function(){this.element.removeClass("u-header--untransitioned");this.animationTimeoutId&&clearTimeout(this.animationTimeoutId);
switch(this.effect){case "fade":this.element.removeClass("u-header--faded");break;case "slide":this.element.removeClass("u-header--moved-up");break;default:this.element.removeClass("u-header--invisible")}this.defaultState=!this.defaultState};f.prototype.toDefaultState=function(){var a=this;this.animationTimeoutId=setTimeout(function(){a.element.addClass("u-header--untransitioned")},this.transitionDuration);switch(this.effect){case "fade":this.element.addClass("u-header--faded");break;case "slide":this.element.addClass("u-header--moved-up");
break;default:this.element.addClass("u-header--invisible")}this.defaultState=!this.defaultState};d.prototype.init=function(){if(this.element.hasClass("js-header-fix-moment"))this.hasFixedClass=!0,this.element.removeClass("js-header-fix-moment");this.offset=this.config.fixPointSelf?this.element.offset().top:isFinite(this.element.data("header-fix-moment"))?this.element.data("header-fix-moment"):0;if(this.hasFixedClass)this.hasFixedClass=!1,this.element.addClass("js-header-fix-moment");this.imgs=this.element.find(".u-header__logo-img");
this.defaultState=!0;this.mainLogo=this.imgs.filter(".u-header__logo-img--main");this.additionalLogo=this.imgs.not(".u-header__logo-img--main");return this};d.prototype.destroy=function(){this.toDefaultState();return this};d.prototype.check=function(){var a=b(window);if(!this.imgs.length)return this;a.scrollTop()>this.offset&&this.defaultState?this.changeState():a.scrollTop()<=this.offset&&!this.defaultState&&this.toDefaultState();return this};d.prototype.changeState=function(){this.mainLogo.length&&
this.mainLogo.removeClass("u-header__logo-img--main");this.additionalLogo.length&&this.additionalLogo.addClass("u-header__logo-img--main");this.defaultState=!this.defaultState;return this};d.prototype.toDefaultState=function(){this.mainLogo.length&&this.mainLogo.addClass("u-header__logo-img--main");this.additionalLogo.length&&this.additionalLogo.removeClass("u-header__logo-img--main");this.defaultState=!this.defaultState;return this};i.prototype.init=function(){this.offset=isFinite(this.element.data("header-fix-moment"))?
this.element.data("header-fix-moment"):5;this.section=this.element.find(".u-header__section--hidden");this.defaultState=!0;this.sectionHeight=this.section.length?this.section.outerHeight():0;return this};i.prototype.destroy=function(){this.section.length&&this.element.css({"margin-top":0});return this};i.prototype.check=function(){if(!this.section.length)return this;var a=b(window).scrollTop();a>this.offset&&this.defaultState?this.changeState():a<=this.offset&&!this.defaultState&&this.toDefaultState();
return this};i.prototype.changeState=function(){this.element.stop().animate({"margin-top":this.sectionHeight*-1-1});this.defaultState=!this.defaultState;return this};i.prototype.toDefaultState=function(){this.element.stop().animate({"margin-top":0});this.defaultState=!this.defaultState;return this};c.prototype.init=function(){if(this.element.hasClass("js-header-fix-moment"))this.hasFixedClass=!0,this.element.removeClass("js-header-fix-moment");this.offset=this.config.fixPointSelf?this.element.offset().top:
isFinite(this.element.data("header-fix-moment"))?this.element.data("header-fix-moment"):5;if(this.hasFixedClass)this.hasFixedClass=!1,this.element.addClass("js-header-fix-moment");this.sections=this.element.find("[data-header-fix-moment-classes]");this.defaultState=!0;return this};c.prototype.destroy=function(){this.toDefaultState();return this};c.prototype.check=function(){if(!this.sections.length)return this;var a=b(window).scrollTop();a>this.offset&&this.defaultState?this.changeState():a<=this.offset&&
!this.defaultState&&this.toDefaultState();return this};c.prototype.changeState=function(){this.sections.each(function(a,d){var c=b(d),f=c.data("header-fix-moment-classes"),g=c.data("header-fix-moment-exclude");if(f||g)c.addClass(f+" js-header-change-moment"),c.removeClass(g)});this.defaultState=!this.defaultState;return this};c.prototype.toDefaultState=function(){this.sections.each(function(a,d){var c=b(d),f=c.data("header-fix-moment-classes"),g=c.data("header-fix-moment-exclude");if(f||g)c.removeClass(f+
" js-header-change-moment"),c.addClass(g)});this.defaultState=!this.defaultState;return this};j.prototype.init=function(){this.offset=isFinite(this.element.data("header-fix-moment"))?this.element.data("header-fix-moment"):5;this.elements=this.element.find(".u-header--hidden-element");this.defaultState=!0;return this};j.prototype.destroy=function(){this.toDefaultState();return this};j.prototype.check=function(){if(!this.elements.length)return this;var a=b(window).scrollTop();a>this.offset&&this.defaultState?
this.changeState():a<=this.offset&&!this.defaultState&&this.toDefaultState();return this};j.prototype.changeState=function(){this.config.animated?this.elements.stop().slideUp():this.elements.hide();this.defaultState=!this.defaultState;return this};j.prototype.toDefaultState=function(){this.config.animated?this.elements.stop().slideDown():this.elements.show();this.defaultState=!this.defaultState;return this};k.prototype.init=function(){this.offset=this.element.offset().top;this.sections=this.element.find(".u-header__section");
this.defaultState=!0;return this};k.prototype.destroy=function(){this.toDefaultState();return this};k.prototype.check=function(){var a=b(window).scrollTop();a>this.offset&&this.defaultState?this.changeState():a<=this.offset&&!this.defaultState&&this.toDefaultState();return this};k.prototype.changeState=function(){this.element.addClass("js-header-fix-moment").addClass(this.element.data("header-fix-moment-classes")).removeClass(this.element.data("header-fix-moment-exclude"));this.sections.length&&this.sections.each(function(a,
c){var d=b(c);d.addClass(d.data("header-fix-moment-classes")).removeClass(d.data("header-fix-moment-exclude"))});this.defaultState=!this.defaultState;return this};k.prototype.toDefaultState=function(){this.element.removeClass("js-header-fix-moment").removeClass(this.element.data("header-fix-moment-classes")).addClass(this.element.data("header-fix-moment-exclude"));this.sections.length&&this.sections.each(function(a,d){var c=b(d);c.removeClass(c.data("header-fix-moment-classes")).addClass(c.data("header-fix-moment-exclude"))});
this.defaultState=!this.defaultState;return this};l.prototype.check=function(){return this};l.prototype.init=function(){return this};l.prototype.destroy=function(){return this};l.prototype.changeState=function(){return this};l.prototype.toDefaultState=function(){return this}})(jQuery);