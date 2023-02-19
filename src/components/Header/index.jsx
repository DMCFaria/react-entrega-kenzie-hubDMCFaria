import STYLED_HEADER from "./styled";

const Header = ({ classname, user }) => {
  return (
    <STYLED_HEADER className={classname}>
      <h1>Olá, {user && user.name}</h1>
      <p>{user && user.course_module}</p>
    </STYLED_HEADER>
  );
};

export default Header;
