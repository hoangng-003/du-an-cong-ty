import React from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { PATH_AUTH } from 'routes/paths'

import MButton from 'components/_material-extend/MButton'

const AuthStyles = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
}))

const ButtonStyle = styled(MButton)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,
  margin: theme.spacing(0, 1.3),
  padding: theme.spacing(1.5, 3),
  border: `2px solid ${theme.palette.primary.main}`,

  fontFamily: 'Poppins',
  lineHeight: theme.spacing(3.375),
  letterSpacing: 0.64,
}))

export default function AuthHeader() {
  const navigate = useNavigate()
  return (
    <AuthStyles item xs={4} md={3}>
      <ButtonStyle variant="square" color="primary" onClick={() => navigate(PATH_AUTH.login)}>
        Login
      </ButtonStyle>
      <ButtonStyle onClick={() => navigate(PATH_AUTH.register)}>Register</ButtonStyle>
    </AuthStyles>
  )
}
