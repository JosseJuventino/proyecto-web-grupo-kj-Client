import { Routes, Route, Navigate } from 'react-router-dom';
import MenuAdmin from "../components/menu-admin/MenuAdmin";
import AddProject from "./AddProject";
import HomeAdmin from "./pickersAdmin/HomeAdmin";
import InscripcionAdmin from "./pickersAdmin/InscriptionAdmin";
import ProyectsAdmin from './pickersAdmin/ProyectsAdmin';
import CirculoEstudio from './pickersAdmin/CirculoEstudio';
import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";
import { PageError } from "../views/404PageError";

function AdminView() {
  const user = CheckIfUserLogin();

  if (user === null) {
    // You can render a loading spinner or any other content while waiting for user authentication.
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen flex-col-reverse  justify-center lg:justify-between w-full lg:flex-row">
      <MenuAdmin />
      <div className="w-full lg:mx-10 lg:w-3/4 overflow-y-auto">
        <Routes>
          <Route path="crear-proyecto" element={user.isAdmin ? <AddProject /> : <PageError />} />
          <Route path="inicio" element={user.isAdmin ? <HomeAdmin /> : <PageError />} />
          <Route path="inscripcion-admin" element={user.isAdmin ? <InscripcionAdmin /> : <PageError />} />
          <Route path="proyects-admin" element={user.isAdmin ? <ProyectsAdmin /> : <PageError /> } />
          <Route path="circulo-estudio" element={user.isAdmin ? <CirculoEstudio /> : <PageError />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminView;
