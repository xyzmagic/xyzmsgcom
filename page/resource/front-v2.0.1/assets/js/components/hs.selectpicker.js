(function(a){a.HSCore.components.HSSelectPicker={_baseConfig:{},pageCollection:a(),init:function(b,d){this.collection=b&&a(b).length?a(b):a();if(a(b).length)return this.config=d&&a.isPlainObject(d)?a.extend({},this._baseConfig,d):this._baseConfig,this.config.itemSelector=b,this.initSelectPicker(),this.pageCollection},initSelectPicker:function(){var b=this.pageCollection;this.collection.each(function(d,e){var c=a(e);c.selectpicker();c.on("loaded.bs.select",function(){var a=c.siblings(".dropdown-menu ").find(".bs-searchbox"),
b=c.data("searchbox-classes");b&&a.addClass(b)});b=b.add(c)})}}})(jQuery);