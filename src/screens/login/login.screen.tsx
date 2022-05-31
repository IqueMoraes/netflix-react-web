import { useCallback, useState } from "react";
import { Wrapper } from "./login.styled";
import { ILoginData } from "./login.types";

function Login() {

  const [ email, setEmail ] = useState<String>('');

  const [ data, setData ] = useState<ILoginData>({
    email: '',
    password: ''
  })

  const handleChange = useCallback((event: any)=> {
    setEmail(event.target.value)
  }, [])

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      {/* <form>
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button type="submit">Entrar</button>
      </form> */}
      <input type="text" name="email"  onChange={handleChange} />
    </Wrapper>
  )
}

export default Login;

