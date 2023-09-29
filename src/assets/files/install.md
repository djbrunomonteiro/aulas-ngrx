# Entendendo que diabos é NGRX e pra que serve

Primeiramente, caso você tenha chegado aqui sem muita informação e esteja tentando entender o que é o NgRx: basicamente, ele é uma biblioteca de gerenciamento de estado para aplicativos Angular. Essa ferramenta permite que nós, desenvolvedores, controlemos o estado da aplicação em um único local centralizado, conceito que chamamos de "Fonte Única de Verdade".

"Tá dj, mas isso eu já sei! Me fale do problema que levou você a usar o NgRx."

Em resumo, à medida que minha aplicação Angular crescia, tornava-se cada vez mais caótico entender de onde minhas variáveis estavam sendo alteradas.

Geralmente, o que um iniciante em Angular faz é criar variáveis dentro de um componente "Pai" ou em um "Service" e, em seguida, começa a emitir eventos ou a alterar a variável diretamente de outros componentes. No entanto, rapidamente percebe-se que os dados são inconsistentes; em um componente, a variável tem um valor e, em outro, é outro valor, e assim por diante.

Foi aí que surgiu a necessidade de centralizar esses dados e garantir que todos os componentes dependentes fossem atualizados automaticamente. Então, entra em cena o NgRx. Para alguns, ele pode parecer complicado e difícil de entender, mas para outros, como eu, tornou-se uma peça essencial e robusta no processo de desenvolvimento com Angular.


# Instalando ecossistema NGRX pro nossos exemplos

Antes de mais nada acesse a documentação completa em https://ngrx.io/docs

Eu utilizo os seguintes pacotes:

* @ngrx/store 

*(Onde ficarão nossos dados)*


doc: https://ngrx.io/guide/store/install

```html
ng add @ngrx/store@latest
```

* @ngrx/entity

(*Utilitário para alterar o estado do nosso store*)

doc: https://ngrx.io/guide/entity/install

```html
ng add @ngrx/entity@latest
```

* @ngrx/effects 

(*Onde ficarão nossas interações externas*)

doc: https://ngrx.io/guide/effects/install

```html
ng add @ngrx/effects@latest
```

* @ngrx/store-devtools

(*Utilitário de desenvolvimento que nos permite acompanhar o nosso ecossistema NgRx*)

doc: https://ngrx.io/guide/store-devtools/install

```html
ng add @ngrx/store-devtools@latest
```

* Extensão Redux DevTools para Chrome/Firefox/Edge

(*Onde visualizaremos nossos devtools*)

Chrome: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

Firefox: https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools

Edge: https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei



Após a instalação vamos para o proximo passo: