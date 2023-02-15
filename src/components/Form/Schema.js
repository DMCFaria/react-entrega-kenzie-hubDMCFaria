import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório"),
  email: yup
    .string()
    .required("Email Obrigatório")
    .email("O Email digitado é inválido")
    .matches(
      "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/",
      "A Senha precisa ter 8 dígitos, conter letras maiúsculas e minúsculas, e conter um símbolo."
    ),
  password: yup.string().required("Senha Obrigatória"),
  confirmPassword: yup
    .string()
    .required("Confirmar a senha é Obrigatório")
    .oneOf([yup.ref("password")], "As senhas não correspondem"),
});
