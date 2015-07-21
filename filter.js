var Filter = ( function () {
    var Filter = {};

    Filter.execute = function (obj, itemFilter, value) {
      "use strict";

      return obj.filter(function(element){
          var valueElement = element[itemFilter].toLowerCase();
          value = value.toLowerCase();
          return valueElement == value;
      });

    };

    return Filter;

})();
