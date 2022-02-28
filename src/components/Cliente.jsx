import React from "react";
import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente, handleEliminar }) => {
	const { nombre, empresa, email, telefono, notas, id } = cliente;
	const navigate = useNavigate();

	return (
		<>
			<tr className='border-b hover:bg-gray-50' key={id}>
				<td className='border p-3'>{nombre}</td>
				<td className='border p-3'>
					<p>
						<span className='text-gray-800 upercase font-bold'>
							Email:{" "}
						</span>
						{email}
					</p>
					<p>
						<span className='text-gray-800 upercase font-bold'>
							Tel:{" "}
						</span>
						{telefono}
					</p>
				</td>
				<td className='border p-3'>{empresa}</td>
				<td className='border p-3'>
					<button
						className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs'
						type='button'
						onClick={() => navigate(`/clientes/${id}`)}
					>
						Ver
					</button>
					<button
						className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3'
						type='button'
						onClick={() => navigate(`/clientes/editar/${id}`)}
					>
						Editar
					</button>
					<button
						className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3'
						type='button'
						onClick={() => handleEliminar(id)}
					>
						Eliminar
					</button>
				</td>
			</tr>
		</>
	);
};

export default Cliente;
