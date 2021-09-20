Este é o código fonte do Objeto de Aprendizagem Historioscópio.

# Nem Ly e Nem Lerey #

Baixe o app, e rode:

```
cd historioscopio
npm install
npm start
```

# Requisitos

*Debian/Ubuntu*

- `sudo apt install nodejs`

# Dependências

O projeto faz uso das segintes tecnologias:

- [`React`](https://reactjs.org/docs/getting-started.html)
- [`Redux`](https://redux.js.org/introduction/getting-started)
- [`Workbox`](https://developers.google.com/web/tools/workbox)
- [`Babel`](https://babeljs.io/) `dev-only`
- [`Mocha`](https://mochajs.org/) `dev-only`

# Building

Para gerar um website que pode ser servido em um http server (e.g. apache)
execute o seguinte comando.

```
npm build
```
O website estará no direório `dist` dentro da raiz do projeto

# Debugando
```
npm start
```

# Testes
```
npm test
```