# BELEAF : together we grow

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

<img src="https://user-images.githubusercontent.com/82612544/234600077-f9ad1c50-9993-46e3-9940-7b80fc1bc8bb.png" alt="cover" height="200px">

> A plant store that connects people with nature and themselves, for a greener world.

## Requerimentos
### Especificados:
* The system must have 2 types of users: Clients and Administrators
* Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.
* Customers are users who access the system to buy products/services.
* The admin record includes, at least: name, id, phone, email.
* Each customer's record includes, at least: name, id, address, phone, email
* Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
* Your store may sell products, services or both (you decide)
* Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
* Group functionality: Todas as plantas têm um indicador de quantidade de luz solar e água necessárias para sua espécie.
(ADENDO: essa funcionalidade depende de um banco de dados e outras coisas que impedem que ela já esteja implementada nessa primeira entrega)
* The system must provide accessibility requirements and provide good usability. The system must be responsive, meaning that it should complete assigned tasks within a reasonable time.
### Coletados pelo grupo:

#### Descrição do projeto
O projeto, de maneira geral, consiste na criação de uma plataforma de vendas on-line para quaisquer produtos ou serviços. A partir desta proposta, e de acordo com as especificações, o grupo 16 pensou em implementar uma loja de plantas - a BELEAF - que possui dois tipos de usuários, o usuário comum, que pode criar uma conta, logar, pesquisar e comprar as plantas no estoque, e o administrador, que gerencia o estoque da loja. Ademais, como toda empresa de vendas, há uma tela de apresentação, com seu nome, valores, estética, produtos mais vendidos, coleções, categorias de produtos e tópicos importantes para que o comprador saiba mais sobre a ela - além de uma página denominada "About us" com informações textuais sobre a loja.

Além disso, o site dá ao usuário (de ambos os tipos) a possibilidade de navegar por listas de produtos, separados por categorias, expandir produtos a fim de ver mais detalhes e a foto maior, selecionar um produto e sua quantidade e adicionar ao carrinho de compras, e navegar pelo site através do header e do footer mostrados na tela.

#### Funcionalidades
* Visualização dos produtos do site - Cliente e Admin.
* Cadastro, alteração, login de usuário - feito pelos clientes.
* Cadastro de produtos - feito pelo Admin.
* Alteração de dados dos produtos - feito pelo Admin.
* Adição de produto no carrinho - feito pelo Cliente.
* Compra de produtos no carrinho - feito pelo Cliente.
* Visualização do histórico de compras - feito pelo Cliente.

#### Dados que serão armazenados
* Usuário: Email, nome, data_nascimento, endereço(CEP, rua, número, complemento - opcional), tipo(físico, jurídico), CPF (só físico), CNPJ (só jurídico), senha.
* Produto: Nome, categoria, preço, quantidade_de_agua, quantidade_de_luz.
* Categorias: Nome (succulents, flowers, fruit_trees, climbing_plants).
* Item_compra: Compra, Produto, quantidade.
* Compra: Usuário, Itens_compra, preco_total.

#### Protótipos e design
Encontram-se na pasta "prototypes".

