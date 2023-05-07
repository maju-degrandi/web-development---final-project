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

## Descrição do projeto
O projeto, de maneira geral, consiste na criação de uma plataforma de vendas on-line para quaisquer produtos ou serviços. A partir desta proposta, e de acordo com as especificações, o grupo 16 pensou em implementar uma loja de plantas - a BELEAF - que possui dois tipos de usuários, o usuário comum, que pode criar uma conta, logar, pesquisar e comprar as plantas no estoque, e o administrador, que gerencia o estoque da loja. Ademais, como toda empresa de vendas, há uma tela de apresentação, com seu nome, valores, estética, produtos mais vendidos, coleções, categorias de produtos e tópicos importantes para que o comprador saiba mais sobre a ela - além de uma página denominada "About us" com informações textuais sobre a loja.

Além disso, o site dá ao usuário (de ambos os tipos) a possibilidade de navegar por listas de produtos, separados por categorias, expandir produtos a fim de ver mais detalhes e a foto maior, selecionar um produto e sua quantidade e adicionar ao carrinho de compras, e navegar pelo site através do header e do footer mostrados na tela.

## Funcionalidades
  • Visualização dos produtos do site - Cliente e Admin.
  • Cadastro, alteração, login de usuário - feito pelos clientes.
  • Cadastro de produtos - feito pelo Admin.
  • Alteração de dados dos produtos - feito pelo Admin.
  • Adição de produto no carrinho - feito pelo Cliente.
  • Compra de produtos no carrinho - feito pelo Cliente.
  • Visualização do histórico de compras - feito pelo Cliente.

## Dados que serão armazenados
  • Usuário: Email, nome, data_nascimento, endereço(CEP, rua, número, complemento - opcional), tipo(físico, jurídico), CPF (só físico), CNPJ (só jurídico), senha.
  • Produto: Nome, categoria, preço, quantidade_de_agua, quantidade_de_luz.
  • Categorias: Nome (succulents, flowers, fruit_trees, climbing_plants).
  • Item_compra: Compra, Produto, quantidade.
  • Compra: Usuário, Itens_compra, preco_total.

## Protótipos e design
Encontram-se na pasta "prototipos".

## Diagramas 
Os diagramas para usuário cliente e usuário administrador podem ser conferidos abaixo, além de estarem armazenados na pasta "flowcharts" em maior qualidade.
![CLIENT](https://user-images.githubusercontent.com/82612544/236633960-7aec3cb3-2ad6-4a60-b1cb-dba3cb814b8a.png)
![USER](https://user-images.githubusercontent.com/82612544/236633966-ba5cd309-04d6-4b73-b9c5-831fb1b5bc94.png)

## Comentários sobre o código

## Plano de teste

## Resultados dos testes

## Procedimentos de construção

## Problemas

## Comentários adicionais


## Sobre:
### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Milestone 1
- [ ] Milestone 2
- [ ] Milestone 3

### 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `node.js`
* Você tem uma máquina `Windows`, `Linux` ou `Mac`.

### 🚀 Instalando Beleaf

Para instalar o Beleaf, siga estas etapas:

Linux, Windows e macOS:
```
<comando_de_instalação>
```

### ☕ Usando Beleaf

Para usar Beleaf, siga estas etapas:

```
<exemplo_de_uso>
```

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
