import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'
import * as S from './styled'

const Sidebar = () => (
  <S.SidebarWrapped>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapped>
)

export default Sidebar
