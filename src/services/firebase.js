import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Importa el servicio de almacenamiento

const firebaseConfig = {
    apiKey: "AIzaSyBYyI2vmxbmDFEP-NjDt1iF4W9_OMIOXDk",
    authDomain: "cssuca-fd79a.firebaseapp.com",
    projectId: "cssuca-fd79a",
    storageBucket: "cssuca-fd79a.appspot.com",
    messagingSenderId: "28009   5716776",
    appId: "1:280095716776:web:d1367fc26ffa097beb599d",
    measurementId: "G-2RQENQQPTK"
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const storage = getStorage(app); // Inicializa el servicio de almacenamiento
