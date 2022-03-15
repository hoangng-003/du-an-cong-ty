import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FormAuth, InputField } from 'components/authentication'
import {
  FormGroupStyle,
  FormGroupInlineStyle,
  FormControlStyle,
  AuthLink,
  SubTitle,
  CheckBoxField,
} from 'components/authentication/styles'
import { MButton } from 'components/_material-extend'
import { PATH_AUTH } from 'routes/paths'

export default function ForgotPassword() {
  const navigate = useNavigate()

  const handleVerifyCode = () => {
    navigate(PATH_AUTH.verify)
  }

  return (
    <FormAuth title="Forgot Password">
      <SubTitle>
        Already have an account? <AuthLink to={PATH_AUTH.login}>Login</AuthLink>
      </SubTitle>
      <FormControlStyle direction>
        <FormGroupStyle gutterBottom>
          <InputField
            required
            autoComplete="Email"
            type="email"
            label="Email"
            placeholder="Enter email"
            // error="true"
            // helperText="email error"
          />
        </FormGroupStyle>
      </FormControlStyle>
      <MButton variant="contained" color="error" fullWidth onClick={handleVerifyCode}>
        Submit
      </MButton>
    </FormAuth>
  )
}
