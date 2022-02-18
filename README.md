## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto Car Shop!

Você já usa o _GitHub_ diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Tenha atenção a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

# Sumário

- [Boas vindas ao repositório do projeto Car Shop!](#boas-vindas-ao-repositório-do-projeto-car-shop)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Testes](#testes)
    - [Dica: desativando testes](#dica-desativando-testes)
- [Contextualizando](#contextualizando)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Requisitos Obrigatórios](#requisitos-obrigatórios)
    - [1 - Crie a classe `Race`](#1---crie-a-classe-race)
    - [2 - Crie classes que herdam de `Race`](#2---crie-classes-que-herdam-de-race)
    - [3 - Crie a interface `Energy`](#3---crie-a-interface-energy)
    - [4 - Crie a classe `Archetype`](#4---crie-a-classe-archetype)
    - [5 - Crie classes que herdam de `Archetype`](#5---crie-classes-que-herdam-de-archetype)
    - [6 - Crie a interface `Fighter`](#6---crie-a-interface-fighter)
    - [7 - Crie a classe `Character`](#7---crie-a-classe-character)
    - [8 - Crie a interface `SimpleFighter`](#8---crie-a-interface-simplefighter)
    - [9 - Crie a classe `Monster`](#9---crie-a-classe-monster)
    - [10 - Crie a classe `PVP`](#10---crie-a-classe-pvp)
  - [Requisitos Bônus](#requisitos-bônus)
    - [11 - Criar a classe `PVE`](#11---criar-a-classe-pve)
    - [12 - Crie a classe `Dragon`](#12---crie-a-classe-dragon)
    - [13 - Crie objetos no arquivo `index`](#13---crie-objetos-no-arquivo-index)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos finais](#avisos-finais)

---

# Habilidades

Neste projeto, você será capaz de:

- Exercitar o conhecimento dos pilares da `Programação Orientada a Objetos`: `Herança`, `Abstração`, `Encapsulamento` e `Polimorfismo`;
- Exercitar a utilização de `Composição`;
- Exercitar a criação e utilização de `Interfaces`;
- Implementar, em `TypeScript`: `Classes`, `Instâncias`, `Atributos`, `Métodos` e `Objetos`;
- Aplicar os conhecimentos de `MongoDB`, `Typescript` e `POO` para criar uma API com `CRUD`.

---

# Entregáveis

Para entregar o seu projeto, você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/fundamentals/git) sempre que precisar!

---

## O que deverá ser desenvolvido

Para este projeto, você deverá aplicar os princípios de `POO` para a contrução de uma API com `CRUD` para gerenciar uma concessionária e veículos utilizando o banco de dados `MongoDB`.

---

## Desenvolvimento

⚠️ **Dicas Importantes** ⚠️:

- Durante a execução dos testes, serão criados arquivos `.ts` no repositório do projeto
  - Ao final da execução de cada teste é rodado um script que apaga todos os arquivos `.ts` do repositório (com exceção dos que já vão com o projeto)
  - O script utiliza o binário `find` do linux
  - Em ambiente Windows, o `find` utilizado é o que vem na instalação do git (`C:/Program Files/Git/usr/bin/find.exe`)

---

## Data de Entrega

    - Serão `X` dias de projeto.
    - Data de entrega para avaliação final do projeto: `DD/MM/YYYY - 14:00h`.

---

# Instruções para entregar seu projeto

## Antes de começar a desenvolver

1. Clone o repositório

- `git clone https://github.com/tryber/sd-0x-project-car-shop.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-0x-project-car-shop`

2. Instale as dependências

- `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-sd-0x-project-car-shop`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-car-shop`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-car-shop/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-car-shop/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

- Faça `commits` das alterações que você fizer no código regularmente.

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto.

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver

**⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️**

**👀 Observações importantes:**

---

## Linter

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivos `package.json`.

Para poder rodar os `ESLint` em um projeto, basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

⚠ PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO! ⚠

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em _extensions_ e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Testes

Para executar os testes localmente, digite no terminal o comando `npm test`.

### Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é bastante poluída. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `describe`. Como o nome indica, esta função "pula" um teste:

```typescript
describe.skip('...', () => {})
```

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

<!-- ![Testando um arquivo específico](./public/skip-tests.jpeg) -->

⚠️ Lembre-se de não entregar o projeto com nenhum teste ignorado. **Testes ignorados serão tratados como testes falhando**. ⚠️

⚠️ **Não apague, em hipótese alguma, qualquer teste ou arquivo deste repositório**. ⚠️

---

# Contextualizando

 <!-- Colocar aqui o contexto do projeto -->

---

# Requisitos do projeto

## Requisitos Obrigatórios

### 1 - Crie a classe `Race`

No universo de Car Shop - T&D, quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem suas particularidades.
A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nas pessoas que habitam este universo.
Para entender melhor um pouco da incrível diversidade que temos e as características únicas de algumas das raças de T&D, vamos começar nossa jornada com a missão de **criar a classe abstrata `Race`**.

Para que você tenha sucesso nesta _quest_, deve se certificar que:

- Os arquivos sejam criados no diretório `src/Races`;
- `Race` tenha os atributos privados `name` e `dexterity`, ambos inicializados em seu construtor;
- A classe `Race` deverá ter um método estático chamado `createdRacesInstances` que retorna um number;
  - Esse número é correspondente a quantidade de instâncias criadas a partir das classes estendidas de `Race`. Porém na classe `Race` levantará apenas uma mensagem de erro;
- A classe deverá ter um `getter` abstrato chamado `maxLifePoints`, que retorna um number. Esse número é correspondente a quantidade máxima de pontos de vida da raça;
- A classe também deverá ter `getters` para acessar os valores de `name` e `dexterity`;

 ```typescript
 name: string;
 dexterity: number;
 maxLifePoints(): number
 ```

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Race:
  - A classe `Race` existe;
  - A classe `Race` é abstrata;
  - O método `maxLifePoints` da classe `Race` é abstrato;
  - O parâmetro `name` da classe `Race` pode ser lido;
  - O parâmetro `name` da classe `Race` *NÃO* pode ser alterado;
  - O parâmetro `dexterity` da classe `Race` pode ser lido;
  - O parâmetro `dexterity` da classe Race *NÃO* pode ser setado;
  - O método `maxLifePoints` retorna um valor numérico;
  - O método `createdRacesInstances` deve existir e ser estático;
  - O método `createdRacesInstances` deve levantar um erro "Not implemented";
</details>

⚠ Atenção: para que os testes funcionem corretamente, a classe `Race` deve ser importada no arquivo `src/Races/index.ts` e exportada lá de forma padrão (`export default`).  ⚠

### 2 - Crie classes que herdam de `Race`

Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas. Nesta segunda _quest_, você irá criar classes para quatro raças que existem no mundo de T&D.

Antes de prosseguir com a missão, é muito importante que você saiba que:

- Os arquivos deverão ser criados no diretório `src/Races`.
- Todas as raças estendem a classe `Race`;
- As classes criadas deverão ser `Dwarf`, `Elf`, `Halfling` e `Orc` e devem estar em arquivos de mesmo nome.

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para as classe que herdam de Race:
  - A classe `Dwarf` existe;
  - A classe `Dwarf` herda de `Race`;
  - O parâmetro `name` da classe `Dwarf` pode ser lido;
  - O parâmetro `dexterity` da classe `Dwarf` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Dwarf`;
  - O parâmetro `maxLifePoints` da classe `Dwarf` existe e é igual a 80;
  - A classe `Elf` existe;
  - A classe `Elf` herda de `Race`;
  - O parâmetro `name` da classe `Elf` pode ser lido;
  - O parâmetro `dexterity` da classe `Elf` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Elf`;
  - O parâmetro `maxLifePoints` da classe `Elf` existe e é igual a 99;
  - A classe `Halfling` existe;
  - A classe `Halfling` herda de `Race`;
  - O parâmetro `name` da classe `Halfling` pode ser lido;
  - O parâmetro `dexterity` da classe `Halfling` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Halfling`;
  - O parâmetro `maxLifePoints` da classe `Halfling` existe e é igual a 60;
  - A classe `Orc` existe;
  - A classe `Orc` herda de `Race`;
  - O parâmetro `name` da classe `Orc` pode ser lido;
  - O parâmetro `dexterity` da classe `Orc` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Orc`;
  - O parâmetro `maxLifePoints` da classe `Orc` existe e é igual a 74;
</details>

⚠ Atenção: para que os testes funcionem corretamente, cada uma das classes criadas para este requisito deve ser importada no arquivo `src/Races/index.ts` e lá exportadas. ⚠

### 3 - Crie a interface `Energy`

Energia é um atributo vital para a maioria dos seres. A energia gasta ao andar, nadar, escalar ou lutar é chamada de _stamina_ no contexto de `Car Shop`. Contudo, este universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta ao utilizar magias é chamada de _'mana'_.

Sua próxima missão é tornar possível o uso dessas energias. Para isso:

- Crie uma interface Energy, que deve possuir os seguintes atributos:

```typescript
type_: EnergyType;
amount: number;
```

✨ Dica de mestre:

- O arquivo deverá ser criado na raiz do diretório `src`;
- O nome do arquivo deverá ser `Energy.ts`;
- Para implementar a interface `Energy`, é necessário criar um type `EnergyType` que poderá ser definido como `'mana'` ou `'stamina'`;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a interface Energy:
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'mana'`;
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'stamina'`;
  - É possível criar uma variável com o tipo da interface `Energy` e atribuir a ela o valor `{ amount: 10, type_: 'stamina'}`;
  - É possível criar uma variável com o tipo da interface `Energy` e atribuir a ela o valor `{ amount: 45, type_: 'mana'}`;
  - Não possível criar uma variável com o tipo `EnergyType` e atribuir a ela um valor diferente de `'mana'` ou `'stamina'`;
  - Não é possível criar uma variável com o tipo da interface `Energy` sem atribuir a ela um `amount`;
  - Não é possível criar uma variável com o tipo da interface `Energy` sem atribuir a ela um `type_`;
</details>

⚠ Atenção: Para que os testes funcionem corretamente, a interface `Energy` deve ser exportada de forma padrão (`export default`).

### 4 - Crie a classe `Archetype`

Dentro do nosso universo, os seres têm seus talentos especiais. Por isso, sua próxima _quest_ será **criar a classe abstrata `Archetype`**.

- Essa classe deverá conter os atributos `special` e `cost`, ambos do tipo `number`, que representarão a potência de seu ataque especial e o custo energético para utilizá-lo, respectivamente;
- A classe `Archetype` deverá ter um método estático chamado `createdArchetypesInstances` que retorna um number:
  - Esse número é correspondente a quantidade de instâncias criadas a partir das classes estendidas de `Archetype`. Porém na classe `Archetype` levantará apenas uma mensagem de erro;
- A classe também deverá ter um `getter` _energyType_, que retorna o tipo de energia do personagem;
- O construtor da classe recebe o atributo `name`, que será uma `string` e representará o nome de um dos arquétipos existentes no universo de D&T;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Archetype:
  - A classe `Archetype` existe;
  - A classe `Archetype` é abstrata;
  - O parâmetro `name` da classe `Archetype` pode ser lido;
  - O parâmetro `name` da classe `Archetype` não pode ser alterado;
  - O parâmetro `special` da classe `Archetype` pode ser lido;
  - O parâmetro `cost` da classe `Archetype` pode ser lido;
  - O método `energyType` retorna uma string;
</details>

⚠ Atenção: para que os testes funcionem corretamente, o arquivo deverá ser criado no diretório `src/Archetypes` e a classe `Archetypes` deve ser importada no arquivo `src/Archetypes/index.ts` e lá exportada de forma padrão (`export default`). ⚠

### 5 - Crie classes que herdam de `Archetype`

Como você pode imaginar, há diversos arquétipos diferentes no mundo de _Car Shop_, cada um com suas peculiaridades e alinhamentos.
Agora, chegou a hora de você conhecer alguns deles e o que poderia ser melhor para isso do que criar classes para eles? Mas antes, tenha atenção às seguintes instruções:

- Os arquivos deverão ser criados no diretório `src/Archetypes`;
- Todas os arquétipos estendem a classe `Archetype`;
- No momento, vamos nos ater a quatro arquétipos muito comuns nos seres deste universo: **Mage** 🧙‍♀️, **Necromancer** ☠️, **Warrior** ⚔️ ou **Ranger** 🍃;
- São características dos seres dos arquétipos `Mage` e `Necromancer` causar dano em seus inimigos por meio de magia, através do uso de`mana`;
- São características dos seres dos arquétipos `Warrior` e `Ranger` causar dano em seus inimigos por meio de sua força, usando `stamina` para isso;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para as classes que herdam de Archetype:
  - A classe `Mage` existe;
  - A classe `Mage` herda de `Archetype`;
  - O parâmetro `name` da classe `Mage` pode ser lido;
  - O método `energyType` da Classe `Mage` existe e retorna uma string;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Mage`;
  - A classe `Necromancer` existe;
  - A classe `Necromancer` herda de `Archetype`;
  - O parâmetro `name` da classe `Necromancer` pode ser lido;
  - O parâmetro `energyType` da classe `Necromancer` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Necromancer`;
  - A classe `Ranger` existe;
  - A classe `Ranger` herda de `Archetype`;
  - O parâmetro `name` da classe `Ranger` pode ser lido;
  - O parâmetro `energyType` da classe `Ranger` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Ranger`;
  - A classe `Warrior` existe;
  - A classe `Warrior` herda de `Archetype`;
  - O parâmetro `name` da classe `Warrior` pode ser lido;
  - O parâmetro `energyType` da classe `Warrior` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Warrior`;
</details>

⚠ Atenção: para que os testes funcionem corretamente, cada uma das classes criadas para este requisito deve ser importada no arquivo `src/Archetypes/index.ts` e lá exportadas. ⚠

### 6 - Crie a interface `Fighter`

Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Para fixar bem esse conceito, preparamos para você a missão especial de criar a interface `Fighter`, mas não se preocupe! Não deixaremos você dar mais nem um passo sem as informações necessárias para tirar isso de letra! Observe:

- O arquivo deverá ser criado no diretório `src/Fighter`;
- A interface deverá possuir os atributos:
  - `lifePoints`, do tipo `number`;
  - `strength`, do tipo `number`;
  - `defense`, do tipo `number`;
  - `energy`, do tipo `Energy`;
- A interface deverá possuir os métodos:
  - `attack()`;
  - `special()`;
  - `receiveDamage()`;
  - `levelUp()`;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a interface Fighter:
  - A interface `Fighter` existe;
  - A interface `Fighter` pode ser implementada corretamente;
  - A interface `Fighter` possui o atributo `lifePoints`;
  - A interface `Fighter` possui o atributo `strength`;
  - A interface `Fighter` possui o atributo `defense`;
  - A interface `Fighter` possui o método `attack()`, que recebe um `enemy` do tipo `Fighter`;
  - A interface `Fighter` possui o método `special()`, que recebe um `enemy` do tipo `Fighter`
  - A interface `Fighter` possui o método `receiveDamage()`, que recebe um `amount` do tipo number;
  - O atributo `energy` deverá ser do tipo `Energy`, definido no arquivo `src/Energy.ts`;
  - A interface `Fighter` possui o método `levelUp()`, que não recebe parâmetros nem retorna nada;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Warrior`;
</details>

⚠ Atenção: para que os testes funcionem corretamente, a interface `Fighter` deve ser importada no no arquivo `src/Fighter/index.ts` e lá exportada de forma padrão (`export default`). ⚠

### 7 - Crie a classe `Character`

Maravilha! Agora já temos tanto nossas raças quanto nossos arquétipos e interfaces definidos, mas antes de sair por aí entrando em tavernas e calabouços, temos outra _quest_: **criar um personagem**!

Cada personagem será composto tanto por uma raça quanto por um arquétipo. Essa classe reunirá um conjunto de características que terão o poder de fazer deste ser o mais único possível. Além disso, personagens devem possuir tudo o que se espera de alguém que luta.

As dicas para completar essa _quest_ são: 

- O arquivo `Character.ts` deverá ser criado na raiz do diretório `src`;
- A classe implementa a interface `Fighter`;
- A classe `Character` possui uma `Race`, que por padrão deve ser uma instância de `Elf`;
- A classe `Character` possui um `Archetype`, que por padrão deve ser uma instância de `Mage`;
- Utilize a função `getRandomInt`, fornecida no arquivo `src/utils.ts`, para gerar um dinamismo na `receiveDamage`, juntamente com a `dexterity`;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Character:
  - A classe `Character` existe;
  - A classe `Character` implementa a interface `Fighter`;
  - `Character` possui uma `Race`;
  - `Character` possui um `Archetype`;
  - `Character` possui um atributo `lifePoints`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `strength`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `defense`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `energy`, que pode ser lido, mas não pode ser setado nem ter um de seus valores internos alterados;
  - `Character` possui um atributo `dexterity`, que pode ser lido, mas não pode ser setado;
  - `Character` pode subir de nível através do método `levelUp`, e seus atributos (`maxLifePoints`, `strength`, `dexterity`, `defense`) terão um incremento de no mínimo 1 e no máximo 10 pontos, sendo que `lifePoints` nunca poderá ser maior que o `maxLifePoints` da `Race`.
    - Quando isso acontecer, sua vida ficará completamente cheia (`lifePoints` ficará igual ao novo `maxLifePoints`) e sua energia também ficará cheia (`energy.amount` será igual a 10);
  - `Character` pode receber danos através do método `receiveDamage`, de forma que:
    - Seus `lifePoints` terão o valor do parâmetro `amount` decrescido de sua defesa (`defense`), não podendo ser menor que 0;
    - `receiveDamage` retorna os `lifePoints` atuais do `Character`, devendo retornar -1 caso os `lifePoints` tenham chegado a 0;
  - `Character1` pode atacar `Character2`, por exemplo. Neste caso, o `Character2` receberá um dano equivalente ao valor do atributo `strength` do `Character1` decrescido do valor do atributo `defense` do `Character2`;
</details>

⚠ Atenção: Para que os testes funcionem corretamente, a classe `Character` deve ser exportada de forma padrão (`export default`).

### 8 - Crie a interface `SimpleFighter`

Uau, nosso universo de T&D está ficando fabuloso! No entanto, nem todo mundo que luta é possui capacidades avançadas, como ter uma defesa ou realizar ataques especiais.

Dito isto, vamos para mais uma _quest_: **criar a interface lutador simples**

As dicas para completar essa _quest_ são:

- O arquivo deverá ser criado no diretório `src/Fighter`;
- A interface deverá possuir os atributos:
  - `lifePoints`, do tipo `number`;
  - `strength`, do tipo `number`;
- A interface deverá possuir os métodos:
  - `attack()`;
  - `receiveDamage()`;
- Utilize a segregação de interfaces para aproveitar o que já fez na classe `Fighter`

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a interface SimpleFighter:
  - A interface `SimpleFighter` existe;
  - A interface `SimpleFighter` possui o atributo `lifePoints`;
  - A interface `SimpleFighter` possui o atributo `strength`;
  - A interface `SimpleFighter` possui o método `attack`, que recebe um `enemy` do tipo `SimpleFighter`;
  - A interface `SimpleFighter` possui o método `receiveDamage`, que recebe um `amount` do tipo `number`;
</details>

⚠ Atenção: para que os testes funcionem corretamente, a interface `SimpleFighter` deve ser importada no arquivo `src/Fighter/index.ts` e lá exportada. ⚠

### 9 - Crie a classe `Monster`

Se existem seres que implementam a interface `Fighter`, devem existir seres que implementam a `SimpleFighter`, não é? Estes seres são os `Monsters`, que são seres bestiais, que apenas atacam outros seres.

Sua próxima _quest_ é **criar a classe Monster**!

O que você deve saber para seguir em frente:

- O arquivo deverá ser criado na raiz do diretório `src`;
- A classe `Monster` deve implementar a interface `SimpleFighter`:
  - `lifePoints` deve ser privado e possuir o valor 85;
  - `strength` deve ser privado e possuir o valor 63;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Monster:
  - A classe `Monster` existe;
  - A classe `Monster` implementa a interface `SimpleFighter`;
  - `Monster` possui um atributo `lifePoints`, que pode ser lido, mas não pode ser setado;
  - `Monster` possui um atributo `strength`, que pode ser lido, mas não pode ser setado;
  - `Monster` pode receber danos através do método `receiveDamage`, fazendo com que seus `lifePoints` diminuam, o que será refletido no parâmetro `amount`, que deverá retornar -1 caso os `lifePoints` tenham chegado a 0 ou menos;
  - `Monster` pode atacar um `Character`, e o `Character` receberá dano correspondente ao valor do atributo `strength` do `Monster` que ataca decrescido do valor do atributo `defense` do `Character` atacado;
  - `Character` pode atacar um `Monster`, e o `Monster` receberá de dano o valor do atributo `strength` do `Character` que o ataca;
</details>

⚠ Atenção: para que os testes funcionem corretamente, a classe `Monster` deve ser criada no arquivo `src/Monster.ts` e lá exportada de forma padrão (`export default`). ⚠

### 10 - Crie a classe `PVP`

A ideia de o mundo de T&D é completamente pacífico provavelmente já deve ter desaparecido de sua mente depois de suas últimas _quests_. Neste mundo, existem lutas, muitas delas inclusive épicas e por isso, aqui são denominadas `Battles` (batalhas). Sua representação abstrata já foi fornecida anteriormente, entretanto, existem tipos específicos de batalhas. Dentre eles, temos o que chamamos de `PVP`, batalhas entre personagens (ou _player versus player_), que só podem acontecer entre `Fighters`.

Sua _quest_ agora é justamente **criar a classe PVP**, então, você que lute!

Brincadeira! Estamos aqui pra te ajudar e, por isso, aqui vão algumas dicas preciosas para garantir sua vitória neste requisito:

- O arquivo deverá ser criado na raiz do diretório `src/Battle`;
- Faça com que `PVP` herde de `Battle`, classe já disponibilizada em `src/Battle`;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe PVP:
  - A classe `PVP` existe e se pode ser criada uma nova instância, passando dois `Characters`;
  - A classe `PVP` pode ser utilizada onde a classe `Battle` é esperada, e um `Characters` com level bem elevado ganham uma luta contra `Characters` level 0;
  - A classe `PVP` pode receber tanto dois `Characters` quanto duas instâncias de uma implementação diferente de `Fighter`;
</details>

⚠ Atenção: para que os testes funcionem corretamente, a classe `PVP` deve ser importada no arquivo `src/Battle/index.ts` e lá exportada. ⚠

## Requisitos Bônus

### 11 - Criar a classe `PVE`

Nem todas as batalhas são entre personagens (`Character`), afinal, há perigos a solta que espreitam ao escurecer, em densas florestas ou em calabouços profundos. `Monsters` representam alguns dos mais frequentes deles e, assim, temos as batalhas do tipo `PVE`(_player versus environment_), em que `Fighter` pode lutar contra um ou mais `SimpleFighter`.

Parece interessante? Pois tornar isso possível é a sua próxima _quest_.

Antes de prosseguir, leia atentamente as dicas:

- O arquivo deverá ser criado na raiz do diretório `src/Battle`;
- Faça com que `PVE` herde de `Battle`, classe já disponibilizada em `src/Battle`;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe PVE:
  - A classe `PVE` existe e se pode ser criada uma nova instância, passando um `Character` e um array com um `Monster`;
  - A classe `PVE` pode ser utilizada onde a classe `Battle` é esperada, e um `Character` com level bem elevado ganha uma luta contra somente um `Monster`, e um `Character` com level baixo perde numa luta contra diversos `Monsters`;
  - A classe `PVE` pode receber tanto `Character` e um array com um `Monster` quanto implementações diferentes de `Fighter` e `SimpleFighter` que não são `Character` nem `Monster`;
</details>

⚠ Atenção: para que os testes funcionem corretamente, a classe `PVE` deve ser importada no arquivo `src/Battle/index.ts` e lá exportada. ⚠

### 12 - Crie a classe `Dragon`

Seria muito estranho se este mundo se chamasse Car Shop e não existissem `Dragons`, não é mesmo?
Estes seres magníficos aqui são representados como `Monsters`, mas com a característica especial de possuírem elevados valores de pontos de vida.

Nesta _quest_, você deve **criar a classe `Dragon`**, cuidando para garantir que:

- O arquivo em que será feita a implementação deverá ser `src/Dragon.ts`;
- `Dragon` herde de `Monster`, que você já deve ter criado;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Dragon:
  - A classe `Dragon` existe;
  - A classe `Dragon` herda de `Monster`;
  - `Dragon` deve ter 999 no valor do atributo `lifePoints`;
</details>

⚠ Atenção: para que os testes funcionem corretamente, a classe `Dragon` deve ser criada no arquivo `src/Dragon.ts` e lá exportada de forma padrão (`export default`). ⚠

### 13 - Crie objetos no arquivo `index`

Você já modelou todo o mundo de T&D, maravilha!
Agora repare que, por mais que a gente saiba o que são `Monster`, `Character`, `Dragon`, `PVE`, etc, nenhum desses foi visto na prática.
Sua última _quest_ para completar essa aventura é criar algumas instâncias das classes criadas anteriormente.

Algumas dicas se fazem necessárias para completar essa missão e elas são:

- O arquivo que deverá ser criado é o `src/index.ts`;
- Crie 3 objetos do tipo `Character` e os exporte no arquivo `index` como `player1`, `player2` e `player3`; Rode o método `levelUp` algumas vezes no `player1`;
- Crie 2 objetos do tipo `Monster`, sendo o segundo um `Dragon`, e os exporte no arquivo index como `monster1`, `monster2`;
- Crie um objeto do tipo `PVP` (com os `Characters` `player2` e `player3`) e o exporte no arquivo index como `pvp`; *NÃO* execute o método `pvp.fight`;
- Crie um objeto do tipo `PVE` (com o `Character` `player1` e com os `Monsters` `monster1` e `monster2`) e o exporte no arquivo `index` como `pve`; *NÃO* execute o método `pve.fight`;
- Crie uma função chamada `runBattles`, que recebe um `array de Battles` e chama em seu interior o método `battle.fight`;

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a criação de objetos no arquivo index:
  - Existem 3 objetos do tipo `Character` no arquivo `index`, exportados como `player1`, `player2` e `player3` e o método `levelUp` foi chamado algumas vezes em `player1`
  - Existem 2 objetos do tipo `Monster` no arquivo `index`, exportados como `monster1`, `monster2`, sendo que o objeto `monster2` é um `Dragon`;
  - Existe um objeto do tipo `PVP` (com os `Characters` `player2` e `player3`), exportados no arquivo index como `pvp` e nele *NÃO* foi executado o método `pvp.fight`;
  - Existe um objeto do tipo `PVE` (com o `Character` `player1` e com os `Monsters` `monster1` e `monster2`), exportado no arquivo `index` como `pve` e nele *NÃO* foi executado o método `pve.fight`;
  - Existe uma função chamada `runBattles`, que recebe um `array de Battles` e chama em seu interior o método `battle.fight`;
</details>

⚠ Atenção: para que os testes funcionem corretamente, os objetos criados em `src/index.ts` devem ser exportados com os nomes indicados na seção `o que será verificado`. ⚠

---

## Depois de terminar o desenvolvimento (opcional)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

# Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV

---

# Avisos finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no _README_. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?
