import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapped>
    <Profile />
    <SocialLinks />
  </S.SidebarWrapped>
)

export default Sidebar
