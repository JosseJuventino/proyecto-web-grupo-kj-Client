import ResumeCircles from "./resumeCircles";
import ProfileName from "./ProfileName";
import { CheckIfUserLogin } from "../../../helpers/checkIfUserLogin";
function Resume() {

  const user = CheckIfUserLogin();

  return (
    <>
      <div className="flex flex-row justify-center">
        {user ? (
          <div className="container mt-10 flex flex-col md:flex-row justify-around items-center">
            <ProfileName />
            <div className="flex items-center flex-row text-center">
              <ResumeCircles hours={user.internalHours} text="Horas internas" />
              <ResumeCircles hours={user.externalHours} text="Horas externas" />
            </div>
          </div>
        ) : (
          <p>No deberias estar acá</p>
        )}
      </div>
    </>
  );
}

export default Resume;
