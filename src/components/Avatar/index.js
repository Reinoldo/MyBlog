import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "eu.jpeg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 60, height: 60)
          }
        }
      }
    `
  )
  return (
    <S.AvatarWrapper
      image={avatarImage.childImageSharp.gatsbyImageData}
      alt="Reinoldo's avatar"
    />
  )
}

export default Avatar
