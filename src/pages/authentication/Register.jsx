import React from 'react'
import { RootAuth, RegisterForm, BannerAuth } from 'components/authentication'
import loginImg from 'assets/images/main/login.png'

export default function Register() {
  return (
    <RootAuth>
      <RegisterForm />
      <BannerAuth url={loginImg} />
    </RootAuth>
  )
}
