import React from 'react'
import { styled } from '@mui/styles'

const AuthForm = styled('div')(({ theme }) => ({
  // padding: theme.spacing(20.625, 19.5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(0, 19.5),
  background: '#fff',
  minWidth: 650,
  transition: '350ms',
  [theme.breakpoints.down('md')]: {
    minWidth: 0,
    padding: '0 10%',
  },
}))

const TitleStyle = styled('h1')(({ theme }) => ({
  fontSize: theme.spacing(5),
  fontWeight: 700,
  color: '#222222',
}))

export default function Form({ title, children }) {
  return (
    <AuthForm>
      <TitleStyle>{title}</TitleStyle>
      {children}
    </AuthForm>
  )
}
