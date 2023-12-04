import jsPDF from "jspdf";
import "jspdf-autotable";
import { useState } from "react";
import LogoUca from "../../images/logo_uca.png";
import "./TableAdmin.css";
import { format } from "date-fns";
import { NavLink, } from "react-router-dom";

function ProyectsAdmin({ header, rows, showAction, showCheckbox }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState(" Reporte de proyectos");
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const generatePDF = () => {
    if (!fileName) {
      return;
    }
    const pdf = new jsPDF();

    // Configuración de la tabla
    const tableConfig = {
      startY: 60,
      head: [header],
      body: rows,
      theme: "grid",
      styles: {
        textColor: [0, 0, 0],
        cellWidth: "auto", // Cambiado de "wrap" a "auto"
        head: { fillColor: [0, 0, 0], textColor: [255, 255, 255] },
      },
      // Añadir estas opciones para manejar el ancho de la página
      tableWidth: "auto",
      margin: { right: 20, left: 20 },
      columnWidth: "wrap",
    };

    // Agregar título al PDF
    const titleFontSize = 18;
    pdf.setFontSize(titleFontSize);

    const titleText = `Reporte de proyectos generado`;
    const titleWidth =
      (pdf.getStringUnitWidth(titleText) * titleFontSize) /
      pdf.internal.scaleFactor;

    const pageWidth = pdf.internal.pageSize.width;
    const titleX = (pageWidth - titleWidth) / 2;
    pdf.setFont("helvetica");
    pdf.text(titleX, 20, titleText);

    // Agregar imagen a la derecha
    const imgWidth = 37; // Ancho de la imagen
    const imgHeight = 40; // Altura de la imagen
    const imgX = pageWidth - imgWidth - 10; // Desplazar la imagen a la izquierda
    const imgY = 10; // Desplazar la imagen hacia abajo

    pdf.addImage(LogoUca, "PNG", imgX, imgY, imgWidth, imgHeight);

    // Agregar fontsize y texto de fecha y hora
    const dateTimeFontSize = 14;
    pdf.setFontSize(dateTimeFontSize);

    const dateText = "Fecha:";
    const timeText = "Hora:";

    pdf.setFont("helvetica");
    pdf.text(20, 40, `${dateText} ${new Date().toLocaleDateString()}`);
    pdf.text(20, 50, `${timeText} ${formatHour(new Date())}`);

    // Generar la tabla en el PDF
    pdf.autoTable(tableConfig);

    const footerFontSize = 14;
    pdf.setFontSize(footerFontSize);

    // Agregar el total de filas al PDF
    const totalRowsText = `Total de datos generados: ${rows.length}`;
    const textWidth = pdf.getStringUnitWidth(totalRowsText) * 5;
    const textX = pageWidth - textWidth - 20;
    pdf.setFont("helvetica");
    pdf.text(textX, pdf.internal.pageSize.height - 10, totalRowsText);

    // Guardar el PDF
    pdf.save(`${fileName}.pdf`);

    // Reiniciar el estado del checkbox después de generar el PDF
    setIsChecked(false);
    setIsModalOpen(false);
  };

  // Función para formatear la hora en "hora:minutos"
  const formatHour = (date) => {
    return format(date, "hh:mm a");
  };

  const handleEditClick = (rowData) => {
    // Verificar si rowData tiene datos
    if (selectedRowData && selectedRowData.length > 0) {
      // Obtener el nombre del proyecto desde la primera columna de la fila seleccionada
      const projectName = selectedRowData[0];
      
      localStorage.setItem("projectName", projectName)
    }
  };
  


  return (
    <>
      {/*para que no de error el useState quitalo cuando lo enlaces tambien tiene el console.log */}
      {selectedRowData && (
        <div className="bg-black text-white p-10 w-60">
          <ul>
            {selectedRowData.map((data, index) => (
              <li key={index}>{data}</li>
              
            ))}
            
          </ul>
        </div>
      )}

      <NavLink to={"/administrator/dashboard/crear-proyecto"}  className="ml-10 mt-4 lg:mt-8 bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
        <i className="lg:text-lg mr-2 fa-solid fa-plus"></i>
        Añadir proyecto
      </NavLink>

      
      <NavLink to={"/administrator/dashboard/crear-proyecto"} onClick={ handleEditClick } className="ml-10 mt-4 lg:mt-8 lg:mr-6 bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
        Editar
        <i className="lg:text-lg ml-2 lg:ml-10 pencil-icon fa-solid fa-pencil"></i>
      </NavLink>

      <button
        onClick={() => setIsModalOpen(true)}
        className="ml-3 mr-8 mt-8 lg:mt-4 pl-3 bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
      >
        Generar PDF
        <i className="lg:text-lg ml-2 lg:ml-5 pdf-generator fa-solid fa-file-pdf"></i>
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Ingrese el nombre del archivo</h2>
            <input
              type="text"
              placeholder="Nombre del archivo"
              value={fileName}
              onChange={handleFileNameChange}
            />
            <div className="modal-buttons">
              <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
              <button onClick={generatePDF}>Generar</button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center m-8 overflow-x-auto">
        <div className="table-container">
          <table className="w-full border-collapse">
            <thead className="bg-black text-white">
              <tr>
                {header.map((column, index) => (
                  <th
                    key={index}
                    className={`p-5 font-bold text-left ${
                      showCheckbox && index === header.length - 1
                        ? "rounded-r-lg"
                        : index === 0
                        ? "rounded-l-lg"
                        : ""
                    } border-black`}
                  >
                    {column}
                  </th>
                ))}
                {showAction && (
                  <th className="p-5 font-bold text-left border-black rounded-r-lg">
                    Acción
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((rowData, rowIndex) => (
                <tr key={rowIndex} onClick={() => handleRowClick(rowData)}>
                  {rowData.map((cellData, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`p-5 py-5 text-zinc-500 hover:text-blue-500  text-left border-b-2`}
                    >
                      {cellData}
                    </td>
                  ))}
                  {showCheckbox && (
                    <td className="p-5 py-5 text-zinc-500 text-left border-b-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      />
                    </td>
                  )}
                  {showAction && (
                    <td className="p-5 py-5 text-zinc-500 text-left border-b-2">
                      <i className="fa-solid fa-eye-slash"></i>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProyectsAdmin;
