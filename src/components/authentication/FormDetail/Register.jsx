import React from 'react'
import * as Yup from 'yup'
import { useFormik, Form, FormikProvider } from 'formik'
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

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Full Name is required'),
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

export default function Register() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      console.log('success')
    },
  })
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik

  console.log(Boolean(touched.password && errors.password), errors, touched)
  return (
    <FormAuth title="Register">
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <SubTitle>
            Already have an account? <AuthLink to={PATH_AUTH.login}>Login</AuthLink>
          </SubTitle>
          <FormControlStyle direction="true">
            <FormGroupStyle gutterBottom>
              <InputField
                required
                autoComplete="FullName"
                label="Full Name"
                placeholder="Full Name"
                {...getFieldProps('fullName')}
                error={touched.fullName && errors.fullName}
                helperText={touched.fullName && errors.fullName}
              />
            </FormGroupStyle>
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
              />
            </FormGroupStyle>
            <FormGroupStyle gutterBottom>
              <InputField
                required
                autoComplete="current-password"
                type="password"
                label="Password"
                name="password"
                placeholder="Password"
                {...getFieldProps('password')}
                error={touched.password && errors.password}
                // helperText={touched.password && errors.password}
              />
            </FormGroupStyle>
            <FormGroupStyle gutterBottom>
              <InputField
                required
                autoComplete="current-password-confirmation"
                type="password"
                label="Password Confirmation"
                name="passwordConfirm"
                placeholder="Password Confirmation"
                {...getFieldProps('passwordConfirmation')}
                error={touched.passwordConfirmation && errors.passwordConfirmation}
                // helperText={touched.passwordConfirmation && errors.passwordConfirmation}
              />
            </FormGroupStyle>
          </FormControlStyle>

          <FormControlStyle gutterBottom>
            <FormGroupInlineStyle>
              <CheckBoxField />{' '}
              <SubTitle fontWeight="700" fontSize="18" color="primary" none>
                I agree to the <AuthLink to="#">Terms & Conditions</AuthLink>
              </SubTitle>
            </FormGroupInlineStyle>
          </FormControlStyle>
          <MButton variant="contained" color="error" fullWidth type="submit">
            Register
          </MButton>
        </Form>
      </FormikProvider>
    </FormAuth>
  )
}
