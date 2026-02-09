# 🛸 Rick and Morty Explorer - Tech Challenge

Este projeto é uma aplicação de listagem e filtragem de personagens da API Rick and Morty, desenvolvida com foco em **performance**, **escalabilidade** e **experiência do usuário (UX)**.

## 🚀 Tecnologias Core

- **Next.js 14/15 (App Router)**: Framework React para roteamento e otimização.
- **TanStack Query (v5)**: Gestão de estado assíncrono e cache inteligente.
- **TypeScript**: Tipagem estática para maior segurança e manutenibilidade.
- **Tailwind CSS**: Estilização rápida e responsiva.
- **Lucide React**: Biblioteca de ícones leve.
- **Use-Debounce**: Otimização de requisições no input de busca.

---

## 🏛️ Arquitetura e Decisões Técnicas

A estrutura do projeto foi pensada para separar responsabilidades e facilitar testes:

* **`services/`**: Camada de acesso a dados (Data Access Layer). Concentra as chamadas de API.
* **`hooks/`**: Encapsulamento da lógica de negócios e estado do TanStack Query. Isso isola a UI da lógica de busca.
* **`components/`**: Componentes de interface. Foco em componentes burros (apresentação) e componentes inteligentes (composição).
* **`types/`**: Definições globais de interfaces para consistência em toda a aplicação.

### Performance e UX
1.  **Debounced Search**: Evita o "flood" de requisições na API enquanto o usuário digita.
2.  **Placeholder Data**: Mantém os dados da página anterior visíveis enquanto a próxima carrega, evitando o layout shift e telas brancas de loading.
3.  **Cache Inteligente**: Configuração de `staleTime` para evitar chamadas duplicadas ao navegar entre filtros e páginas já visitadas.
4.  **Acessibilidade**: Uso de tags semânticas e estados de `disabled` em botões de navegação.

---

## 🛠️ Como rodar o projeto

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/seu-usuario/nome-do-repo.git)
    ```

2.  **Instalar dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Executar em modo desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  **Acessar no navegador:**
    [http://localhost:3000](http://localhost:3000)

---

## 📈 Possíveis Melhorias (Roadmap Sênior)

Como este é um MVP para teste técnico, algumas funcionalidades futuras poderiam incluir:
- [ ] **Prefetching**: Carregar a próxima página silenciosamente quando o usuário passar o mouse no botão "Next".
- [ ] **Testes Unitários/E2E**: Implementar Jest + React Testing Library ou Playwright.
- [ ] **Filtros Avançados**: Adicionar filtros por Status (Vivo/Morto) e Gênero via URL (Search Params).
- [ ] **Persistência de Estado**: Sincronizar os filtros com a URL para permitir compartilhamento de links.

---
Desenvolvido por [Seu Nome] - 2026 👽