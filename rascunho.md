Crie a interface Carro
Crie a interface Model
Pode ou não ter a classe abstrata MongoModel
Crie a classe Carro que implementa Model
Crie a interface Service
Crie a classe Carro que implementa Service
Crie a interface Controller
Crie a classe Carro que implementa Controller
Testar create do Model
Testar read do Model
...
Testar create do Service
Testar create do Controller
...
Teste de integração, checando validações
---
# Requisitos:
- Criar a conexão com o Mongo (mongoose);
1 - Criar interface Model genérica
  - Criar Model interface
  - Criar Classe Abstrata MongoModel implementando Model interface
  - Implementar os métodos do CRUD
  - Verificações:
    - Verificar tipagens da interface Model
    - Verificar tipagens dos métodos do CRUD
2 - Criar Interface Veículo genérica
  - Atributos da interface:
    - Marca / Modelo: string
    - Ano: number
    - Cor: string
    - Status: boolean
    - Data da compra: Date
    - Valor da compra: number
    <!-- - Tipo: "Carro", "Moto", "Caminhão" -->
  - Métodos da interface:
    - Cálculo do valor da venda (ano, data compra, valor compra)
  - Verificações:
    - Verificar tipagens da interface Veículo
    - Verificar métodos da interface Veículo
3 - Criar Tipo Carro a partir da interface Veículo
  - Adiciona atributos carro:
    - Qtd portas
    - Qtd lugares
  - Criar interface CarroDocument extendendo Tipo Carro, Document (mongoose) e Interface Veículo
4 - Criar Tipo Moto a partir da interface Veículo
  - Adiciona atributos Moto:
    - Tipo
    - Cilindradas
  - Criar interface MotoDocument extendendo Tipo Moto, Document (mongoose) e Interface Veículo
5 - Criar Tipo Caminhao a partir da interface Veículo
  - Adiciona atributos Caminhao:
    - Qtd eixos
    - Categoria
  - Criar interface CaminhaoDocument extendendo Tipo Caminhao, Document (mongoose) e Interface Veículo
6 - Criar Model Veículo
  - Cria class DealershipModel implements model <Veículo>