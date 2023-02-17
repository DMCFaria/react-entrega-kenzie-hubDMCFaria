const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} action="">
      {children}
    </form>
  );
};
export default Form;
