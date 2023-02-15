import React from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";

const LoginPage = () => {
  return (
    <div>
      <Form>
        <h2>Crie sua conta</h2>
        <Input placeholder="Digite aqui seu email"></Input>
        <Input placeholder="Digite aqui sua senha"></Input>
        <Button>Entrar</Button>
        <h4>Ainda não possui conta?</h4>
        <Button>Cadastre-se</Button>
      </Form>
    </div>
  );
};
export default LoginPage;
