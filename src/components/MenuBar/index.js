import React, { useEffect, useState } from "react"
import * as S from "./styled"
import { Home } from "@styled-icons/boxicons-regular/Home"
import { GridSmall } from "@styled-icons/boxicons-regular/GridSmall"
import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { Lightbulb as Light } from "@styled-icons/material-outlined/Lightbulb"
import getThemeColor from "../../utils/getThemeColor"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Comeback to home"
          cover
          duration={0.6}
          bg={getThemeColor()}
          direction="right"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" title="Search">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change theme"
          onClick={() =>
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem title="Change visualization">
          <GridSmall />
        </S.MenuBarItem>
        <S.MenuBarItem title="Go to the top">
          <UpArrowAlt />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
