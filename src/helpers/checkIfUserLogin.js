import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { getUserByEmail, createUser } from "../services/user.service";

export const CheckIfUserLogin = () => {
  const [user, setUser] = useState(null);

  const checkUser = () => {
    const unsuscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        
        try {
          const userExists = await getUserByEmail(authUser.email);
          if (userExists && Object.keys(userExists).length != 0) {
            setUser(userExists);
          } else {
            /**Si el correo no existe  crear un usuario por defecto */
            const userObject = {
              name: authUser.displayName,
              email: authUser.email,
              profilePicture: authUser.photoURL,
              externalHours: 0,
              internalHours: 0,
              projectsActives: [],
              finishedProjects: [],
              projectFavorites: [],
              isAdmin: false,
              isTutor: false,
            };

            if (userObject.email.endsWith("@uca.edu.sv")) {
              localStorage.setItem("user", JSON.stringify(userObject));
              localStorage.setItem("isLoggedIn", true);
              setUser(userObject);
              createUser(userObject);
              console.log(
                "el correo no existe en la base de datos, usuario creado" +
                  userObject
              );
            } else {
              localStorage.removeItem("user");
              setUser(null);
            }
          }
        } catch (error) {
          console.error("ERROR CHECKING USER");
        }
      } else {
        localStorage.removeItem("user");
        setUser(null);
      }
    });

    return () => unsuscribe();
  };

  useEffect(checkUser, []);

  return user;
};
