import React from 'react'
import { RootAuth, ForgotPasswordForm, BannerAuth } from 'components/authentication'
import loginImg from 'assets/images/main/login.png'

export default function ForgotPassword() {
  return (
    <RootAuth>
      <BannerAuth url={loginImg} />
      <ForgotPasswordForm />
    </RootAuth>
  )
}
