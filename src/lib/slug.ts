/**
 * Match Gatsby createFilePath + slice(12): URL is /{stem}/ without the YYYY-MM-DD- prefix.
 */
export function postPathFromStem(stem: string): string {
  const withSlashes = `/${stem}/`;
  if (withSlashes.length <= 12) {
    return `/${stem}/`;
  }
  const tail = withSlashes.slice(12);
  return `/${tail}`.replace(/\/{2,}/g, "/");
}

export function stemFromPostId(id: string): string {
  const base = id.split("/").pop() ?? id;
  return base.replace(/\.md$/i, "");
}
