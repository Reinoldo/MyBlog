import React from "react"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

const RecommendedPost = ({ next, previous }) => {
  return (
    <S.RecommendedWrapper>
      {previous && (
        <S.RecommendedLink
          to={previous.fields.slug}
          className="previous"
          cover
          duration={0.6}
          bg={getThemeColor()}
          direction="right"
        >
          {previous.frontmatter.title}
        </S.RecommendedLink>
      )}
      {next && (
        <S.RecommendedLink
          to={next.fields.slug}
          className="next"
          cover
          duration={0.6}
          bg={getThemeColor()}
          direction="left"
        >
          {next.frontmatter.title}
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  )
}

export default RecommendedPost
