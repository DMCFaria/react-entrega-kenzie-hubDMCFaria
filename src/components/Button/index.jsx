import STYLED_BUTTON from "./style";

const Button = ({ onClick, classname, type, children }) => {
  return (
    <STYLED_BUTTON>
      <button onClick={onClick} className={classname} type={type}>
        {children}
      </button>
    </STYLED_BUTTON>
  );
};
export default Button;
