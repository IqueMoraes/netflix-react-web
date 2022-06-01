import { Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { loginSchema } from "./login.schema";
import { Button, Error, Input, Wrapper } from "./login.styled";
import { ILoginData } from "./login.types";

function Form() {

  const [ data, setData ] = useState<ILoginData>({
    email: '',
    password: ''
  });
  const [error, setError ] = useState<String>('');

  const handleChange = useCallback(({ target }: any)=> {
    setError('');
    setData( prevData => ({
      ...prevData,
      [target.name]: target.value
    }))
  }, [setData]);

  const handleSend = useCallback(
    async () => {
      try {
        await loginSchema.validate(data);
        console.log('check');
      } catch (e: any) {
        setError(e.message);
      }
    },
    [data]
  )

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid container xs={2} justifyContent="center" alignContent="center">
        <Input
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={handleChange}
        />
        <Input
        type="password"
        name="password"
        placeholder="Senha"
        onChange={handleChange}
        />
        <Button onClick={handleSend}>Entrar</Button>
        <Error>{error}</Error>
      </Grid>
    </Wrapper>
  )
}

export default Form;

