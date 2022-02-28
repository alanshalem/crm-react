import { useState, useEffect } from "react";
import Cliente from "../components/Cliente";
const Inicio = () => {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		const obtenerClientesApi = async () => {
			try {
				const url = import.meta.env.VITE_API_URL;
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();
				console.log(resultado);
				setClientes(resultado);
			} catch (error) {}
		};
		obtenerClientesApi();
	}, []);

	const handleEliminar = async (id) => {
		const confirmar = confirm("¿Deseas eliminar este cliente?");
		if (confirmar) {
			try {
				const url = `${import.meta.env.VITE_API_URL}/clientes/${id}`;
				const respuesta = await fetch(url, {
					method: "DELETE",
				});
				const resultado = await respuesta.json();
				// location.reload();
				const arrayClientes = clientes.filter(
					(cliente) => cliente.id !== id
				);
				setClientes(arrayClientes);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
			<p className='mt-3'>Administra tus clientes</p>
			<table className='w-full mt-5 table-auto shadow bg-white'>
				<thead>
					<tr>
						<th className='p-2'>Nombre</th>
						<th className='p-2'>Contacto</th>
						<th className='p-2'>Empresa</th>
						<th className='p-2'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{clientes.map((cliente) => (
						<Cliente
							key={cliente.id}
							cliente={cliente}
							handleEliminar={handleEliminar}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Inicio;
