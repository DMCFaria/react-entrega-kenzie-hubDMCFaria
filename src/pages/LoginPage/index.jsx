import React from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import STYLED_LOGINPAGE from "./sytle";
import NavBar from "../../components/NavBar";

const LoginPage = ({ loginUser }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      let localUser = JSON.parse(localStorage.getItem("@TOKEN"));
      if (localUser) {
        navigate("/");
        return;
      }

      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${localUser}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        navigate("/login");
      }
    }
    checkUser();
  }, []);

  const { register, handleSubmit } = useForm({});

  const submit = (formData) => {
    loginUser(formData);
  };
  return (
    <STYLED_LOGINPAGE>
      <NavBar></NavBar>
      <Form onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          register={register("email")}
        ></Input>
        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          register={register("password")}
        ></Input>
        <Button classname="login_btn" type="submit">
          Entrar
        </Button>
        <h4>Ainda não possui conta?</h4>
        <div>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </Form>
    </STYLED_LOGINPAGE>
  );
};
export default LoginPage;
