window.onload = function(){
  var els = document.querySelectorAll('.repeater');

  for(var i = 0; i < els.length; i++){

    var el = els[i],
        children = el.firstElementChild;
    el.innerHTML = '';

    var req = new XMLHttpRequest();

    req.open('GET', el.getAttribute('data-source'));

    req.onload = function(){

      var response = JSON.parse(this.responseText);

      var a = response.stars;

      var lis = String.bind(children.outerHTML, a);


      el.innerHTML = lis;
    }

    req.send(true);
  }

}
