# API de Blogs
<p>Um pequeno projeto que simula a API e Banco de Dados de um blog. Foi desenvolvido um CRUD básico que permite a manipulação dos posts do blog e uma DB para armazenar os posts e os usuários.<p>
 Tecnologias utilizadas:

<li>Node.js | Express.
<li>ORM Sequelize para criar e manipular o DB.
<li>JWT p/ autenticação.
<li>Uma API Rest que conta com a Arquitetura MSC (Model, Service e Controller). 



<p>A parte mais desafiante do projeto foi criar a rota de criação de um novo post. Isso acarretou a necessidade de user o Sequelize de forma a não so adicionar um novo post, mas também vinculá-lo as categorias na tabela de PostCategories. A lógica e sintaxe necessárias foi desafiante, mas descobri em primeira mão uma parte do poder do Sequelize. Essa ferramente pode ser vista como desnecessária em um proejto tão pequeno, mas seu potencial em lidar com grandes DB está claro. <p>
