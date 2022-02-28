import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./paginas/Inicio";
import NuevoCliente from "./paginas/NuevoCliente";
import EditarCliente from "./paginas/EditarCliente";
import VerCliente from "./paginas/VerCliente";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Su masterpage va a ser Layout, el codigo se inyecta dentro de layout */}
				<Route path='/clientes' element={<Layout />}>
					<Route index element={<Inicio />} />
					<Route path='nuevo' element={<NuevoCliente />} />
					<Route path='editar/:id' element={<EditarCliente />} />
					<Route path=':id' element={<VerCliente />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
