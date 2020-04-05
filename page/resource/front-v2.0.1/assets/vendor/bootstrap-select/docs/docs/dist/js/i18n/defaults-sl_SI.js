/*!
 * Bootstrap-select v1.13.2 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Ni膷 izbranega',
    noneResultsText: 'Ni zadetkov za {0}',
    countSelectedText: '{0} od {1} izbranih',
    maxOptionsText: function (numAll, numGroup) {
      return [
        'Omejitev dose啪ena (max. izbranih: {n})',
        'Omejitev skupine dose啪ena (max. izbranih: {n})'
      ];
    },
    selectAllText: 'Izberi vse',
    deselectAllText: 'Po膷isti izbor',
    multipleSeparator: ', '
  };
})(jQuery);


}));
