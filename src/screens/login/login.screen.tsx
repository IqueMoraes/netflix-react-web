import { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/button";
import FormError from "../../components/form-error/form-error";
import Input from "../../components/input/input";
import { authenticated } from "../../store/user/user.selector";
import { loginSchema } from "./login.schema";
import { Wrapper } from "./login.styled";
import { ILoginData } from "./login.types";
import userSlice from "../../store/user/user.slice";

function Form() {
  const [data, setData] = useState<ILoginData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<String>("");

  const dispatch = useDispatch()
  const userAuthenticated = useSelector(authenticated);

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

      dispatch(userSlice.actions.authenticated(true));
      
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    }
  }, [data]);

  useEffect(() => {
    console.log(userAuthenticated);
  }, [userAuthenticated]);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item xs={2}>
        <h1 style={{color: `red`, textAlign: 'center'}}>NETFLIX</h1>
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
