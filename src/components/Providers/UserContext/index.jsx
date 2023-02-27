import { Children } from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      let localUser = JSON.parse(localStorage.getItem("@TOKEN"));
      if (!localUser) {
        return;
      }

      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${localUser}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        localStorage.clear();
      }
    }
    checkUser();
  }, [navigate]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
