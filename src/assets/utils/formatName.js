function CapitalizarLetras(nombre) {
    return nombre
      .toLowerCase()
      .replace(/\b\w/g, (letra) => letra.toUpperCase());
    }

export function cutName(completeName) {
    const partesNombre = completeName.split(" ");

    const primerNombre = partesNombre[0];
    const primerApellido =
      partesNombre.length > 1 ? partesNombre[partesNombre.length - 2] : "";
    const nombreDepurado = CapitalizarLetras(
      primerNombre + " " + primerApellido
    );
    return nombreDepurado;
}