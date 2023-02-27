import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "../../components/Form/Schema";
import Select from "../../components/Select";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import STYLED_REGISTERPAGE from "./sytle";

const RegisterPage = ({ registerUser }) => {
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
        navigate("/register");
      }
    }
    checkUser();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const submit = (formData) => {
    console.log(formData);
    registerUser(formData);
  };

  return (
    <STYLED_REGISTERPAGE>
      <section>
        <NavBar>
          <div>
            <Link to="/login">Voltar</Link>
          </div>
        </NavBar>
      </section>
      <Form onSubmit={handleSubmit(submit)}>
        <h2>Crie sua conta</h2>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          error={errors.name}
          register={register("name")}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          error={errors.email}
          register={register("email")}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          error={errors.password}
          register={register("password")}
        />
        <Input
          label="Confirme sua Senha"
          type="password"
          placeholder="Digite novamente sua senha"
          error={errors.confirmPassword}
          register={register("confirmPassword")}
        />
        <Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          error={errors.bio}
          register={register("bio")}
        />
        <Input
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          error={errors.contact}
          register={register("contact")}
        />

        <Select register={register("course_module")}>
          <option value="hiddenSelect">Selecione o Módulo</option>
          <option value="Primeiro Módulo (Introdução ao Front-End)">
            1º Módulo
          </option>
          <option value="Segundo Módulo (Intermédio de Front-End)">
            2º Módulo
          </option>
          <option value="Terceiro Módulo (Avançado de Front-End)">
            3º Módulo
          </option>
          <option value="Quarto Módulo (Introdução ao Back-End)m4">
            4º Módulo
          </option>
          <option value="Quinto Módulo (Intermédio de Back-End)">
            5º Módulo
          </option>
          <option value="Sexto Módulo (Avançado de Back-End)">6º Módulo</option>
        </Select>
        <Button classname="register_btn" type="submit">
          Cadastrar
        </Button>
      </Form>
    </STYLED_REGISTERPAGE>
  );
};
export default RegisterPage;
