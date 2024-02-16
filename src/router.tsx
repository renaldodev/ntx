import React from "react";
import App from "./pages/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./firebase/auth.tsx";
import Login from "./firebase/login.tsx";
import Loader from "./components/common/loader/loader.tsx";
import {
  OperadorRegister,
  OperadorManagement,
  OperadorUpdate,
} from "./pages/operator";
import { BlocoRegister, BlocoManagement } from "./pages/blocos";
import { PlataformManagement, PlataformaRegister } from "./pages/plataforma";
import { PocoRegister } from "./pages/poco/register.tsx";
import Error401 from "./pages/401/index.tsx";

export function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path={"/"} element={<Auth />}>
              <Route index element={<Login />} />
            </Route>
            <Route path={"/"} element={<App />}>
              <Route path={"/operador/create"} element={<OperadorRegister />} />
              <Route
                path={"/operador/management"}
                element={<OperadorManagement />}
              />
              <Route path={"/operador/update"} element={<OperadorUpdate />} />
              <Route path={"/bloco/create"} element={<BlocoRegister />} />
              <Route path={"/bloco/management"} element={<BlocoManagement />} />
              <Route
                path={"/plataforma/create"}
                element={<PlataformaRegister />}
              />
              <Route
                path={"/plataforma/management"}
                element={<PlataformManagement />}
              />
              <Route path={"/poco/create"} element={<PocoRegister />} />
            </Route>
            <Route path="*" element={<Error401 />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}
