import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../../utils/getThemeColor"

const Pagination = ({
  numPages,
  isFirst,
  isLast,
  currentPage,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <AniLink
        to={prevPage}
        cover
        duration={0.6}
        bg={getThemeColor()}
        direction="right"
      >
        previus page
      </AniLink>
    )}
    {currentPage} of {numPages}
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        duration={0.6}
        bg={getThemeColor()}
        direction="left"
      >
        next page
      </AniLink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
