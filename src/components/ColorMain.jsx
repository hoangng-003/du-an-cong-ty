import React from 'react'
import { styled } from '@mui/styles'

const ColorStyle = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}))
export default function ColorMain({ children }) {
  return <ColorStyle>{children}</ColorStyle>
}
