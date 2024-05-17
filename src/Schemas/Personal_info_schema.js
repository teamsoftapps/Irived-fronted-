import * as yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Personal_Info_Schema = yup.object({
  fullName: yup
    .string()
    .required('Full name is required')
    .test(
      'full-name',
      'Must include both first and last names',
      value => value && value.trim().split(' ').length >= 2,
    ),
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegex, 'Email must be a valid email address'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^\+?1?\d{10,15}$/,
      'Phone number must be a valid phone number with 10 to 15 digits',
    ),
  address: yup
    .string()
    .required('Address is required')
    .min(8, 'Must be at least 8 characters long'),
});
