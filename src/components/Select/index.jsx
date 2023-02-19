import STYLED_SELECT from "./style";

const Select = ({ register }) => {
  return (
    <STYLED_SELECT name="Selecione o Módulo" id="" {...register}>
      <option value="hiddenSelect">Selecione o Módulo</option>
      <option value="Primeiro Módulo (Introdução ao Front-End)">
        1º Módulo
      </option>
      <option value="Segundo Módulo (Intermédio de Front-End)">
        2º Módulo
      </option>
      <option value="Terceiro Módulo (Avançado de Front-End)">3º Módulo</option>
      <option value="Quarto Módulo (Introdução ao Back-End)m4">
        4º Módulo
      </option>
      <option value="Quinto Módulo (Intermédio de Back-End)">5º Módulo</option>
      <option value="Sexto Módulo (Avançado de Back-End)">6º Módulo</option>
    </STYLED_SELECT>
  );
};
export default Select;
