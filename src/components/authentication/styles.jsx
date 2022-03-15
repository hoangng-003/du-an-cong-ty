import { Link as RouterLink } from 'react-router-dom'
import { styled } from '@mui/styles'
import { Typography } from '@mui/material'
import { MCheckBox } from 'components/_material-extend'

const AuthLink = styled(RouterLink)(({ theme, fontSize = 20, fontWeight = 700 }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontWeight: `${fontWeight}`,
  fontSize: `${fontSize}`,
}))

const SubTitle = styled(Typography)(({ theme, fontSize = 20, fontWeight = 400, none, color }) => ({
  color: color === 'primary' ? '#222' : theme.palette.grey[500],
  fontWeight: `${fontWeight}`,
  margin: !none ? theme.spacing(1.5, 0, 6) : 0,
  fontSize: `${fontSize}`,
}))

const FormControlStyle = styled('div')(({ theme, direction, justifyContent, gutterBottom }) => ({
  display: 'flex',
  flexDirection: direction ? 'column' : 'row',
  justifyContent: justifyContent ? `${justifyContent}` : 'space-between',
  alignItems: !direction && 'center',
  marginBottom: gutterBottom ? theme.spacing(4) : 0,
}))

const FormGroupStyle = styled('div')(({ theme, gutterBottom }) => ({
  marginBottom: gutterBottom ? theme.spacing(4) : 0,
}))

const FormGroupInlineStyle = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const CheckBoxField = styled(MCheckBox)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
}))
export { FormGroupStyle, FormGroupInlineStyle, FormControlStyle, AuthLink, SubTitle, CheckBoxField }
