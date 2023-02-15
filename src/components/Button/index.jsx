const Button = ({ type, children }) => {
  const btnPreventDefault = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <button onClick={btnPreventDefault} type={type}>
        {children}
      </button>
    </>
  );
};
export default Button;
