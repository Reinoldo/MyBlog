import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

const PostItem = ({
  slug,
  category,
  background,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink
    cover
    duration={0.6}
    bg={getThemeColor()}
    direction="left"
    to={slug}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date}, {timeToRead}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  background: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
