import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapped = styled.aside`
  align-items: center;
  border-right: 1px solid #38444d;
  background: #192734;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 18rem;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    width:100%;
    padding: 1rem 2rem;
  `}
`
