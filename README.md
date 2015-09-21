StringJs
========

Library simples para manipulação de Strings com Javascript.

Versão atual? 1.0.0, utilizando o SemVer.

## Instalando com Bower

```
bower install StringJs
```
## Adicionando no projeto

```
<script src="bower_components/StringJs/string.js"></script>
```

## Utilizando

```
<script>
  var dados = {
      nome: 'Lucas Comino',
      github : {
        usuario: 'lcomino',
        url : 'https://github.com/lcomino'
      }
    };

  var mensagem = "{0}, {1}".format(dados.nome, dados.github.url);

  //ou asssim

  var mensagem = "{nome}, {github.url}".bind(dados);
</script>
```

_Simples, sua string estará formatada!_

Fique a vontate para contribuir com o projeto.
