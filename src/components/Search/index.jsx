import React from "react";
import { liteClient } from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch";
import Hit from "./Hit.jsx";

export default function Search() {
  const appId = import.meta.env.PUBLIC_ALGOLIA_APP_ID ?? "";
  const searchKey = import.meta.env.PUBLIC_ALGOLIA_SEARCH_KEY ?? "";
  const indexName = import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME ?? "";

  if (!appId || !searchKey || !indexName) {
    return (
      <section className="search-root">
        <p className="px-12 py-24 text-[1.2rem] text-[var(--texts)]">
          Search is unavailable. Set PUBLIC_ALGOLIA_APP_ID,
          PUBLIC_ALGOLIA_SEARCH_KEY, and PUBLIC_ALGOLIA_INDEX_NAME.
        </p>
      </section>
    );
  }

  const searchClient = liteClient(appId, searchKey);

  return (
    <section className="search-root">
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <SearchBox placeholder="Search posts..." />
        <Stats />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </section>
  );
}
