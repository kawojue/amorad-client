import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
  password: Yup.string().required('Password is required')
});

export const OrganizationRegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  organization_name: Yup.string().required('Organization name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  phone: Yup.string().required('Phone is required'),
  terms: Yup.boolean().oneOf([true], 'Accept terms and conditions is required').required('Accept terms and conditions is required')
});

export const organizationAddressSchema = Yup.object().shape({
  profession: Yup.string().required('Select a profession'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip_code: Yup.string().required('Zip code is required'),
  country: Yup.string().required('Country is required'),
});

export const practitionerRegisterSchema = Yup.object().shape({
  affiliation: Yup.string().required('Affiliation is required'),
  practiceNumber: Yup.string().required('practice Number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  phone: Yup.string().required('Phone is required'),
  terms: Yup.boolean().oneOf([true], 'Accept terms and conditions is required').required('Accept terms and conditions is required')
});

export const practitionerAddressSchema = Yup.object().shape({
  profession: Yup.string().required('Select a profession'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip_code: Yup.string().required('Zip code is required'),
  country: Yup.string().required('Country is required'),
});

export const ForgotPassword = Yup.object({
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
});

export const ResetPasswordSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});


export const profileSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
});