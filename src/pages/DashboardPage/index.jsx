import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import NavBar from "../../components/NavBar";
import Main from "../../components/Main";
import STYLED_DASHBOARD from "./style";

const DashboardPage = (user) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Sessão encerrada!");
  };
  return (
    <STYLED_DASHBOARD>
      <NavBar classname="Nav_dash">
        <Button onClick={logout}>Sair</Button>
      </NavBar>
      <Header classname="Header_dash" user={user.user} />
      <Main classname="Main_dash" user={user.user} />
    </STYLED_DASHBOARD>
  );
};
export default DashboardPage;
