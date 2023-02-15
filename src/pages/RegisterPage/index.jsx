import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "../../components/Form/Schema";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const submit = (formData) => {
    console.log("teste");
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <h2>Crie sua conta</h2>
        <input {...register("name")} />
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
        <select name="Selecione o Módulo" id="">
          <option value="hiddenSelect">Selecione o Módulo</option>
          <option value="">1º Módulo</option>
          <option value="">2º Módulo</option>
          <option value="">3º Módulo</option>
          <option value="">4º Módulo</option>
          <option value="">5º Módulo</option>
          <option value="">6º Módulo</option>
        </select>
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
};
export default RegisterPage;
