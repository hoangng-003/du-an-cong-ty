import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/styles'

import { FormAuth, InputField } from 'components/authentication'
import { FormGroupStyle, FormControlStyle, AuthLink, SubTitle } from 'components/authentication/styles'
import { MButton } from 'components/_material-extend'
import { PATH_AUTH } from 'routes/paths'

const ResetBtn = styled(MButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))
export default function VerifyCode() {
  const navigate = useNavigate()

  const handleResetPassword = () => {
    navigate(PATH_AUTH.resetPassword)
  }

  return (
    <FormAuth title="Forgot Password">
      <SubTitle>We will sent a code to your email. Please fill in the field below with the code</SubTitle>
      <FormControlStyle direction>
        <FormGroupStyle gutterBottom>
          <InputField
            required
            autoComplete="Code"
            label="Code"
            placeholder="Code"
            // error="true"
            // helperText="email error"
          />
        </FormGroupStyle>
      </FormControlStyle>
      <FormControlStyle gutterBottom justifyContent="flex-end">
        <FormGroupStyle>
          <ResetBtn disableRipple>Resend Code</ResetBtn>
        </FormGroupStyle>
      </FormControlStyle>
      <MButton variant="contained" color="error" fullWidth onClick={handleResetPassword}>
        Submit
      </MButton>
    </FormAuth>
  )
}
