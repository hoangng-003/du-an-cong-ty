import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/styles'

// component
import HeaderLayout from './Header'
import FooterLayout from './Footer'

const RootStyle = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: 1440,
  margin: 'auto',
  background: '#fff',
}))

export default function index() {
  return (
    <RootStyle>
      <HeaderLayout />
      <div>
        <Outlet />
      </div>
      <FooterLayout />
    </RootStyle>
  )
}
