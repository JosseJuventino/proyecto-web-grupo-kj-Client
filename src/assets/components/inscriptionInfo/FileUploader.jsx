import { useState } from "react";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Aquí puedes agregar la lógica para subir el archivo al servidor
    if (selectedFile) {
      console.log("Subiendo archivo:", selectedFile);
      // Puedes utilizar una API, una biblioteca como axios, o realizar alguna otra acción aquí
    } else {
      console.error("Ningún archivo seleccionado");
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 border-neutral-700 border-dashed border-4 bg-white rounded-md shadow-md flex flex-col">
      <h1 className="text-2xl font-semibold mb-2">Subir Archivos</h1>

      <div className="relative overflow-hidden inline-block">
      <button
        onClick={handleUpload}
        className="bg-zinc-600 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded my-5"
      >
        Subir Archivo
      </button>
      <input
        type="file"
        accept="image/*, .pdf" // Acepta solo archivos de tipo imagen
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      </div>

      {selectedFile ?  ( 
        <div className="mb-4">
          <p className="font-semibold">Archivo Seleccionado:</p>
          <p>{selectedFile.name}</p>
        </div>
      ): (
        <p className="mb-4">Ningún archivo seleccionado</p>
      )}


    </div>
  );
};

export default FileUploader;
