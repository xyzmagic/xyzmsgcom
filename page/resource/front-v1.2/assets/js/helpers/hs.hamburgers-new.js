(function(a){a.HSCore.helpers.HSHamburgers={_baseConfig:{afterOpen:function(){},afterClose:function(){}},pageCollection:a(),init:function(b,c){this.collection=b&&a(b).length?a(b):a();if(a(b).length)return this.config=c&&a.isPlainObject(c)?a.extend({},this._baseConfig,c):this._baseConfig,this.config.itemSelector=b,this.initHamburgers(),this.pageCollection},initHamburgers:function(){var b=this.config,c=this.pageCollection;this&&a(this).length&&this.collection.each(function(h,f){var d=a(f),g=d.parents("button, a"),
e=0;a(g).on("click",function(){e=a(this).attr("aria-expanded",!1)?1:0;e===0?d.addClass("is-active"):d.removeClass("is-active")});a(document).on("keyup.HSHeaderSide",function(a){a.keyCode&&a.keyCode===27&&b.afterClose()});c=c.add(d)})}}})(jQuery);