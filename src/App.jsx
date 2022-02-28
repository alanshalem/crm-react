import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import EditarCliente from "./paginas/EditarCliente";
import Home from "./paginas/Home";
import Inicio from "./paginas/Inicio";
import NuevoCliente from "./paginas/NuevoCliente";
import VerCliente from "./paginas/VerCliente";
function App() {
	// console.log(import.meta.env.VITE_API_URL);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
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
