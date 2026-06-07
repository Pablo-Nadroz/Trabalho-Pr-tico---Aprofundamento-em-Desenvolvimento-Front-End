# Projeto Angular - Catálogo de Livros

Este projeto é uma aplicação Single Page Application (SPA) desenvolvida em **Angular** para a disciplina de Aprofundamento em Desenvolvimento Front-End. O objetivo principal do trabalho foi construir um catálogo interativo para listagem e cadastro de livros.

## O que foi desenvolvido

A aplicação consiste em dois principais procedimentos:

### 1. Estrutura Base e Listagem (Procedimento 1)
- **Modelos de Dados:** Foram criadas as classes `Livro` e `Editora` para estruturação dos objetos.
- **Controladores (Services):** Criação dos serviços `ControleEditoraService` e `ControleLivrosService` injetáveis via construtor, simulando um banco de dados em memória através de arrays de JSON.
- **Componente de Listagem (`LivroLista`):** Componente responsável por ler o vetor de livros e exibi-los em uma tabela interativa desenhada com **Bootstrap**. Inclui funcionalidade para exclusão de livros pelo código.

### 2. Cadastro e Navegação (Procedimento 2)
- **Roteamento:** Configuração do `AppRoutingModule` e `<router-outlet>` para suportar navegação entre páginas sem recarregar a aplicação.
- **Menu de Navegação:** Uma barra superior responsiva do Bootstrap permite transitar entre a Lista e o formulário de Cadastro.
- **Componente de Cadastro (`LivroDados`):** Formulário completo que utiliza restrições do HTML5 e a diretiva `[(ngModel)]` para Two-Way Data Binding. Transforma o campo de texto dos autores em um array antes de registrar o novo livro através do serviço de controle e redirecionar de volta para a lista.

## Tecnologias Utilizadas
- **Angular 18+** (utilizando a estrutura tradicional com `AppModule`)
- **TypeScript**
- **HTML5 & CSS3**
- **Bootstrap 5.3**

---

## Como Executar o Projeto Localmente

1. Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado.
2. Navegue até o diretório da aplicação Angular:
   ```bash
   cd livros-angular
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run start
   ```
5. Acesse [http://localhost:4200/](http://localhost:4200/) no seu navegador. O aplicativo recarregará automaticamente se você alterar qualquer um dos arquivos de origem.
