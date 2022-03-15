import React from 'react'
import { RootAuth, VerifyCodeForm, BannerAuth } from 'components/authentication'
import loginImg from 'assets/images/main/login.png'

export default function VerifyCode() {
  return (
    <RootAuth>
      <BannerAuth url={loginImg} />
      <VerifyCodeForm />
    </RootAuth>
  )
}
