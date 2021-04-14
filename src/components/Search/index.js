import React from "react"
import * as S from "./styled"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Hit from "./hit"
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    >
      <SearchBox />
      <Stats />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)
export default Search
