import React from 'react'
import { styled } from '@mui/styles'

const BannerStyle = styled('div')(({ theme, url }) => ({
  width: '100%',
  height: '100%',
  background: `center / cover no-repeat url(${url}) #fff`,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export default function Form({ url }) {
  return <BannerStyle url={url} />
}
