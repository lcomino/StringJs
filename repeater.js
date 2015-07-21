var Repeater = (function () {
  var Repeater = {};

  var options = {
    repeaterIdentifier : '.repeater',
    sourceIdentifier : 'data-remote-source',
    sourceMainObject : 'data-repeat',
    dataMainObject : ''
  };
  var i = 0;

  Repeater.init = function (obj, data) {
    "use strict";

    var _els = '';

    if (obj === 'undefined') {
      _els = document.querySelectorAll(options.repeaterIdentifier);
    } else {
      _els = document.querySelectorAll(obj);
    }


    for (i = 0; i < _els.length; i++){
      var el = _els[i].cloneNode(true);
      var p = _els[i].parentNode;

      _els[i].remove();

      options.dataMainObj = el.getAttribute(options.sourceMainObject);

      if(typeof data === 'undefined'){
        getRemoteData(p, el, el.getAttribute(options.sourceIdentifier));
        continue;
      }

      bind(p, el, data);
    }

  };

  function bind(p, el, data){
    if(options.dataMainObj !== undefined && options.dataMainObj !== null  && options.dataMainObj !== ''){
      data = data[options.dataMainObj];
    }

    el.removeAttribute(options.sourceIdentifier);
    if(typeof options.dataMainObj !== 'undefined')
      el.removeAttribute(options.sourceMainObject);

    var result = String.bind(el.outerHTML, data);

    p.innerHTML = result;

    el.remove();
  }

  function getRemoteData(p, el, url){

    var data = '';

    var req = new XMLHttpRequest();

    req.open('GET', url);

    req.addEventListener("progress", function(){
       p.innerHTML = 'Coletando dados...aguarde!';
    }, false);

    req.onload = function(){
      data = JSON.parse(this.responseText);
      bind(p, el, data);
    };

    req.send();
  }

  return Repeater;
})();
