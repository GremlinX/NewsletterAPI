# NewsletterAPI (ENGLISH)

## Description
This project aims to create a newsletter application using the Spring Boot framework. Through the “https://worldnewsapi.com” API, the application will collect news from various sources and present them on a web page. Additionally, the project will serve as a training environment to enhance my Java and Spring Boot skills.
### Built with
<img src="https://skillicons.dev/icons?i=react,spring"/>

## Frontend
### Visual
* Consists of a section where the user will fill out a form with a free-text field, a selection field for the search source, a button to send the request to the server, and two radio buttons to toggle between displaying all news or paginated view (one at a time).
### Services
* Upon project initialization, the loaded news is obtained from the `fakeData.js` file (data retrieved from the API itself, for testing purposes only).
* There are two ways to request news:
* With search text and a chosen source.
* With search text without a specified source.

## Backend
### Configuration
* To allow communication between the frontend and backend, CORS was configured in Spring Boot, specifying that HTTP requests from the frontend are accepted.

### Controller
* Consists of three endpoints:
*`getNews`: Makes a request to the API based on search parameters and any available source.
*`getNewsWithSource`: Makes a request to the API based on search parameters and the defined source.
*`obterItem` (unfinished): API responses will be returned in a paginated format. (For testing, try: localhost:8080/api/news/dollar/nytimes.com?page=2)

### DTO
* `NewsItemDTO: Contains some properties from the API’s JSON response.
* `NewsPropertiesDTO`: (to be implemented)

### Services
* Essential services to make the web application possible. Utilizes functions to convert data, make requests, and construct the API URL.

## To-do:
### Features:
* Save specific news items.

### Bug fixes:
* Pagination should not retrieve all data at once; it should send data only when the user performs the page change action. (Performance)

### Miscellaneous:
* Improve code structure and reduce redundancies.
* Adjust CSS.
* Ensure accessibility (NVDA)

# NewsletterAPI (PORTUGUÊS - BR)

## Description
Este projeto tem como objetivo criar uma aplicação de newsletter usando o framework Spring Boot. Através da API "https://worldnewsapi.com", a aplicação coletará notícias de várias fontes e as apresentará em uma página da web. Além disso, o projeto servirá como um ambiente de treinamento para aprimorar minhas habilidades em Java e Spring Boot.

### Built with
<img src="https://skillicons.dev/icons?i=react,spring"/>

## Frontend
### Visual
* Consiste de uma seção onde o usuário preencherá um formulario de um campo livre, um campo de seleção da fonte de pesquisa, um botão para enviar a requisição para o servidor e 2 botões tipo radio para que o layout mostre todas as notícias ou paginada (exibindo uma por vez).
### Services
* Ao iniciar o projeto, as notícias carregadas são obitdas da `fakeData.js` (Dados obtidos da própria API / Propósito de teste apenas).
* Há 2 formas de solicitar notícias:
  * Com texto de pesquisa e com fonte escolhida.
  * Com texto de pesquisa e sem fonte escolhida.

## Backend
### Config
* Para permitir a comunicação entre frontend e backend, foi necessário configurar o CORS no springboot, informando que será recebido requisições HTTP do frontend.

### Controller
* Consiste de 3 caminhos
    * `getNews` fará solicitação para API com base no que for solicitado para pesquisa via parâmetro e utilizando qualquer fonte disponível.
    * `getNewsWithSource` fará solicitação para API com base no que for solicitado para pesquisa bem como a fonte definida via parâmetro.
    * `obterItem` (Não finalizada) As respostas da API serão retornadas em formato de paginação. (Para teste exeperimente: localhost:8080/api/news/dollar/nytimes.com?page=2)

### DTO
* `NewsItemDTO` contendo algumas propriedades da resposta em formato JSON da API.
* `NewsPropertiesDTO` (À fazer)

### Services
* Consiste de serviços essenciais para tornar a aplicação web possível. Utiliza funções para converter dados, solicitar requisições e construir a url da API.

## À fazer:

* Features:
  * Salvar notícias específicas.

* Bugfixes:
  * A paginação não deve obter todos os dados de uma vez, deve-se enviar dados apenas quando o usuário executar a ação de troca de página.
 
* Misc:
  * Aprimorar estrutura do código e deminuir redundâncias.
  * Ajustar CSS.
  * Garantir acessibilidade (NVDA)
