import STYLED_NAVBAR from "./style";

const NavBar = ({ classname, children }) => {
  return (
    <STYLED_NAVBAR className={classname}>
      <h2>Kenzie Hub</h2>
      {children}
    </STYLED_NAVBAR>
  );
};
export default NavBar;
