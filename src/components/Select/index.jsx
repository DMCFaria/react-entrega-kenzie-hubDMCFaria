const Select = ({ register }) => {
  return (
    <select name="Selecione o Módulo" id="" {...register}>
      <option value="hiddenSelect">Selecione o Módulo</option>
      <option value="m1">1º Módulo</option>
      <option value="m2">2º Módulo</option>
      <option value="m3">3º Módulo</option>
      <option value="m4">4º Módulo</option>
      <option value="m5">5º Módulo</option>
      <option value="m6">6º Módulo</option>
    </select>
  );
};
export default Select;
