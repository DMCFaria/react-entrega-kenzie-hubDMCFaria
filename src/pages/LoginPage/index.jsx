import React from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ loginUser }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      let localUser = JSON.parse(localStorage.getItem("@kenziehub: user"));
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
    <div>
      <Form onSubmit={handleSubmit(submit)}>
        <h2>Entre na sua conta</h2>
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
        <Button type="submit">Entrar</Button>
        <h4>Ainda não possui conta?</h4>
        <Button>Cadastre-se</Button>
      </Form>
    </div>
  );
};
export default LoginPage;
