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

export const PasswordChangeSchema = Yup.object({
  newPassword: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  currentPassword: Yup.string()
    .required('Current password is required'),
  confirm_password: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

export const addUserRole = Yup.object({
  fullname: Yup.string().required('Name is required'),
  role: Yup.string().required('Role is required'),
  email: Yup.string().email('Invalid email address').required('Email is required')
});


// REPORTS
export const patientSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email address is required'),
  nin: Yup.string().matches(/^\d{10}$/, 'NIN must be 10 digits').required('NIN is required'),
  mrn: Yup.string(),
  phone: Yup.string().required('Phone number is required'),
  dob: Yup.date().required('Date of Birth is required'),
  gender: Yup.string().required('Gender is required'),
  marital: Yup.string().required('Marital Status is required'),
  address: Yup.string().required('Address is required'),
  zip_code: Yup.string().matches(/^\d{5}$/, 'Invalid zip code').required('Zip Code is required'),
});

export const studySchema = Yup.object({
  body_part: Yup.string().required('Body part is required'),
  priority: Yup.string().required('Priority is required'),
  cpt_code: Yup.string().required('CPT code is required'),
  modality: Yup.string().required('Modality is required'),
  description: Yup.string().required('Description is required'),
  clinical_info: Yup.string().required('Clinical information is required'),
  site: Yup.string().required('Site is required'),
  access_code: Yup.string().required('Accession number is required'),
  reporting_status: Yup.string().required('Reporting status is required'),
  paperworks: Yup.array()
    .min(1, 'At least one file is required')
    .max(5, 'Maximum of 5 files allowed')
    .test('totalSize', 'Total size of files exceeds the limit', value => {
      if (!value) return true; // Handle case where no files are uploaded
      const totalSize = value.reduce((acc, file) => acc + file.size, 0);
      const maxSize = 1 * 1024 * 1024;
      return totalSize <= maxSize;
    })
    .required('Please upload at least one file')
})

export const referralSchema = Yup.object({
  doctor: Yup.string().required('Doctor is required'),
})

export const addPractitioner = Yup.object({
  name: Yup.string().required('Full Name is required'),
  phone: Yup.string().required('Phone Number is required'),
  profession: Yup.string().required('Profession is required'),
  practice_number: Yup.string().required('Practice Number is required'),
  email: Yup.string().email('Invalid email').required('Email Address is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  zip_code: Yup.string().required('Zip Code is required'),
})

export const addCenterAdmin = Yup.object({
  name: Yup.string().required('Full Name is required'),
  phone: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email Address is required'),
})

