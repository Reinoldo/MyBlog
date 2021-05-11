import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => {
  return (
    <PostItem
      description={hit.description}
      title={hit.title}
      slug={hit.fields.slug}
      date={hit.date}
      category={hit.category}
      timeToRead={hit.timeToRead}
    />
  )
}

export default Hit
