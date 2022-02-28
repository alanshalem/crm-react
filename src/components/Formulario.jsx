import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Alerta from "./Alerta";

const Formulario = () => {
	const navigate = useNavigate();
	// Validacion con Yup
	const nuevoClienteSchema = Yup.object().shape({
		nombre: Yup.string()
			.min(3, "El nombre es muy corto")
			.max(20, "El nombre es muy largo")
			.required("El nombre del Cliente es obligatorio"),
		empresa: Yup.string().required("La empresa es obligatoria"),
		email: Yup.string()
			.email("El email no es válido")
			.required("El email es obligatorio"),
		telefono: Yup.number()
			.integer("Numero no valido")
			.positive("Numero no valido")
			.typeError("El numero no es valido"),
	});

	const handleSubmit = async (valores) => {
		try {
			const url = "http://localhost:4000/clientes";
			const respuesta = await fetch(url, {
				method: "POST",
				body: JSON.stringify(valores),
				headers: {
					"Content-Type": "application/json",
				},
			});

			console.log(respuesta);
			const resultado = await respuesta.json();
			console.log(resultado);
			navigate("/clientes");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
			<h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
				Agregar Cliente
			</h1>
			{/* Formulario con Formik */}
			<Formik
				initialValues={{
					nombre: "",
					empresa: "",
					email: "",
					telefono: "",
					notas: "",
				}}
				onSubmit={(values, { resetForm }) => {
					handleSubmit(values);
					resetForm();
				}}
				validationSchema={nuevoClienteSchema}
			>
				{({ errors, touched }) => {
					// console.log(touched);
					return (
						<Form className='mt-10'>
							<div className='mb-4'>
								<label
									className='text-gray-800'
									htmlFor='nombre'
								>
									Nombre:{" "}
								</label>
								<Field
									id='nombre'
									type='text'
									className='mt-2 block w-full p-3 bg-gray-50'
									placeholder='Nombre del Cliente'
									name='nombre'
								/>
								{errors.nombre && touched.nombre ? (
									<Alerta>{errors.nombre}</Alerta>
								) : null}
							</div>
							<div className='mb-4'>
								<label
									className='text-gray-800'
									htmlFor='empresa'
								>
									Empresa:{" "}
								</label>
								<Field
									id='empresa'
									type='text'
									className='mt-2 block w-full p-3 bg-gray-50'
									placeholder='Empresa del Cliente'
									name='empresa'
								/>
								{errors.empresa && touched.empresa ? (
									<Alerta>{errors.empresa}</Alerta>
								) : null}
							</div>{" "}
							<div className='mb-4'>
								<label
									className='text-gray-800'
									htmlFor='email'
								>
									Email:{" "}
								</label>
								<Field
									id='email'
									type='text'
									className='mt-2 block w-full p-3 bg-gray-50'
									placeholder='Email del Cliente'
									name='email'
								/>
								{errors.email && touched.email ? (
									<Alerta>{errors.email}</Alerta>
								) : null}
							</div>
							<div className='mb-4'>
								<label
									className='text-gray-800'
									htmlFor='telefono'
								>
									Telefono:{" "}
								</label>
								<Field
									id='telefono'
									type='tel'
									className='mt-2 block w-full p-3 bg-gray-50'
									placeholder='Teléfono del Cliente'
									name='telefono'
								/>
								{errors.telefono && touched.telefono ? (
									<Alerta>{errors.telefono}</Alerta>
								) : null}
							</div>
							<div className='mb-4'>
								<label
									className='text-gray-800'
									htmlFor='notas'
								>
									Notas:{" "}
								</label>
								<Field
									as='textarea'
									id='notas'
									type='text'
									className='mt-2 block w-full p-3 bg-gray-50'
									placeholder='Notas del Cliente'
									name='notas'
								/>
							</div>
							<input
								type='submit'
								value='Agregar Cliente'
								className='mt-5 w-full p-3 bg-blue-800 text-white uppercase font-bold text-lg cursor-pointer hover:bg-blue-600'
							/>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default Formulario;
