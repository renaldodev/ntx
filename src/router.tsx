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
import { Chart } from "./pages/home";
import { PlataformaRegister } from "./pages/plataforma";
import { PocoRegister } from "./pages/poco/register.tsx";
import { FichaDeHidroCarbonoRegister } from "./pages/fichaHidrocarbonato.tsx/register.tsx";
import { FichaMagneticaRegister } from "./pages/fichaMagnetica/register.tsx";
import { FichaSismicaRegister } from "./pages/fichaSismica/register.tsx";
import { FichaDeTesteRegister } from "./pages/fichaTeste/register.tsx";
import { FichaGeologicaRegister } from "./pages/fichaGeologica.tsx/register.tsx";
import { FichaPerfuracaoRegister } from "./pages/fichaPerfuracao/register.tsx";
import { FichaGravimetricaRegister } from "./pages/fichaGravimetrica/register.tsx";

import { PocoManagement } from "./pages/poco/management.tsx";
import { PlataformaManagement } from "./pages/plataforma/management";
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
							<Route path={"/home"} element={<Chart />} />
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
								element={<PlataformaManagement />}
							/>
							<Route path={"/poco/create"} element={<PocoRegister />} />
							<Route path={"/poco/management"} element={<PocoManagement />} />
							<Route
								path={"/ficha/hidrocarbonato/create"}
								element={<FichaDeHidroCarbonoRegister />}
							/>
							<Route
								path={"/ficha/teste/create"}
								element={<FichaDeTesteRegister />}
							/>
							<Route
								path={"/ficha/sismica/create"}
								element={<FichaSismicaRegister />}
							/>
							<Route
								path={"/ficha/magnetica/create"}
								element={<FichaMagneticaRegister />}
							/>
							<Route
								path={"/ficha/geologica/create"}
								element={<FichaGeologicaRegister />}
							/>
							<Route
								path={"/ficha/gravimetrica/create"}
								element={<FichaGravimetricaRegister />}
							/>
							<Route
								path={"/ficha/perfuracao/create"}
								element={<FichaPerfuracaoRegister />}
							/>
						</Route>
						<Route path="*" element={<Error401 />} />
					</Routes>
				</React.Suspense>
			</BrowserRouter>
		</React.Fragment>
	);
}
