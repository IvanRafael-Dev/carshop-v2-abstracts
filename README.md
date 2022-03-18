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
    - [01 - Crie a interface `Model` genérica](#01---crie-a-interface-model-genérica)
    - [02 - Crie a interface `Vehicle`](#02---crie-a-interface-vehicle)
    - [03 - Crie o tipo `Car` a partir da interface `Vehicle`](#03---crie-o-tipo-car-a-partir-da-interface-vehicle)
    - [04 - Crie uma rota para o endpoint `/cars` onde seja possível cadastrar um novo carro](#04---crie-uma-rota-para-o-endpoint-cars-onde-seja-possível-cadastrar-um-novo-carro)
    - [05 - Crie uma rota para o endpoint `/cars` onde seja possível listar todos os carros registrados](#05---crie-uma-rota-para-o-endpoint-cars-onde-seja-possível-listar-todos-os-carros-registrados)
    - [06 - Crie uma rota para o endpoint `/cars/id` onde seja possível listar um único carro através do seu id](#06---crie-uma-rota-para-o-endpoint-carsid-onde-seja-possível-listar-um-único-carro-através-do-seu-id)
    - [07 - Crie uma rota para o endpoint `/cars/id`, onde é possível atualizar o registro de um carro através do seu id](#07---crie-uma-rota-para-o-endpoint-carsid-onde-é-possível-atualizar-o-registro-de-um-carro-através-do-seu-id)
    - [08 - Crie uma rota para o endpoint `/cars/id` para excluir os registros de um carro](#08---crie-uma-rota-para-o-endpoint-carsid-para-excluir-os-registros-de-um-carro)
    - [09 - Escreva testes para cobrir 15% da camada de model](#09---escreva-testes-para-cobrir-15-da-camada-de-model)
    - [10 - Escreva testes para cobrir 15% da camada de service](#10---escreva-testes-para-cobrir-15-da-camada-de-service)
    - [11 - Escreva testes para cobrir 15% da camada de controller](#11---escreva-testes-para-cobrir-15-da-camada-de-controller)
    - [12 - Escreva testes para cobrir 30% da camada de model](#12---escreva-testes-para-cobrir-30-da-camada-de-model)
    - [13 - Escreva testes para cobrir 30% da camada de service](#13---escreva-testes-para-cobrir-30-da-camada-de-service)
    - [14 - Escreva testes para cobrir 30% da camada de controller](#14---escreva-testes-para-cobrir-30-da-camada-de-controller)
    - [15 - Escreva testes para cobrir 60% da camada de model](#15---escreva-testes-para-cobrir-60-da-camada-de-model)
    - [16 - Escreva testes para cobrir 60% da camada de service](#16---escreva-testes-para-cobrir-60-da-camada-de-service)
    - [17 - Escreva testes para cobrir 60% da camada de controller](#17---escreva-testes-para-cobrir-60-da-camada-de-controller)
  - [Requisitos Bônus](#requisitos-bônus)
    - [18 - Crie o tipo `Motorcycle` a partir da interface `Vehicle`](#18---crie-o-tipo-motorcycle-a-partir-da-interface-vehicle)
    - [19 - Crie uma rota para o endpoint `/motorcycles` onde seja possível cadastrar uma nova moto](#19---crie-uma-rota-para-o-endpoint-motorcycles-onde-seja-possível-cadastrar-uma-nova-moto)
    - [20 - Crie uma rota para o endpoint `/motorcycles` onde seja possível listar todas as motos registradas](#20---crie-uma-rota-para-o-endpoint-motorcycles-onde-seja-possível-listar-todas-as-motos-registradas)
    - [21 - Crie uma rota para o endpoint `/motorcycles/id` onde seja possível listar uma única moto através do seu id](#21---crie-uma-rota-para-o-endpoint-motorcyclesid-onde-seja-possível-listar-uma-única-moto-através-do-seu-id)
    - [22 - Crie uma rota para o endpoint `/motorcycles/id`, onde é possível atualizar o registro de uma moto através do seu id](#22---crie-uma-rota-para-o-endpoint-motorcyclesid-onde-é-possível-atualizar-o-registro-de-uma-moto-através-do-seu-id)
    - [23 - Crie uma rota para o endpoint `/motorcycles/id` para excluir os registros de uma moto](#23---crie-uma-rota-para-o-endpoint-motorcyclesid-para-excluir-os-registros-de-uma-moto)
    - [24 - Escreva testes para cobrir 100% da camada de controller](#24---escreva-testes-para-cobrir-100-da-camada-de-controller)
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

### 01 - Crie a interface `Model` genérica

Crie a interface `Model`, que será usada para fazermos nossa conexão com o banco de dados.
Ela deverá ter, pelo menos, as funções `create()`, `read()`, `readOne()`, `update()` e `delete()`.
Por ser genérica, nossa interface deverá receber um tipo `T` qualquer, e ela deve esperar, em cada função, as seguintes especificações:
 - `create()`: Deve receber um objeto do tipo `T`e retornar uma Promise do tipo `T`.
 - `read()`: Deve retornar uma Promise contendo um array de objetos do tipo `T`.
 - `readOne()`: Deve receber uma string e retornar uma Promise do tipo `T` ou nula.
 - `update()`: Deve receber uma string e um objeto do tipo `T` e retornar uma Promise do tipo `T` ou nula.
 - `delete()`: Deve receber uma string e retornar uma Promise do tipo `T` ou nula.

Além disso, será verificado que:
 - Existe a interface Model;
 - A interface Model possui todas as funções solicitadas;
 - A interface Model pode ser implementada com qualquer tipo;

### 02 - Crie a interface `Vehicle`

Crie a interface `Vehicle`, que será usada para criarmos nossos tipos de carro, moto e caminhão.
Ela deverá ter todos os atributos comuns de todos os veículos que listaremos aqui. São eles:
 - `model`: Marca e/ou modelo do veículo. Deve ser uma string com, pelo menos, 3 caracteres;
 - `year`: Ano de fabricação do veículo. Deve ser maior ou igual a 1900, porém menor ou igual a 2022;
 - `color`: Cor principal do veículo. Deve ser uma string com, pelo menos, 3 caracteres;
 - `status`: Status que define se um veículo pode ou não ser comprado. Deve receber valores booleanos;
 - `buyValue`: Valor de compra do veículo. Deve receber apenas números inteiros;

 Além disso, será verificado que:
  - A interface Vehicle existe;
  - A interface possui os atributos solicitados;

### 03 - Crie o tipo `Car` a partir da interface `Vehicle`

Crie o tipo `Car`, de modo que ele possua todos os atributos da interface `Vehicle` e, também, os atributos:
 - `doorsQty`: Quantidade de portas de um carro. Deve ser maior ou igual a 2 e menor ou igual a 4;
 - `seatsQty`: Quantidade de assentos disponíveis no carro. Deve ser maior ou igual a 2 e menor ou igual a 7;

 Além disso, será verificado que:
 - O tipo `Car` estende a interface `Vehicle`;
 - É possível criar um objeto do tipo `Car`;
 - O tipo `Car` possui as propriedades `doorsQty` e `seatsQty`;

### 04 - Crie uma rota para o endpoint `/cars` onde seja possível cadastrar um novo carro

Crie uma rota que receba uma requisição `POST` para cadastrar um veículo do tipo carro. Será verificado que:
 - A rota retorna erro `400` caso a requisição receba um objeto vazio;
 - A rota retorna erro `400` ao tentar criar um carro com quantidade de assentos inferior a 2;
 - A rota retorna erro `400` ao tentar criar um carro com quantidade de portas inferior a 2;
 - A rota retorna erro `400` ao tentar criar um carro sem `model`, `year`, `color`, `status` e `buyValue`;
 - A rota retorna erro `400` ao tentar criar um carro sem `doorsQty` e `seatsQty`;
 - Não é possível criar um carro se os atributos estiverem com tipos errados;
 - É possível criar um carro se todos os parametros forem passados corretamente;

### 05 - Crie uma rota para o endpoint `/cars` onde seja possível listar todos os carros registrados

Crie uma rota que receba uma requisição `GET` para receber todos os veículos do tipo carro registrados no banco de dados. Será verificado que:
 - É possível listar os carros com sucesso;
 - Retorna uma lista vazia se não houver carros;

### 06 - Crie uma rota para o endpoint `/cars/id` onde seja possível listar um único carro através do seu id

Crie uma rota que receba uma requisição `GET` para receber determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota. Será verificado que:
 - É possível listar um carro com sucesso através do id;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;

### 07 - Crie uma rota para o endpoint `/cars/id`, onde é possível atualizar o registro de um carro através do seu id

Crie uma rota que receba uma requisição `PUT` para atualizar determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota. Será verificado que:
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - É disparado o erro `400` caso o `body` esteja incompleto;
 - Será verificado que um carro é atualizado com sucesso;

### 08 - Crie uma rota para o endpoint `/cars/id` para excluir os registros de um carro

Crie uma rota que receba uma requisição `DELETE` para excluirr determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota. Será verificado que:
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - Será verificado que um carro é removido com sucesso;

### 09 - Escreva testes para cobrir 15% da camada de model

Escreva testes que cubram, pelo menos, 15% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 15%;

### 10 - Escreva testes para cobrir 15% da camada de service

Escreva testes que cubram, pelo menos, 15% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 15%;

### 11 - Escreva testes para cobrir 15% da camada de controller

Escreva testes que cubram, pelo menos, 15% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 15%;

### 12 - Escreva testes para cobrir 30% da camada de model

Escreva testes que cubram, pelo menos, 30% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 30%;

### 13 - Escreva testes para cobrir 30% da camada de service

Escreva testes que cubram, pelo menos, 30% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 30%;

### 14 - Escreva testes para cobrir 30% da camada de controller

Escreva testes que cubram, pelo menos, 30% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 30%;

### 15 - Escreva testes para cobrir 60% da camada de model

Escreva testes que cubram, pelo menos, 60% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 60%;

### 16 - Escreva testes para cobrir 60% da camada de service

Escreva testes que cubram, pelo menos, 60% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 60%;

### 17 - Escreva testes para cobrir 60% da camada de controller

Escreva testes que cubram, pelo menos, 60% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 60%;

## Requisitos Bônus

### 18 - Crie o tipo `Motorcycle` a partir da interface `Vehicle`

Crie o tipo `Motorcycle`, de modo que ele possua todos os atributos da interface `Vehicle` e, também, os atributos:
 - `category`: Categoria da moto. Deve poder ser **apenas** `Street`, `Custom` ou `Trail`;
 - `engineCapacity`: A capacidade do motor. Deve ser um valor inteiro positivo menor ou igual a 2500;

 Além disso, será verificado que:
 - O tipo `Motorcycle` estende a interface `Vehicle`;
 - É possível criar um objeto do tipo `Motorcycle`;
 - O tipo `Motorcycle` possui as propriedades `category` e `engineCapacity`;
 - Não é possível criar um objeto do tipo `Motorcycle` com uma categoria errada;

### 19 - Crie uma rota para o endpoint `/motorcycles` onde seja possível cadastrar uma nova moto

Crie uma rota que receba uma requisição `POST` para cadastrar um veículo do tipo moto. Será verificado que:
 - A rota retorna erro `400` caso a requisição receba um objeto vazio;
 - A rota retorna erro `400` ao tentar criar uma moto com `category` diferente de `Street`, `Custom` ou `Trail`;
 - A rota retorna erro `400` ao tentar criar uma moto com `category` diferente de `string`;
 - A rota retorna erro `400` ao tentar criar uma moto com `engineCapacity` menor ou igual a zero;
 - A rota retorna erro `400` ao tentar criar uma moto com `engineCapacity` maior que 2500;
 - A rota retorna erro `400` ao tentar criar um moto sem `model`, `year`, `color` e `buyValue`;
 - A rota retorna erro `400` ao tentar criar um moto sem `category` e `engineCapacity`;
 - Não é possível criar uma moto se os atributos estiverem com tipos errados;
 - É possível criar uma moto se todos os parametros forem passados corretamente;

### 20 - Crie uma rota para o endpoint `/motorcycles` onde seja possível listar todas as motos registradas

Crie uma rota que receba uma requisição `GET` para receber todos os veículos do tipo moto registrados no banco de dados. Será verificado que:
 - É possível listar as motos com sucesso;
 - Retorna uma lista vazia se não houver motos;

### 21 - Crie uma rota para o endpoint `/motorcycles/id` onde seja possível listar uma única moto através do seu id

Crie uma rota que receba uma requisição `GET` para receber determinado veículo do tipo moto que possua o `id` passado como parâmetro na rota. Será verificado que:
 - É possível listar uma moto com sucesso através do id;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;

### 22 - Crie uma rota para o endpoint `/motorcycles/id`, onde é possível atualizar o registro de uma moto através do seu id

Crie uma rota que receba uma requisição `PUT` para atualizar determinado veículo do tipo moto que possua o `id` passado como parâmetro na rota. Será verificado que:
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - É disparado o erro `400` caso o `body` esteja incompleto;
 - Será verificado que uma moto é atualizada com sucesso;

### 23 - Crie uma rota para o endpoint `/motorcycles/id` para excluir os registros de uma moto

Crie uma rota que receba uma requisição `DELETE` para excluirr determinado veículo do tipo moto que possua o `id` passado como parâmetro na rota. Será verificado que:
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - Será verificado que uma moto é removida com sucesso;

### 24 - Escreva testes para cobrir 100% da camada de controller

Escreva testes que cubram 100% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`. Além disso, será verificado que:
 - Será validado que cobertura total das linhas dos arquivos na pasta `controllers` é igual a 100%;

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
