import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/clientes");
	};
	return (
		<div className='min-h-screen bg-blue-900'>
			<h1 className='text-6xl font-black text-center text-white pt-10'>
				CRM - Clientes
			</h1>
			<div className='flex justify-center mt-10'>
				<button
					onClick={handleClick}
					className=' text-white uppercase font-bold text-2xl bg-yellow-300 hover:bg-yellow-500 mt-2  p-3'
				>
					Ingresar al sitio
				</button>
			</div>
		</div>
	);
};

export default Home;
