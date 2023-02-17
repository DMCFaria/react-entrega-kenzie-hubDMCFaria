import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const DashboardPage = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      let localUser = JSON.parse(localStorage.getItem("@kenziehub: user"));
      if (!localUser) {
        navigate("/login");
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
        navigate("/login");
      }
    }
    checkUser();
  }, []);

  return (
    <>
      <div>Dashboard</div>
    </>
  );
};
export default DashboardPage;
