# Exemplo de Routing e Forms com Angular

## Funcionamento

Abaixo, podemos ver o roteamento funcionando (é possível escolher entre a aba "Informações" e "Inscreva-se"). Além disso, na aba "Inscreva-se", foi usado o componente forms do Angular para simular o cadastro em um site.
![](assets/ex7.gif)

## Comparação com React

### Angular:

#### 1. **Estrutura do Projeto:**
   - O Angular utiliza uma estrutura de projeto baseada em módulos, com arquivos separados para componentes, serviços, módulos de roteamento, etc.

#### 2. **Criação de Componentes:**
   - Os componentes são criados usando o Angular CLI, que gera automaticamente arquivos para o componente, como HTML, CSS e TypeScript.

#### 3. **Roteamento:**
   - O Angular possui um sistema de roteamento integrado. O módulo de roteamento (`AppRoutingModule`) é usado para definir as rotas e conectar os componentes correspondentes.

#### 4. **Formulários:**
   - O Angular tem um módulo de formulários reativos e model-driven, que oferece uma maneira poderosa de lidar com formulários.

### React:

#### 1. **Estrutura do Projeto:**
   - O React permite uma flexibilidade maior na estrutura do projeto. Pode ser organizado de acordo com as preferências do desenvolvedor ou seguindo convenções de pastas populares como "src/components", "src/pages", etc.

#### 2. **Criação de Componentes:**
   - Os componentes React são criados como funções ou classes. Os arquivos JSX (JavaScript XML) contêm tanto a lógica quanto a marcação do componente.

#### 3. **Roteamento:**
   - Para roteamento em React, bibliotecas de terceiros como React Router são frequentemente utilizadas. Isso envolve a criação de um componente de roteamento principal e a definição de rotas para componentes específicos.

#### 4. **Formulários:**
   - O React não possui um módulo de formulários integrado como o Angular. Os formulários são tratados utilizando o estado do componente e manipuladores de eventos.