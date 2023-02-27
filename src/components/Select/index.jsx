import STYLED_SELECT from "./style";

const Select = ({ register, children, error }) => {
  return (
    <STYLED_SELECT name="Selecione o Módulo" id="" {...register}>
      {children}
      {error && <p>{error.message}</p>}
    </STYLED_SELECT>
  );
};
export default Select;
