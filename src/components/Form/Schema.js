import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório."),

  email: yup
    .string()
    .required("Email Obrigatório.")
    .email("O Email digitado é inválido."),

  password: yup
    .string()
    .required("Senha Obrigatória.")
    .min(8, "A senha não contém 8 digitos"),

  confirmPassword: yup
    .string()
    .required("Confirmar a senha é Obrigatório.")
    .oneOf([yup.ref("password")], "As senhas não correspondem."),

  bio: yup.string().required("Bio Obrigatória."),

  contact: yup.string().required("É necessário um meio para contato."),
  course_module: yup
    .string()
    .required("É necessário informar o módulo cursado"),
});
