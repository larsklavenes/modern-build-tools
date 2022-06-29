import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Toolbar from '@mui/material/Toolbar'
import { visuallyHidden } from '@mui/utils'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledNavList = styled(List)(
  ({ theme }) => css`
    width: 300px;

    .active-link {
      color: ${theme.palette.primary.main};
      font-weight: bold;
    }
  `
)

const Navigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(open => !open)
  }

  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <>
      <AppBar
        component="nav"
        aria-labelledby="mainmenu-label"
        position="static"
      >
        <span style={visuallyHidden} id="mainmenu-label">
          Create a user
        </span>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
        <StyledNavList>
          <ListItem>
            <NavLink
              to="/"
              className={navData => (navData.isActive ? 'active-link' : '')}
              onClick={closeDrawer}
            >
              Form
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/users"
              className={navData => (navData.isActive ? 'active-link' : '')}
              onClick={closeDrawer}
            >
              Users
            </NavLink>
          </ListItem>
        </StyledNavList>
      </Drawer>
    </>
  )
}

export default Navigation
