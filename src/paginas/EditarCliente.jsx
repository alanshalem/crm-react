import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
	const [cliente, setCliente] = useState({});
	const [cargando, setCargando] = useState(true);
	const params = useParams();
	const { id } = params;
	useEffect(() => {
		const obtenerClienteAPI = async () => {
			try {
				const url = `${import.meta.env.VITE_API_URL}/clientes/${id}`;
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();
				setCliente(resultado);
			} catch (error) {
				console.log(error);
			}
			setCargando(!cargando);
		};
		obtenerClienteAPI();
	}, []);

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>
				Editar Cliente
			</h1>
			<p className='mt-3'>
				Llena los siguientes campos para registrar un cliente
			</p>
			{cliente?.nombre ? (
				<Formulario cliente={cliente} cargando={cargando} />
			) : (
				<p>Cliente ID no valido</p>
			)}
		</>
	);
};

export default EditarCliente;
