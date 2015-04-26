var String = (function(){

  var String = {};

  String.format = function () {
      "use strict";
      var s = arguments[0];
      for (var i = 0; i < arguments.length - 1; i++) {
          var reg = new RegExp("\\{" + i + "\\}", "gm");
          s = s.replace(reg, arguments[i + 1]);
      }
      return s;
  };

  String.bind = function () {
    "use strict";
    var s = arguments[0];
  	var a = arguments[1];
    var k = 0;
  	var owner = arguments[2];

    if(Object.prototype.toString.call(a) === '[object Array]'){
        var newS = '';
        for(k = 0; k < a.length; k++){
          var o = a[k];
          newS += String.bind(s, o);
        }
        s = newS;
    }

  	if(Object.prototype.toString.call(a) === '[object Object]'){

      for(var key in a){
  			k = key;

  			if(owner !== undefined){
  				key = String.format("{0}.{1}", owner, key);
  			}

  			s = String.bind(s, a[k], key);

  			var reg = new RegExp("\\{{" + key + "\\}}", "gm");
  			s = s.replace(reg, a[k]);
  		}

  	}

      return s;
  };

  String.isDate = function(strData){
      "use strict";
  	var pattern = /[-0-9]/g;
  	return pattern.test(strData);
  };

  String.timeToDate = function(strData){
    "use strict";
  	return new Date(parseInt(strData.match(/[-0-9]/g, '').join('')));
  };

  String.toDate = function(strData){
    "use strict";
  	var split = strData.split('/');
  	return String.format("{0}-{1}-{2}", split[1], split[0], split[2]);
  	//return new Date(strData).getTime();
  };

  String.timeToLocateDateString = function(strTime){
    "use strict";
  	var date = String.timeToDate(strTime);

  	date = date.toLocaleDateString();

  	if(date == '02/01/1'){
  		date = '01/01/0001';
  	}

  	return date;
  };

  String.capitalize = function(string){
    "use strict";
    string = string.toLowerCase();
    return String.format("{0}{1}" , string[0].toUpperCase(), string.slice(1));
  };

  String.capitalizeSentence = function(sentence, split){
    "use strict";
    split = split || ' ';
    var sentenceSplited = sentence.split(split),
        newText = [];

    for(var i in sentenceSplited){
      var word = sentenceSplited[i];

      if(word.length >= 3 && word.search('.') === 0){
          newText.push(String.capitalize(word));
      }else{
        newText.push(word.toLowerCase());
      }

    }

    return newText.join(' ');

  };

  return String;
}());
