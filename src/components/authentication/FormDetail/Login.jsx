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

import * as Yup from 'yup'
import { useFormik, Form, FormikProvider } from 'formik'

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export default function Login() {
  const [isShowPassword, setIsShowPassword] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LogInSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      console.log('success')
    },
  })
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik

  const handleEyesPassword = value => {
    setIsShowPassword(!value)
  }

  return (
    <FormAuth title="Login">
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
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

            {...getFieldProps('email')}
            error={touched.email && errors.email}
            helperText={touched.email && errors.email}

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
            {...getFieldProps('password')}
            error={touched.password && errors.password}
            helperText={touched.password && errors.password}
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
      
      </Form>
      </FormikProvider>
    </FormAuth>
  )
}
