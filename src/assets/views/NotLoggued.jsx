import buhoPolicia from "../images/buho-policia.png";
import CommonButton from "../components/common-button/CommonButton";
export function NotLoggued() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={buhoPolicia} className="w-60" alt="buho Policia UCA" />
      <h2 className="text-center text-2xl mt-10">
        ¡Ops! Parece que nuestro búho está protegiendo esta página. <br /> 😮
        Inicia sesión para desbloquear el acceso y explorar más.
      </h2>

      <CommonButton text={"¡Inicia sesión y explora!"} link={"/login"} />
    </div>
  );
}
