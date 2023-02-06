import * as yup from 'yup';

// const PasswordRules=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}&/;
export const basicSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup
  .string().email("Please enter a valid email address").required("Required"),
  password: yup
  .string()
  .min(5)
//   .matches(PasswordRules,{message:"Please create a stronger password"})
  .required("Required"),

});