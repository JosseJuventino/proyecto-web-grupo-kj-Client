function Dropdown() {
  return (
    <>
      <div className="pl-4">
        <select className="bg-gray-200 rounded-xl p-4 ">
          <option value="primerAnio ">1° año</option>
          <option value="segundoAnio">2° año</option>
          <option value="terceranio ">3° año</option>
          <option value="cuartoanio">4° año</option>
          <option value="quintoanio">5° año</option>
        </select>
      </div>
    </>
  );
}

export default Dropdown;
