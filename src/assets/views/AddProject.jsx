import ProjectModel from "../components/ProjectModel/ProjectModel";


function AddProject() {
  
  return (
    <>
        <div className="w-full">
          <div>
            <h2 className="text-center text-3xl my-10">Agregar proyectos</h2>
          </div>
          <ProjectModel />
        </div>
    </>
  );
}

export default AddProject;
