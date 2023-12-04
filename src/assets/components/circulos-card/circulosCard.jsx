function CirculosCard() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="overflow-hidden bg-white rounded-md flex">
          <div className="w-full md:w-1/2">
            <figure className="object-cover">
              <img
                src="https://imgs.search.brave.com/iattWdpx9Ji64iifMdnlOOk-SMZP_09v8moq8vag87s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vcGVu/c3RheC5vcmcvYXBw/cy9pbWFnZS1jZG4v/djEvZj13ZWJwL2Fw/cHMvYXJjaGl2ZS8y/MDIzMDgyOC4xNjQ2/MjAvcmVzb3VyY2Vz/LzM4YjIyMDZjYzA2/MDg4MWMxYjUzZWIz/Yzc3YTk1NTRhZmNl/NTJhMmI"
                alt=""
                className="w-full object-cover h-full"
              />
            </figure>
          </div>
          <div className="p-5 flex flex-col items-center w-full md:w-1/2">
            <h2 className="text-2xl text-center mb-2">Calculo II</h2>
            <div className="rounded-full border-4 border-black flex items-center justify-center w-20 h-20">
              <p className="text-2xl font-bold">10</p>
            </div>
            <p>Horas efectivas</p>

            <a
              href="https://drive.google.com/drive/u/1/folders/1OXdaE968rLOI1IX7mcRnRIRbZVtNVNOP?pli=1"
              className="bg-gray-950 px-5 py-2 text-white rounded-lg mt-2"
            >
              <i className="fa-brands fa-google-drive"></i> Carpeta Drive
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CirculosCard;
