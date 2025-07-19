# NLW Agents

Aplicação web desenvolvida durante o NLW (Next Level Week) da Rocketseat, focada em criar e gerenciar salas de perguntas e respostas.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento da aplicação
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **TanStack Query** - Gerenciamento de estado do servidor
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Day.js** - Manipulação de datas
- **Biome** - Linter e formatter

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── http/          # Hooks e tipos para requisições HTTP
├── lib/           # Utilitários e configurações
└── app.tsx        # Componente principal
```

## 🛠️ Padrões de Projeto

- **Componentes Funcionais** com hooks
- **TypeScript** para tipagem estática
- **React Query** para cache e sincronização de dados
- **React Hook Form** com validação Zod
- **Tailwind CSS** para estilização
- **Path aliases** (@/ para src/)
- **Componentes acessíveis** com Radix UI

## ⚡ Setup e Configuração

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nlw-agents/web
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

## 🎯 Funcionalidades

- Criação de salas de perguntas
- Listagem de salas existentes
- Sistema de perguntas e respostas
- Interface responsiva e acessível
