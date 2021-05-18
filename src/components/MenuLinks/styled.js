import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    display:none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #0f96a5;
  }
`

export const MenuLinksLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #0f96a5;
  }
`
