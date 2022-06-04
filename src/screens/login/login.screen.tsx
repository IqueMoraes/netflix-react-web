import { Grid } from "@mui/material";
import { useCallback, useState } from "react";
import Button from "../../components/button/button";
import FormError from "../../components/form-error/form-error";
import Input from "../../components/input/input";
import { loginSchema } from "./login.schema";
import { Wrapper } from "./login.styled";
import { ILoginData } from "./login.types";

function Form() {
  const [data, setData] = useState<ILoginData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<String>("");

  const handleChange = useCallback(
    ({ target }: any) => {
      setError("");
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const handleSend = useCallback(async () => {
    try {
      await loginSchema.validate(data);
      // await loginSchema.validate(data, {stripUnknown: true, abortEarly: false});
      // await loginSchema.isValid(data, {abortEarly:false})
      console.log("Login validated");
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    }
  }, [data]);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item xs={2}>
        <h1 style={{color: `red`}}>NETFLIX</h1>
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
        <FormError message={error} />
      </Grid>
    </Wrapper>
  );
}

export default Form;
