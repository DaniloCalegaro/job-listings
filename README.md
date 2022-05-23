# Job Listings

![GitHub repo size](https://img.shields.io/github/repo-size/DaniloCalegaro/job-listings)
![GitHub language count](https://img.shields.io/github/languages/count/DaniloCalegaro/job-listings)


Página desktop/mobile criada para praticar os estudos de Javascript juntamente com manipulação da DOM e elementos JSON.

Esta página é alimentada por um arquivo JSON onde é exibida uma lista dinâmica de empresas juntamente com suas informações, ou seja, se for acrescido novas empresas a lista exiba será a exibida para o usuário. Além disto ela possui uma aba filtros que é possível mostrar apenas as empresas por linguagens de programação selecionadas.

Tudo isto é manipulado pelo usuário de maneira prática e intuitiva.

# Tabela de conteúdos

- [Job Listings](#job-listings)
- [Tabela de conteúdos](#tabela-de-conteúdos)
  - [Visão Geral](#visão-geral)
    - [A Página](#a-página)
    - [Captura de Tela](#captura-de-tela)
    - [Links](#links)
  - [Meu Processo](#meu-processo)
    - [Desenvolvimento do conhecimento](#desenvolvimento-do-conhecimento)
    - [Recursos utilizados](#recursos-utilizados)
  - [Autor](#autor)
  - [Pré-requisitos](#pré-requisitos)

## Visão Geral

### A Página

Nesta foi fixado vários conhecimentos:

- Estruturar o HTML, CSS e Javascript
- Aplicado a pratica do SASS
- Interações com a DOM
- Manipulação de elementos JSON
- Funções de manipulação de arrays
- Responsividade dos elementos quanto aos dispositivos 

### Captura de Tela

![design-list-job](https://user-images.githubusercontent.com/33231886/169694245-a3ae18f0-9e05-4ca9-850d-8261fb656bae.jpg)

### Links

- URL da Solução : [Job-Listings](https://job-listings-5glnz363d-danilocalegaro.vercel.app/)

## Meu Processo

### Desenvolvimento do conhecimento

Este até o momento foi uns dos projetos mais desafiadores onde me entrei com o conhecimento que consegui, todos eles foram colocados a prova e muitos outros foram adquiridos.

Meu objetivo quando me deparei era utilizar a menor quantidade de código HTML e o máximo de Javascript justamente para fixar bem o conhecimento de interação com DOM. 

Como eu já estava bem empolgado com projeto me desafiei em criar uma aba de filtros não fixados diretamente a lista mais sim alimentado com as propriedades contidas no item linguagens disponibilizadas pelo arquivo JSON.

Após montar toda a página e acessar o arquivo JSON com a informações a serem mostradas para o usuário, partir para o desenvolvimento dos filtros onde o usuário selecionava a linguagem e a página deveria mostrar apenas os resultados onde a condição fosse verdadeira. Foram várias horas de estudos de funções de arrays como map, filter, refuce, every, some, etc...

Pensei muito e encontrei a solução de filtro, onde combinei a função `filter`, juntamente com o `every` e `some` e tudo se encaixou perfeitamente. Não foi fácil pois no momento eu estava com os dados um pouco complexo sendo analisado, um objeto com vários itens e muitas informações e um array com as linguagens que deveria percorrer cada item do objeto para analisar se este existia na condição. 

Afinal o objetivo e o desafio proposto por mim mesmo foi concluídos e deixo aqui minha solução.

### Recursos utilizados

- [IGTI](https://www.igti.com.br/) - Aulas de manipulação da DOM e Json
- [Rocketseat](https://www.rocketseat.com.br/) - Conhecimentos de javascript adquiridos na trilha Discover.
- [MDN Web Docs](https://developer.mozilla.org/) - Definições de tag utilizadas no projeto.
- [SASS](https://sass-lang.com/) - A documentação foi impressidivel para implementar corretamento o SASS.
- [Frontend Mentor](https://www.frontendmentor.io/challenges) - Ideia de layout e desafios.
- [DPW](https://desenvolvimentoparaweb.com/javascript/) - Estudos de funções de arrays
## Autor

Linkedin - [Danilo Calegaro](https://www.linkedin.com/in/danilo-calegaro/)

## Pré-requisitos

Para visualizar a página basta clicar no link disponível nesta página ou abrir o projeto com o [VSCode](https://code.visualstudio.com/) e executar com a extensão LiveServer, assim será possível ter acesso a todas as funções da aplicação.