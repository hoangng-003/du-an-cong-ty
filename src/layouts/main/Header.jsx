import React from 'react'
import { styled, useTheme } from '@mui/styles'

import { Link as RouterLink } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
// components
import AuthHeader from 'components/AuthHeader'
import NavMenuHeader from 'components/NavMenuHeader'
import MenuIcon from '@mui/icons-material/Menu'
import { Grid, Typography, IconButton } from '@mui/material'

const RootStyle = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: 120,
  padding: theme.spacing(4.5, 10.875, 3.125),
  display: 'flex',
  justifyContent: 'space-between',
  alignItem: 'center',
}))

const LogoLink = styled(RouterLink)(({ theme }) => ({
  fontSize: 30,
  fontWeight: 700,
  textDecoration: 'none',
  color: theme.palette.primary.main,
}))

const ColorStyle = styled('span')(() => ({
  color: '#000',
  fontWeight: 600,
}))

const HamburgerMenu = styled(MenuIcon)(({ theme }) => ({
  color: '#000',
  fontWeight: 600,
  fontSize: theme.spacing(4.5),
}))

const LogoHeader = () => {
  return (
    <Grid item xs={4} md={3}>
      <LogoLink to="/">
        M&A <ColorStyle>Asia</ColorStyle>
      </LogoLink>
    </Grid>
  )
}

const MenuMobile = () => {
  return (
    <IconButton>
      <HamburgerMenu />
    </IconButton>
  )
}

export default function Header() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <RootStyle container direction="row" justifyContent="space-between" alignItems="center">
      <LogoHeader />
      {matches ? (
        <MenuMobile />
      ) : (
        <>
          <NavMenuHeader />
          <AuthHeader />
        </>
      )}
    </RootStyle>
  )
}
