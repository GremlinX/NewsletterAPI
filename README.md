# 📬 NewsletterAPI

A bilingual project to collect and display world news using **Spring Boot** and **React**. Built as a learning experience to improve backend and frontend skills, especially in **Java**, **Spring**, and **API integration**.

---

## 🌍 English Version

### 📖 Description

This project is a newsletter-style web application built with Spring Boot and React. It integrates with the [World News API](https://worldnewsapi.com) to fetch current news from various global sources and display them to users. It also serves as a learning platform to improve Java and Spring Boot proficiency.

### 🛠️ Built With
<img src="https://skillicons.dev/icons?i=react,spring"/>

---

### 💻 Frontend

#### 🖼️ UI Features
- A form with:
  - A free-text input for keyword search.
  - A dropdown to select a specific news source.
  - A submit button.
  - Radio buttons to toggle between "All News" and "Paginated View" (one article per page).

#### ⚙️ Services
- On project startup, news data is loaded from `fakeData.js` (mock API data for development/testing).
- Two options for requesting news:
  - With search text and a selected source.
  - With search text only.

---

### 🧩 Backend

#### 🔧 Configuration
- CORS is configured to allow communication between frontend and backend.

#### 🌐 Controllers
- `getNews`: Fetches news using search terms with any available source.
- `getNewsWithSource`: Fetches news using both search terms and a specific source.
- `obterItem` (in progress): Enables paginated API responses.  
  _Example: `localhost:8080/api/news/dollar/nytimes.com?page=2`_

#### 📦 DTOs
- `NewsItemDTO`: Maps relevant fields from the API's JSON response.
- `NewsPropertiesDTO`: *(To be implemented)*

#### 🛎️ Services
Handles:
- Request construction.
- Data conversion.
- External API calls.

---

### ✅ To-do

#### ✨ Features
- Allow users to save specific news items.

#### 🐞 Bug Fixes
- Improve pagination so data is fetched only when the page is changed (performance optimization).

#### 🧹 Miscellaneous
- Refactor and clean up code structure.
- Improve CSS styling.
- Enhance accessibility (e.g., NVDA screen reader support).

---

## 🇧🇷 Versão em Português

### 📖 Descrição

Este projeto é uma aplicação estilo newsletter desenvolvida com Spring Boot e React. Ela se integra com a [World News API](https://worldnewsapi.com) para buscar notícias atuais de várias fontes do mundo e apresentá-las aos usuários. Também serve como um ambiente de aprendizado para aprimorar as habilidades em Java e Spring Boot.

### 🛠️ Feito com
<img src="https://skillicons.dev/icons?i=react,spring"/>

---

### 💻 Frontend

#### 🖼️ Visual
- Um formulário contendo:
  - Campo de texto livre para a busca.
  - Dropdown para escolher uma fonte específica.
  - Botão para enviar a requisição.
  - Botões de rádio para alternar entre "todas as notícias" e "visualização paginada" (uma por página).

#### ⚙️ Serviços
- Ao iniciar o projeto, as notícias são carregadas do arquivo `fakeData.js` (dados simulados da API).
- Duas formas de buscar notícias:
  - Com texto e fonte escolhida.
  - Apenas com texto de busca.

---

### 🧩 Backend

#### 🔧 Configuração
- CORS foi configurado no Spring Boot para permitir requisições do frontend.

#### 🌐 Controladores
- `getNews`: Busca notícias com base no termo pesquisado, de qualquer fonte.
- `getNewsWithSource`: Busca com base no termo e na fonte específica.
- `obterItem` (em desenvolvimento): Suporte a paginação na resposta da API.  
  _Exemplo: `localhost:8080/api/news/dollar/nytimes.com?page=2`_

#### 📦 DTOs
- `NewsItemDTO`: Mapeia os campos necessários da resposta JSON.
- `NewsPropertiesDTO`: *(A ser implementado)*

#### 🛎️ Serviços
Responsáveis por:
- Criar URLs da API.
- Fazer requisições externas.
- Converter os dados.

---

### ✅ A fazer

#### ✨ Funcionalidades
- Permitir salvar notícias específicas.

#### 🐞 Correções
- Corrigir a paginação para que os dados só sejam buscados ao mudar de página.

#### 🧹 Diversos
- Melhorar estrutura e reduzir redundâncias no código.
- Ajustar o CSS.
- Garantir acessibilidade (ex.: leitor de tela NVDA).

---

IMAGES:
![Loading Page](https://github.com/user-attachments/assets/be631294-ea56-490f-9381-33d4fe1cc8f1)

![Displaying News](https://github.com/user-attachments/assets/ce10e3d9-97d0-4db6-8e9a-70ea10691587)

