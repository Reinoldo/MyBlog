import React from 'react'
import * as S from './styled'
import { Home } from '@styled-icons/boxicons-regular/Home'
import { GridSmall } from '@styled-icons/boxicons-regular/GridSmall'
import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { Lightbulb } from '@styled-icons/material/Lightbulb'
const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to='/' title='Comeback to home'>
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to='/search/' title='Search'>
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title='Change theme'>
        <Lightbulb />
      </S.MenuBarItem>
      <S.MenuBarItem title='Change visualization'>
        <GridSmall />
      </S.MenuBarItem>
      <S.MenuBarItem title='Go to the top'>
        <UpArrowAlt />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
