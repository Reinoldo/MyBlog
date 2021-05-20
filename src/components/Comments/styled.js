import styled from "styled-components"

export const CommentsTitle = styled.h2`
  color: #fff;
  margin: 2.4rem auto 1rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.069rem;
  line-height: 1.4;
  font-size: 2.1rem;
  padding-bottom: 2rem;
`

export const CommentsWrapper = styled.section`
  margin: auto;
  iframe[src*="ads-iframe"] {
    display: none;
  }
  #disqus_thread {
    a {
      color: #1fa1f2 !important;
    }
  }
`
