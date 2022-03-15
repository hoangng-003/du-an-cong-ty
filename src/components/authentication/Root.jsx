import React from 'react'
import { styled } from '@mui/styles'

const RootStyle = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: 1440,
  margin: 'auto',
  display: 'grid',
  alignItems: 'center',
}))

const BoxStyle = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  minHeight: 900,
  transition: '350ms',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1,1fr)',
  },
}))
export default function Root({ children }) {
  return (
    <RootStyle>
      <BoxStyle>{children}</BoxStyle>
    </RootStyle>
  )
}
