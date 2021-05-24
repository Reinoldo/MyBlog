import ReactDisqusComments from "react-disqus-comments"
import React from "react"
import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeUrl = `sommerblog.netlify.app${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <ReactDisqusComments
        shortname="sommerblog"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.CommentsWrapper>
  )
}

export default Comments
