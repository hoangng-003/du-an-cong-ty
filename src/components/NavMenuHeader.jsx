import React from 'react'
import { Grid, Link, Divider, Container, Typography, IconButton, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { styled } from '@mui/styles'

import MButton from 'components/_material-extend/MButton'

const LINKS = [
  {
    headline: 'About us',
    url: '/about-us',
  },
  {
    headline: 'Solution',
    url: '/solution',

    // children: [
    //   { name: 'abc', href: '/abc' },
    //   { name: 'xxz', href: 'xxz' },
    // ],
  },
  {
    headline: 'Partners',
    url: '/partners',
  },
]

const NavLink = styled(Link)(({ theme }) => ({
  color: '#5F5F5F',
  fontSize: 18,
  fontWeight: 600,
  textDecoration: 'none',
  transition: '350ms',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

const NavLinkChild = styled(Link)(() => ({
  color: '#000',
}))

export default function NavMenuHeader() {
  return (
    <Grid item xs={4} md={6}>
      <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="center">
        {LINKS.map(list => {
          const { headline, url, children } = list
          return (
            <Stack key={headline} spacing={2}>
              <NavLink component={RouterLink} to={url} variant="overline">
                {headline}
              </NavLink>
              {children?.map(link => (
                <NavLinkChild
                  to={link.href}
                  key={link.name}
                  color="inherit"
                  variant="body2"
                  component={RouterLink}
                  sx={{ display: 'block' }}
                >
                  {link.name}
                </NavLinkChild>
              ))}
            </Stack>
          )
        })}
      </Stack>
    </Grid>
  )
}
