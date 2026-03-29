# MyBlog (Reinoldo Sommer)

Blog pessoal estático: **Astro 6**, **React 19** (ilhas para UI interativa), **Tailwind CSS v4** e **Markdown** via content collections. Comentários com Disqus; busca com Algolia (opcional).

## Requisitos

- [Node.js](https://nodejs.org/) **22.12+** (ver `engines` em `package.json`)

## Começar

```bash
npm install
cp .env.example .env   # opcional; necessário para busca Algolia
npm run dev
```

Abre em `http://localhost:4321` (porta padrão do Astro).

## Scripts

| Comando | Descrição |
| -------- | ----------- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site em `dist/` |
| `npm run preview` | Pré-visualiza a build de produção |
| `npm run algolia:index` | Envia posts ao índice Algolia (requer env; ver abaixo) |
| `npm run build:index` | `astro build` + push Algolia (uso local/CI quando a rede estiver OK) |
| `npm run format` | Prettier nos ficheiros do projeto |
| `npm test` | `prettier --check` em `src/` |

## Estrutura (resumo)

| Caminho | Conteúdo |
| -------- | ---------- |
| `src/content/posts/` | Artigos Markdown + frontmatter |
| `src/content.config.ts` | Schema Zod das collections |
| `src/pages/` | Rotas Astro (`index`, `[slug]`, `page/[page]`, `about`, `search`, `404`) |
| `src/layouts/Base.astro` | HTML base, tema claro/escuro, CSS global |
| `src/styles/tailwind.css` | Tailwind + variáveis de tema + estilos de markdown / Algolia |
| `src/components/` | Componentes React (layout, lista, busca, etc.) |
| `src/lib/` | Helpers (`posts`, `slug`, `markdown`) |
| `public/admin/` | Decap CMS (Netlify CMS) |
| `scripts/push-algolia.mjs` | Indexação Algolia a partir dos `.md` |

## Posts

Ficheiros em `src/content/posts/` com nomes no formato `YYYY-MM-DD-slug.md`. O slug público segue a mesma regra de antes (prefixo de data removido na URL), por exemplo `/my-first-ireland-trip/`.

Frontmatter típico: `title`, `description`, `date`, `category`, `background` (opcional).

## Variáveis de ambiente

Copia `.env.example` para `.env`. Variáveis `PUBLIC_*` são expostas ao cliente (InstantSearch).

- **Busca no browser:** `PUBLIC_ALGOLIA_APP_ID`, `PUBLIC_ALGOLIA_SEARCH_KEY`, `PUBLIC_ALGOLIA_INDEX_NAME`
- **Só no script de indexação:** `ALGOLIA_ADMIN_KEY` (nunca commits nem `PUBLIC_`)

O script também aceita nomes legados `GATSBY_ALGOLIA_*` para app id e nome do índice, mas o ideal é migrar para `PUBLIC_*`.

Se precisares de saltar o push no meio de outro comando, define `SKIP_ALGOLIA_INDEX=true`.

## Deploy (Netlify)

- **Comando:** `npm run build` (definido em `netlify.toml`)
- **Publish:** `dist`
- **Node:** 22 (via `netlify.toml`)

O push Algolia **não** corre no deploy por predefinição (evita falhas de build se a API estiver inacessível). Para atualizar o índice, corre `npm run algolia:index` localmente ou noutro job com as variáveis corretas.

## CMS

Painel em `/admin/` (ficheiros em `public/admin/`). Ajusta `media_folder` / `public_folder` em `config.yml` se mudares a estrutura de imagens.

## Licença

0BSD — ver `package.json`.
