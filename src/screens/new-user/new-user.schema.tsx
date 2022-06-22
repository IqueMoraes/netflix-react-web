import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um e-mail válido.')
    .max(100)
    .required('E-mail obrigatório')
    .transform((mail: string) => mail.toLowerCase()),
  password: yup.string().required('Senha obrigatória.').max(100),
  repeatPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export { loginSchema };
