import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  justify-content: space-between;
  padding: 0.8rem 0;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom:0;
    padding:0;
    width: 100%;
    height: auto;
    flex-direction:row;
    position: fixed;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction:row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 2rem;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }
  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan("large")`
    
    padding: .9rem;
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
  `}

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
`
