!function(String){String.prototype.format=function(){"use strict";var s=this.valueOf();console.log(arguments);for(var i=0;i<arguments.length;i++){var reg=new RegExp("\\{"+i+"\\}","gm");s=s.replace(reg,arguments[i])}return s},String.prototype.repeat=function(){"use strict";var s=this.valueOf(),a=arguments[0],k=0,middleware=(arguments[1],arguments[2]),listString=[];if("[object Array]"!==Object.prototype.toString.call(a))throw new TypeError("oops.. você deve passar um array de objetos para funcionar...");for(k=0;k<a.length;k++){var o=a[k];middleware&&"function"==typeof middleware&&middleware(o),listString.push(s.bind(o))}return listString.join("")},String.prototype.bind=function(){"use strict";var s=this.valueOf(),a=arguments[0],k=0,owner=arguments[1];if("[object Object]"===Object.prototype.toString.call(a))for(var key in a){k=key,void 0!==owner&&(key="{0}.{1}".format(owner,key)),s=s.bind(a[k],key);var reg=new RegExp("\\{{"+key+"\\}}","gm");s=s.replace(reg,a[k])}return s},String.prototype.isDate=function(){"use strict";var pattern=/[-0-9]/g;return pattern.test(this.valueOf())},String.prototype.timeToDate=function(){"use strict";var strData=this.valueOf();return new Date(parseInt(strData.match(/[-0-9]/g,"").join("")))},String.prototype.toDate=function(strData){"use strict";var strData=this.valueOf(),split=strData.split("/");return"{0}-{1}-{2}".format(split[1],split[0],split[2])},String.prototype.timeToLocateDateString=function(){"use strict";var strTime=this.valueOf(),date=String.timeToDate(strTime);return date=date.toLocaleDateString(),"02/01/1"==date&&(date="01/01/0001"),date},String.prototype.capitalize=function(string){"use strict";return string=string.toLowerCase(),"{0}{1}".format(string[0].toUpperCase(),string.slice(1))},String.prototype.capitalizeSentence=function(sentence,split){"use strict";split=split||" ";var sentenceSplited=sentence.split(split),newText=[];for(var i in sentenceSplited){var word=sentenceSplited[i];word.length>=3&&0===word.search(".")?newText.push(String.capitalize(word)):newText.push(word.toLowerCase())}return newText.join(" ")}}(String);