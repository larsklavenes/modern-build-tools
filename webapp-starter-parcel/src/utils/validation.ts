import * as Yup from 'yup'

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter a valid email'),
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Password must have at least 8 characters'),
})
