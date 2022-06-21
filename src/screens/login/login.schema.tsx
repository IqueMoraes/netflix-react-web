import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido.').required('E-mail obrigatório').transform((mail: string) => mail.toLowerCase()),
  password: yup.string().required('Senha obrigatória.'),
});

export { loginSchema };
