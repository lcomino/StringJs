window.onload = function(){

  var pessoas = [{
    "nome" : "Lucas",
    "sobrenome" : "Comino",
    "telefone" : "+55 44 9999-9999"
    },
    {
      "nome" : "João",
      "sobrenome" : "Silva",
      "telefone" : "+55 44 8888-9999"
  },
  {
    "nome" : "Mane",
    "sobrenome" : "Silva",
    "telefone" : "+55 44 8888-9999"
  },
  {
    "nome" : "Patricia",
    "sobrenome" : "Pereira",
    "telefone" : "+55 44 9105-9999"
  }];

  Repeater.init('.repeater', pessoas);

  var el = document.getElementById('nome');

  el.addEventListener('keyup', function(e){
    pessoasFilter = Filter.execute(pessoas, el.getAttribute('data-filter'), this.value);
    if(pessoasFilter.length > 0)
      Repeater.init('.repeater', pessoasFilter);
    else
      Repeater.init('.repeater', pessoas);

    console.log(pessoas);

  });

};
