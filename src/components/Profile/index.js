import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Avatar from "../Avatar"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

const Profile = () => {
  const {
    site: {
      siteMetadata: { description, position, author },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          description
          position
          author
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        cover
        bg={getThemeColor()}
        duration={0.6}
        direction="right"
        to="/"
      >
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
