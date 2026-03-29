import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";
import { postPathFromStem, stemFromPostId } from "./slug";

export const POSTS_PER_PAGE = 5;

export type PostEntry = CollectionEntry<"posts">;

export async function getSortedPosts(): Promise<PostEntry[]> {
  const posts = await getCollection("posts");
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getPostPath(entry: PostEntry): string {
  return postPathFromStem(stemFromPostId(entry.id));
}

export function formatPostDate(date: Date, locale = "pt-BR"): string {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function minutesToRead(body: string): number {
  return Math.max(1, Math.round(readingTime(body).minutes));
}

export function neighborsForIndex(
  sorted: PostEntry[],
  index: number,
): { older: PostEntry | null; newer: PostEntry | null } {
  return {
    older: sorted[index + 1] ?? null,
    newer: sorted[index - 1] ?? null,
  };
}
