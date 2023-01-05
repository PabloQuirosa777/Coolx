import { Project } from "../pages/project/Project";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarMain } from "../components/navBar/NavBarMain";
import { Login } from "../pages/auth/Login";
import { Home } from "../pages/home/Home";
import { Register } from "../pages/auth/Register";
import { Messages } from "../pages/user/Messages";
import { MyAccount } from "../pages/user/MyAccount";
import { MyProjects } from "../pages/user/MyProjects";
import { Reports } from "../pages/user/Reports";
import { User } from "../pages/user/User";
import { Admin } from "../pages/admin/Admin";
import { ErrorPage } from "../pages/home/ErrorPage";
import { Tarjetamas } from "../components/card/Tarjetamas";
import { Vegetation } from "../components/vegetation/Vegetation";
import { ContactForm } from "../components/forms/ContactForm";
import { ProjectForm } from "../components/forms/ProjectForm";
import { Succes1 } from "../pages/home/Succes1";
import { Succes2 } from "../pages/home/Sucess2";
import { EditUser } from "../pages/user/EditUser";
import { AdminUsers } from "../pages/admin/AdminUsers";
import { AdminTree } from "../pages/admin/AdminTree";
import { TreeForm } from "../pages/admin/TreeForm";
import { AdminProjectState } from "../pages/admin/AdminProjectState";
import { SuccesPayment } from "../pages/home/SuccesPayment";
import { BuyProject } from "../pages/user/BuyProject";
import { Stripe } from "../components/stripe/Stripe";
import { Succes3 } from "../pages/home/Succes3";
import { EditUserNavbar } from "../components/navBar/EditUserNavbar";
import { Footer } from "../pages/home/Footer";
import { ForgorPassword } from "../pages/auth/ForgotPassword";

export const AppRoutes = ({
  user,
  setUser,
  projects,
  resetUser,
  setResetUser,
}) => {
  const [isLogged, setIsLogged] = useState(false);

  //esto es para modificar usuarios
  const [userModificate, setUserModificate] = useState();

  // esto es para cuando compramos un proyecto
  const [buyProject, setBuyProject] = useState();

  return (
    <div>
      <BrowserRouter>
        <NavBarMain
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/forgotpassword" element={<ForgorPassword />} />
          <Route
            path="/adminusers"
            element={
              <AdminUsers user={user} setUserModificate={setUserModificate} />
            }
          />
          <Route
            path="/adminprojectstate"
            element={
              <AdminProjectState user={user} setIsLogged={setIsLogged} />
            }
          />
          <Route
            path="/admin"
            element={<Admin user={user} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/admintree"
            element={<AdminTree setIsLogged={setIsLogged} />}
          />
          <Route
            path="/treeform"
            element={<TreeForm setIsLogged={setIsLogged} />}
          />
          <Route path="/*" element={<ErrorPage />} />
          <Route
            path="/tarjetamas"
            element={<Tarjetamas projects={projects} />}
          />
          <Route
            path="/buyproject"
            element={
              <BuyProject
                user={user}
                buyProject={buyProject}
                setBuyProject={setBuyProject}
              />
            }
          />
          <Route path="/vegetation" element={<Vegetation />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/registrocoolx" element={<Register />} />
          <Route
            path="/projectform"
            element={
              <ProjectForm
                user={user}
                resetUser={resetUser}
                setResetUser={setResetUser}
              />
            }
          />
          <Route
            path={`/project/:id`}
            element={<Project projects={projects} />}
          />
          <Route path="/succes1" element={<Succes1 />} />
          <Route path="/succes2/:project_id" element={<Succes2 />} />
          <Route
            path="/succespayment"
            element={<SuccesPayment projects={projects} />}
          />
          <Route path="/succes3" element={<Succes3 />} />
          <Route
            path="/stripe/:project_id"
            element={<Stripe buyProject={buyProject} user={user} />}
          />
          <Route path="/user" element={<User />}>
            <Route
              path=""
              element={
                <MyProjects
                  projects={projects}
                  user={user}
                  buyProject={buyProject}
                  setBuyProject={setBuyProject}
                  setResetUser={setResetUser}
                  resetUser={resetUser}
                />
              }
            />
            <Route
              path="myprojects"
              element={
                <MyProjects
                  projects={projects}
                  user={user}
                  buyProject={buyProject}
                  setBuyProject={setBuyProject}
                  setResetUser={setResetUser}
                  resetUser={resetUser}
                />
              }
            />
            <Route path="reports" element={<Reports />} />
            <Route path="messages" element={<Messages />} />
            <Route path="myaccount" element={<MyAccount />} />
          </Route>

          <Route
            path="/getEditUser/:user_id"
            element={
              <EditUser
                user={user}
                setUser={setUser}
                setIsLogged={setIsLogged}
                userModificate={userModificate}
              />
            }
          />
          <Route
            path="/editusernavbar/:user_id"
            element={
              <EditUserNavbar
                user={user}
                resetUser={resetUser}
                setResetUser={setResetUser}
              />
            }
          />
        </Routes>

        <Footer user={user} />
      </BrowserRouter>
    </div>
  );
};
