/**
 * Push posts to Algolia. Run manually: `npm run algolia:index` (after `dotenv` / env vars).
 * Not run on Netlify by default — use `npm run build` there to avoid build failures if Algolia is unreachable.
 */
import "dotenv/config"
import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import { algoliasearch } from "algoliasearch"

if (
  process.env.SKIP_ALGOLIA_INDEX === "1" ||
  process.env.SKIP_ALGOLIA_INDEX === "true"
) {
  console.warn(
    "Skipping Algolia index (SKIP_ALGOLIA_INDEX). Use `npm run algolia:index` when you want to index."
  )
  process.exit(0)
}

function postPathFromStem(stem) {
  const withSlashes = `/${stem}/`
  if (withSlashes.length <= 12) {
    return `/${stem}/`
  }
  const tail = withSlashes.slice(12)
  return `/${tail}`.replace(/\/{2,}/g, "/")
}

function minutesToRead(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}


const appId = process.env.PUBLIC_ALGOLIA_APP_ID || process.env.GATSBY_ALGOLIA_APP_ID
const adminKey = process.env.ALGOLIA_ADMIN_KEY
const indexName =
  process.env.PUBLIC_ALGOLIA_INDEX_NAME || process.env.GATSBY_ALGOLIA_INDEX_NAME

if (!appId || !adminKey || !indexName) {
  console.warn(
    "Skipping Algolia index: set PUBLIC_ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY, PUBLIC_ALGOLIA_INDEX_NAME"
  )
  process.exit(0)
}

const postsDir = path.join(process.cwd(), "src", "content", "posts")
const files = (await fs.readdir(postsDir)).filter((f) => f.endsWith(".md"))

const objects = []

for (const file of files) {
  const raw = await fs.readFile(path.join(postsDir, file), "utf8")
  const { data, content } = matter(raw)
  const stem = file.replace(/\.md$/i, "")
  const slug = postPathFromStem(stem)
  const dateObj = data.date instanceof Date ? data.date : new Date(data.date)
  const date = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(dateObj)

  objects.push({
    objectID: stem,
    title: data.title,
    description: data.description,
    date,
    category: data.category,
    background: data.background ?? "",
    date_timestamp: Math.floor(dateObj.getTime() / 1000),
    fields: { slug },
    excerpt: content.trim().slice(0, 5000),
    timeToRead: minutesToRead(content),
  })
}

const client = algoliasearch(appId, adminKey)
await client.saveObjects({ indexName, objects })

console.log(`Algolia: indexed ${objects.length} posts into ${indexName}`)
