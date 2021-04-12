import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"
import { Link } from "gatsby"

const Pagination = ({
  numPages,
  isFirst,
  isLast,
  currentPage,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage}>previus page</Link>}
    {currentPage} of {numPages}
    {!isLast && <Link to={nextPage}>next page</Link>}
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
