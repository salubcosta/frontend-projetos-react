# Atividades por Projetos

Aplicação React para gerenciamento de atividades organizadas por projetos e categorias.

## Descrição

O sistema permite cadastrar **categorias**, **projetos** (vinculados a categorias) e **atividades** (vinculadas a projetos), com operações completas de criação, edição e exclusão. Os dados são carregados a partir de um arquivo JSON local (simulando chamadas a um servidor).

## Tecnologias

- React 19
- React Router DOM v7
- JavaScript
- CSS por componente

## Funcionalidades

- **Categorias** — listar, adicionar, editar e excluir. Proteção contra exclusão de categoria em uso por algum projeto.
- **Projetos** — listar com filtro por categoria, adicionar, editar e excluir. Proteção contra exclusão de projeto que possui atividades. Clique em um projeto navega para o detalhe.
- **Atividades** — gerenciadas dentro do detalhe de cada projeto; permite adicionar, editar e excluir atividades vinculadas ao projeto.
- **Navegação integrada** — ao clicar em "Ver projetos" em uma categoria, a página de Projetos abre já filtrada por aquela categoria (via `useNavigate` / `state`). Ao criar um projeto sem categoria cadastrada, há atalho direto para criar uma.
- **Alertas temporários** — feedback visual (sucesso, aviso, erro) com auto-dismiss em 3 segundos.
- **Estado vazio** — componente `ListaVazia` exibido quando não há itens na lista.

## Estrutura de Pastas

```
frontend-projetos/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── outros arquivos gerados na criação do projeto react
├── src/
│   ├── App.js               # Raiz: estado global e handlers CRUD
│   ├── App.css
│   ├── index.js
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho com título e navegação
│   │   ├── Header.css
│   │   ├── Navigation.jsx   # Links de navegação com link ativo
│   │   ├── Navigation.css
│   │   ├── Card.jsx         # Card reutilizável (título, subtítulo, rodapé)
│   │   ├── Card.css
│   │   ├── Alert.jsx        # Alerta de feedback (sucesso / aviso / erro)
│   │   ├── Alert.css
│   │   ├── PageHeader.jsx   # Cabeçalho de página (título + subtítulo + ação)
│   │   ├── ListaVazia.jsx   # Mensagem quando a lista está vazia
│   │   └── Rodape.jsx       # Rodapé da aplicação
│   ├── data/
│   │   └── dados.json       # Dados iniciais (categorias, projetos, atividades)
│   ├── pages/
│   │   ├── Home.jsx         # Página hoje com resumo de categorias, projetos e atividades
│   │   ├── Home.css
│   │   ├── Categorias.jsx   # CRUD de categorias
│   │   ├── Projetos.jsx     # CRUD de projetos com filtro por categoria
│   │   ├── ProjetoDetalhe.jsx # Detalhe do projeto + CRUD de atividades
│   │   ├── NotFound.jsx     # Página 404
│   │   ├── NotFound.css
│   │   └── Style.css        # Estilos compartilhados entre páginas
│   └── routes/
│       └── AppRoutes.jsx    # Definição centralizada de rotas
├── package.json
└── .gitignore
```

## Rotas

| Rota            | Páginas           | Descrição                                      |
|-----------------|-------------------|------------------------------------------------|
| `/`             | `Home`            | Resumo de categorias, projetos e atividades    |
| `/categorias`   | `Categorias`      | Listagem e CRUD de categorias                  |
| `/projetos`     | `Projetos`        | Listagem e CRUD de projetos (com filtro)       |
| `/projetos/:id` | `ProjetoDetalhe`  | Detalhe de um projeto e CRUD de atividades     |
| `*`             | `NotFound`        | Página 404 para rotas não mapeadas             |

## Estrutura de Dados (`dados.json`)

```json
{
  "categorias":  [{ "id": 1, "nome": "Desenvolvimento" }],
  "projetos":    [{ "id": 1, "nome": "Site Institucional", "descricao": "...", "categoria": { "id": 1, "nome": "Desenvolvimento" } }],
  "atividades":  [{ "id": 1, "descricao": "Levantamento de requisitos", "data": "2025-01-10T10:00:00", "projeto": { "id": 1, "nome": "Site Institucional" } }]
}
```

## Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) v20 ou superior
- npm (incluso com Node.js)

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/salubcosta/frontend-projetos-react.git
cd frontend-projetos-react

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```
A aplicação estará disponível em `http://localhost:3000`.
