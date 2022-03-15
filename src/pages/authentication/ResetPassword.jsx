import React from 'react'
import { RootAuth, ResetPasswordForm, BannerAuth } from 'components/authentication'
import loginImg from 'assets/images/main/login.png'

export default function ResetPassword() {
  return (
    <RootAuth>
      <ResetPasswordForm />
      <BannerAuth url={loginImg} />
    </RootAuth>
  )
}
