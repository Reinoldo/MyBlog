import * as React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <S.LayoutWrapper>
        <GlobalStyles />
        <TransitionPortal level="top">
          <Sidebar />
        </TransitionPortal>

        <TransitionPortal level="top">
          {" "}
          <MenuBar />
        </TransitionPortal>

        <S.LayoutMain>
          <main>{children}</main>
        </S.LayoutMain>
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
