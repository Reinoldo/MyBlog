import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders);
  padding: 1.5rem 3rem;
  color: var(--texts);
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`
