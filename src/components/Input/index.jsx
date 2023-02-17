const Input = ({ type, label, placeholder, register, error }) => {
  return (
    <fieldset>
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
    </fieldset>
  );
};
export default Input;
