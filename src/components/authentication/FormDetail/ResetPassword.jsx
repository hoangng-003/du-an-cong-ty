import React from 'react'

import { FormAuth, InputField } from 'components/authentication'
import { FormGroupStyle, FormControlStyle, SubTitle } from 'components/authentication/styles'
import { MButton } from 'components/_material-extend'
import { PATH_AUTH } from 'routes/paths'

export default function ResetPassword() {
  return (
    <FormAuth title="Reset Password">
      <SubTitle>Welcome back</SubTitle>

      <FormControlStyle direction>
        <FormGroupStyle gutterBottom>
          <InputField
            required
            autoComplete="current-password"
            type="password"
            label="Password"
            name="password"
            placeholder="Password"
          />
        </FormGroupStyle>
        <FormGroupStyle gutterBottom>
          <InputField
            required
            autoComplete="current-password-confirm"
            type="password"
            label="Password Confirmation"
            name="password_confirm"
            placeholder="Password Confirmation"
          />
        </FormGroupStyle>
      </FormControlStyle>

      <MButton variant="contained" color="error" fullWidth>
        Reset password
      </MButton>
    </FormAuth>
  )
}
