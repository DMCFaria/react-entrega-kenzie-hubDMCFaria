import STYLED_INPUT from "./style";

const Input = ({ type, label, placeholder, register, error }) => {
  return (
    <STYLED_INPUT>
      {label && <label htmlFor={register.name}>{label}</label>}
      {label && (
        <input
          placeholder={placeholder}
          id={register.name}
          type={type}
          {...register}
        />
      )}
      {error && <p>{error.message}</p>}
    </STYLED_INPUT>
  );
};
export default Input;
