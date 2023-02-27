import STYLED_MAIN from "./style";
import { useState } from "react";
import Modal from "react-modal";
import Form from "../Form";
import Select from "../Select";
import Input from "../Input";
import { GoTrashcan } from "react-icons/go";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TechFormSchema } from "../Form/Schema";
import { UserProvider } from "../Providers/UserContext";
import { useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

const Main = ({ classname, user }) => {
  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  const OpenModal = () => {
    setModalState(true);
  };
  const CloseModal = () => {
    setModalState(false);
  };

  const DeleteTech = async (id) => {
    let localUser = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${localUser}`,
        },
      });
    } catch (error) {
      toast.error("Não foi possivel excluir esta tecnologia!");
    }
    navigate(0);
  };

  const AddTech = async (formData) => {
    let localUser = JSON.parse(localStorage.getItem("@TOKEN"));
    console.log(JSON.stringify(formData));
    try {
      const response = await api.post(`/users/techs`, formData, {
        headers: {
          Authorization: `Bearer ${localUser}`,
        },
        formData,
      });
      CloseModal();
    } catch (error) {
      toast.error("Não foi possivel criar esta tecnologia!");
    }
    navigate(0);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TechFormSchema),
  });
  const submit = (formData) => {
    AddTech(formData);
  };

  return (
    <STYLED_MAIN className={classname}>
      <div className="div_title_modal">
        <h2>Tecnologias</h2>
        <button onClick={OpenModal}>+</button>
      </div>
      <ul>
        {user &&
          user.techs !== "" &&
          user.techs.map((element) => {
            return (
              <li id={element.id}>
                <div>
                  <h3>{element.title}</h3>
                  <div>
                    <p>{element.status}</p>
                    <GoTrashcan onClick={() => DeleteTech(element.id)} />
                  </div>
                </div>
              </li>
            );
          })}
        {user && user.techs == "" && <h2>Você não Possui uma tecnologia!</h2>}
      </ul>
      <Modal
        isOpen={modalState}
        onRequestClose={CloseModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <section>
          <div>
            <h4>Cadastrar tecnologia</h4>
            <h2 onClick={CloseModal}>x</h2>
          </div>
          <Form onSubmit={handleSubmit(submit)}>
            <Input
              label="Title"
              type="text"
              error={errors.title}
              placeholder="Ex: React, TypeScript..."
              register={register("title")}
            />
            <label htmlFor="Modal_select">Nível</label>
            <Select
              id="Modal_select"
              error={errors.status}
              register={register("status")}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <Button classname="modal_register_btn" type="submit">
              Adicionar
            </Button>
          </Form>
        </section>
      </Modal>
    </STYLED_MAIN>
  );
};
export default Main;
