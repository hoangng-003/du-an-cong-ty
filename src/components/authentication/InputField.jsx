import React from 'react'
import { Typography, IconButton } from '@mui/material'
import { styled } from '@mui/styles'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const RequireStyle = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const InputStyle = styled('input')(({ theme, error }) => ({
  width: '100%',
  backgroundColor: '#F6F6F6',
  color: '#000',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2.1875, 2),
  outline: 'none',
  transition: '350ms',
  border: error ? `2px solid ${theme.palette.primary.main}` : 'none',
}))

const LabelStyle = styled(Typography)(({ theme }) => ({
  color: '#222',
  fontWeight: 600,
  fontSize: theme.spacing(2.5),
  borderRadius: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
}))
const ErrorLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.spacing(1.5),
}))

const EyeSBtn = styled(IconButton)(({ theme }) => ({
  float: 'right',
  marginTop: theme.spacing(-5.5),
  marginRight: theme.spacing(2),
}))

const InputField = ({ type = 'text', ...props }) => {
  const { label, required } = props
  const { handleEyes, isShowPassword, isPassword, error } = props
  console.log('props', props)
  return (
    <>
      <LabelStyle>
        {label} {required ? <RequireStyle>*</RequireStyle> : ''}
      </LabelStyle>
      <InputStyle type={type} {...props} />
      {isPassword && (
        <EyeSBtn onClick={() => handleEyes(isShowPassword)} edge="end">
          {isShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </EyeSBtn>
      )}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  )
}

export default InputField
