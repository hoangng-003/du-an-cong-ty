import React from 'react'
import { RootAuth, LoginForm, BannerAuth } from 'components/authentication'
import loginImg from 'assets/images/main/login.png'

export default function Login() {
  return (
    <RootAuth>
      <LoginForm />
      <BannerAuth url={loginImg} />
    </RootAuth>
  )
}