#### Diagramas 
Os diagramas para usuário cliente e usuário administrador podem ser conferidos abaixo, além de estarem armazenados na pasta "flowcharts" em maior qualidade.
![CLIENT](https://user-images.githubusercontent.com/82612544/236633960-7aec3cb3-2ad6-4a60-b1cb-dba3cb814b8a.png)
![USER](https://user-images.githubusercontent.com/82612544/236633966-ba5cd309-04d6-4b73-b9c5-831fb1b5bc94.png)

#### Comentários sobre o código
Nesta seção, forneceremos alguns comentários e observações sobre o código do projeto.

* Estrutura do Projeto: O projeto segue uma estrutura organizada, com os componentes localizados no diretório src/components, os estilos no diretório src/assets/styles, e os arquivos de configuração no diretório raiz. Isso facilita a localização dos arquivos e a manutenção do código.

* Consistência na Nomenclatura: A nomenclatura dos arquivos e dos componentes é consistente e segue um padrão. Isso contribui para a legibilidade e compreensão do código por parte dos desenvolvedores.

* Separação de Responsabilidades: Os componentes estão bem definidos e seguem o princípio da separação de responsabilidades. Cada componente possui uma única função e é reutilizável em diferentes partes do projeto.

* Lógica de Negócio: É evidente que a lógica de negócio está sendo tratada principalmente nos componentes relacionados ao carrinho de compras, formulário de checkout e autenticação. Esses componentes lidam com a manipulação de dados, validação de entrada e processamento de ações específicas.

* Reatividade: O uso de bibliotecas como Vue.js e Vuex é notável para a criação de uma aplicação reativa. Os componentes respondem corretamente às alterações de estado e as atualizações são refletidas na interface do usuário de forma eficiente.

* Padronização de Estilos: Foi adotado um estilo de codificação consistente em todo o projeto, com identação adequada, uso adequado de espaços em branco e separação lógica das instruções. Isso melhora a legibilidade do código e facilita a colaboração entre os membros da equipe.

* Gerenciamento de Estado: O uso do Vuex para o gerenciamento de estado é uma abordagem recomendada. O armazenamento centralizado ajuda a manter a consistência dos dados em todo o aplicativo e simplifica a lógica de comunicação entre componentes.
## Plano de teste 

### Teste 1: Renderização dos Componentes

**Componentes testados:** NavBar, ProductCard, Cart, CheckoutForm.

**Descrição:** Verificar se os Componentes são renderizados corretamente.

**Passos:**

* Abrir as páginas que contém os Componentes.
* Observar se os Componentes são exibidos corretamente na tela.
* Verificar se os elementos internos dos Componentes estão presentes e corretos.

**Resultado:** Os Componentes são renderizados corretamente, exibindo todos os elementos esperados.

### Teste 2: Interatividade dos Componentes

**Componentes testados:** ProductCard, Cart, CheckoutForm, AuthenticationForm.

**Descrição:** Testar a interatividade dos Componentes ao realizar uma ação específica.

**Passos:**

* Abrir as páginas que contém os Componentes.
* Realizar a ação específica, como clicar em um botão ou preencher um formulário.
* Observar o comportamento dos Componentes em resposta à ação realizada.
* Verificar se os Componentes se comportam conforme o esperado, como exibir uma mensagem de sucesso ou atualizar o estado corretamente.

**Resultado:** Os Componentes interagem corretamente, exibindo o comportamento esperado em resposta à ação realizada.

### Teste 3: Teste de Lógica de Negócios dos Componentes

**Componentes testados:** CheckoutForm, ProductCard, Cart, AuthenticationForm.

**Descrição:** Verificar se a lógica de negócios dos Componentes funcionam corretamente.

**Passos:**

* Configurar um cenário específico para testar a lógica de negócios dos Components.
* Executar as funções ou métodos relacionados à lógica de negócios.
* Verificar se os resultados retornados são os esperados.

**Resultado:** A lógica de negócios dos Componentes funcionam corretamente, retornando os resultados esperados de acordo com o cenário de teste.

### Teste 4: Navegação entre Páginas

**Descrição:** Testar a navegação entre as páginas do projeto.

**Passos:**

* Acessar uma página específica.
* Clicar em um link ou botão que leva a outra página.
* Verificar se a transição entre as páginas ocorre corretamente.
* Observar se a página destino é carregada e exibida corretamente.

**Resultado:** A navegação entre as páginas ocorre corretamente, com a transição suave entre as páginas e a exibição correta do conteúdo da página destino.

### Teste 5: Teste de Requisição de API

**Descrição:** Testar as requisições de API realizadas pelo projeto.

**Passos:**

* Executar uma ação que aciona uma requisição de API.
* Verificar se a requisição é enviada corretamente.
* Observar se a resposta da API é recebida corretamente.
* Verificar se os dados retornados pela API são os esperados.

**Resultado:** As requisições de API são enviadas e recebidas corretamente, com os dados retornados pela API sendo consistentes com o esperado. A manipulação de erros durante a requisição é tratada adequadamente, exibindo mensagens de erro ou tomando as ações apropriadas.

### Teste 6: Teste de Estado e Props dos Componentes

**Componentes testados:** ProductCard, Cart, CheckoutForm, AuthenticationForm.

**Descrição:** Verificar se o gerenciamento de estados e props dos Componentes está correto.

**Passos:**

* Analisar os estados e props esperados dos Componentes.
* Realizar ações ou simular eventos que afetem esses estados e props.
* Verificar se os Componentes atualizam seus estados e props de acordo.
* Observar se os Componentes exibem corretamente as alterações em sua renderização com base nos estados e props.

**Resultado:** Os Componentes gerenciam seus estados e props corretamente, atualizando-os conforme as ações e exibindo a renderização esperada com base nesses estados e props.

## Resultados dos testes
Os testes realizados forneceram uma cobertura adequada das funcionalidades do projeto, verificando a renderização correta dos componentes, a interatividade, a lógica de negócios, a navegação entre páginas, as requisições de API e o gerenciamento de estados e props. Essa bateria de testes foi fundamental para a correção do código e a percepção de erros passados despercebidos durante a implementação.

É importante lembrar que os testes foram realizados manualmente. 

## Procedimentos de construção
### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Milestone 1
- [x] Milestone 2
- [ ] Milestone 3

### 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `node.js`
* Você tem `npm` em sua máquina
* Você tem uma máquina `Windows`, `Linux` ou `Mac`.

### 🚀 Instalando Beleaf

Para instalar o Beleaf, siga estas etapas:

Linux, Windows e macOS:
*Clone este repositório em sua máquina local:
```
git clone https://github.com/maju-degrandi/web-development---final-project.git

```
*Acesse o diretório do projeto:
```
cd web-development---final-project

```
*Instale as dependências do projeto usando o npm:
```
npm install

```

### ☕ Usando Beleaf

Para usar Beleaf, siga estas etapas:

*Após a conclusão da instalação e configuração, você pode executar o projeto usando o seguinte comando:
```
npm run dev
```

## Problemas

## Comentários Adicionais

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://user-images.githubusercontent.com/82612544/234594695-90870a13-1e2b-47ab-918e-f0dcb8c8094f.jpg" width="100px;" alt="Foto da Maria Júlia"/><br>
        <sub>
          <b>Maria Júlia Soares De Grandi</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://user-images.githubusercontent.com/82612544/234595302-87008cef-9889-48c7-8432-e3ca1c8d8340.jpg" width="100px;" alt="Foto da Rebeca"/><br>
        <sub>
          <b>Rebeca Vieira Carvalho</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://user-images.githubusercontent.com/82612544/234594968-118b0834-ffcb-4446-8bf3-e3d9dd9446b9.jpg" width="100px;" alt="Foto do Thierry"/><br>
        <sub>
          <b>Thierry de Souza Araújo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[⬆ Voltar ao topo](#nome-do-projeto)<br>
