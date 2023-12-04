import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
/** Import views */
import Index from "./assets/views";
import Login from "./assets/views/Login";
import Dashboard from "./assets/views/Dashboard";
import ProjectDetail from "./assets/views/ProjectDetail";
import InscriptionCE from "./assets/views/InscriptionCE";
import InscriptionProject from "./assets/views/InscriptionProject";
import ProjectsUser from "./assets/views/ProjectsUser";
import Favorites from "./assets/views/Favorites";
import ProjectsSearchView from "./assets/views/ProjectsSearchView";
import AdminView from "./assets/views/AdminView";
import {PageError} from "./assets/views/404PageError";
import CirculosPage from "./assets/views/CirculosPage";
import { getAllProjects } from "./services/project.service";
import { useState, useEffect } from "react";
import { CheckIfUserLogin } from "./helpers/checkIfUserLogin";
import { NotLoggued } from "./assets/views/NotLoggued";

function App() {
  const [projects, setProjects] = useState([]);
  const user = CheckIfUserLogin();
  const getData = async () => {
    const projects = await getAllProjects();
    setProjects(projects);
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ruta principal  */}
          <Route path="/" element={<Index />} />
          {/* Rutas de errores */}
          <Route path="*" element={<PageError />} />

          {/* Si esta logueado no lo deja ver el inicio de sesion */}
          <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" /> : <Login />}
          />

          {/* Rutas protegidas solo si ha iniciado sesion para usuario normal*/}
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <NotLoggued />}
          />
          <Route
            path="/project-detail"
            element={user ? <ProjectDetail /> : <NotLoggued />}
          />
          <Route
            path="/inscription-ce"
            element={user ? <InscriptionCE /> : <NotLoggued />}
          />
          <Route
            path="/dashboard/projects/circulos-estudio/panel"
            element={user ? <CirculosPage /> : <NotLoggued />}
          />
          <Route
            path="/dashboard/projects-actives"
            element={user ? <ProjectsUser /> : <NotLoggued />}
          />
          <Route
            path="/dashboard/projects-finished"
            element={user ? <ProjectsUser /> : <NotLoggued />}
          />
          <Route
            path="/dashboard/favorites"
            element={user ? <Favorites /> : <NotLoggued />}
          />
          <Route path="/dashboard/projects" element={<ProjectsSearchView />} />

          {/* TODO: Hacer las rutas privadas cuando se termine lo de administración */}

          <Route path="/404" element={<PageError />} />
          <Route
            path="/administrator/dashboard//*"
            element={user && user.isAdmin ? <AdminView/> : <PageError />}
          />

          {/* Rutas iteradas */}
          {projects.map((project, index) => (
            <Route
              key={index}
              path={`/dashboard/project/my-projects/${project._id
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              element={<ProjectDetail project={project._id} />}
            />
          ))}

          {projects.map((project, index) => (
            <Route
              key={index}
              path={`/dashboard/project/inscription-project/${project._id
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              element={<InscriptionProject idProject={project._id} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
