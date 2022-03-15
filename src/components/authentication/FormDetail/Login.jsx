import React from 'react'

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

export default function Login() {
  const [isShowPassword, setIsShowPassword] = React.useState(false)

  const handleEyesPassword = value => {
    setIsShowPassword(!value)
  }

  return (
    <FormAuth title="Login">
      <SubTitle>
        Don’t have an account? <AuthLink to={PATH_AUTH.register}>Register</AuthLink>
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
        <FormGroupStyle gutterBottom>
          <InputField
            required
            autoComplete="current-password"
            type={isShowPassword ? 'text' : 'password'}
            label="Password"
            isShowPassword={isShowPassword}
            handleEyes={handleEyesPassword}
            name="password"
            placeholder="Password"
            isPassword
            // {...getFieldProps('password')}
          />
        </FormGroupStyle>
      </FormControlStyle>

      <FormControlStyle gutterBottom>
        <FormGroupInlineStyle>
          <CheckBoxField />{' '}
          <SubTitle fontWeight="700" fontSize="18" color="primary" none>
            Remember me
          </SubTitle>
        </FormGroupInlineStyle>
        <FormGroupStyle>
          <AuthLink to={PATH_AUTH.forgotPassword} fontWeight="400" fontSize="18">
            Forgot password?
          </AuthLink>
        </FormGroupStyle>
      </FormControlStyle>
      <MButton variant="contained" color="error" fullWidth>
        Login
      </MButton>
    </FormAuth>
  )
}
