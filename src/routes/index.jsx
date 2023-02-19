import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { api } from "../services/api";
import { toast } from "react-toastify";

const AppRoutes = () => {
  const navigate = useNavigate();

  const registerUser = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      console.log(response.data);
      navigate("/login");
      toast.success("Registro realizado!");
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível cadastrar o usuário. Tente novamente!");
    }
  };

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      navigate("/");
      toast.success("Login realizado!");
    } catch (error) {
      toast.error("Login não realizado, verifique o e-mail e a senha!");
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage loginUser={loginUser} />} />
        <Route
          path="/register"
          element={<RegisterPage registerUser={registerUser} />}
        />
      </Routes>
    </>
  );
};
export default AppRoutes;
