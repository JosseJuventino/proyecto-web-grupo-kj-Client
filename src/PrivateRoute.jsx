import { Route, Navigate } from "react-router-dom";

exportfunction PrivateRoute({ path, element }) {
  const user = CheckIfUserLogin();

  return (
    <Route path={path} element={user ? element : <Navigate to="/login" />} />
  );
}
