<div align="center">
  
  # Markdown Links
  
   <img alt="Markdown-logo" src="markdown-m.png">
  
  Status: Em desenvolvimento
 
</div>


## ÍNDICE

* [1. Introdução](#1-Introdução)
* [2. Sobre o Projeto](#2-sobre-o-projeto)
* [3. Instalação](#3-instalação)
* [4. Como utilizar](#4-como-utilizar)
* [5. Checklist](#5-checklist)
* [6. Tecnologias e Ferramentas Utilizadas](#6-tecnologias-e-ferramentas-utilizadas)
* [7. Autora](#7-autora)

***

## 1. INTRODUÇÃO

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em várias plataformas que
manipulam texto (GitHub, fórum, blogs, etc.) e é comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar
quebrados, ou que já não são válidos, prejudicando o valor da
informação que está ali.

## 2. SOBRE O PROJETO

Uma comunidade open source nos propôs criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.

Neste projeto, foi criado uma ferramenta de linha de comando (CLI) assim como
uma biblioteca em Javascript.

[Node.js](https://nodejs.org/pt-br/) é um ambiente de execução para JavaScript
construído com o [motor de JavaScript V8 do
Chrome](https://developers.google.com/v8/). Ele nos permite executar o
JavaScript no sistema operacional, seja no computador ou em um
servidor, o que nos abre portas para poder interagir com sistemas, arquivos,
redes, entre outros.

## 3. INSTALAÇÃO

## 4. COMO UTILIZAR

## 5. CHECKLIST

### General

* [ ] Poder instalar via `npm install --global <github-user>/md-links`

### `README.md`

* [ ] Um board com o backlog das implementações da sua biblioteca
* [ ] Documentação técnica da sua biblioteca
* [ ] Guia de uso e instalação da biblioteca

### API `mdLinks(path, opts)`

* [ ] O módulo exporta uma função com a interface (API) esperada
* [ ] Implementa suporte para arquivo individual
* [ ] Implementa suporte para diretórios
* [ ] Implementa `options.validate`

### CLI

* [ ] Possuir o executável `md-links` no path (configurado no `package.json`)
* [ ] Executar sem erros e ter o resultado esperado
* [ ] Implementar `--validate`
* [ ] Implementar `--stats`

### Testes

* [ ] Os testes unitários devem cobrir no mínimo 70% dos statements, functions,
  lines e branches.
* [ ] Rodar os testes e linter (`npm test`).

## 6. TECNOLOGIAS e FERRAMENTAS UTILIZADAS

- **Visual Studio Code**
- **Javascript**
- **Node.js**
- **npm**

## 7. AUTORA

<table>
  <td>
    <div align= "center">
      <img alt="Beatriz de Sousa Carvalho" height="150" src="https://avatars.githubusercontent.com/u/99045620?v=4"> 
    </div>
    <h3 align="center"><a href="https://github.com/BeaSCarvalho">Beatriz de Sousa Carvalho</a></h3>
    <h4 align="center">Projeto do Bootcamp da <em><a href="https://hub.laboratoria.la/br">Laboratoria</a></em></h4>
    <div align="center">
       <a href = "mailto:beaproscarva@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
      <a href="https://www.linkedin.com/in/beatriz-de-sousa-carvalho/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    </div>
  </td>
</table>  