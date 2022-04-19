import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import logoFacelad from '../../assets/images/LogoFaceLAD.png'
import { motion } from 'framer-motion'
import Head from 'next/head'

const links = [
	{
		icon: '',
		title: 'Whatsapp N°1',
		path: 'https://api.whatsapp.com/send?phone=584143830377&text=Hola%2C%20te%20est%C3%A1s%20comunicando%20con%20Anjuber%20Marrero%3B%20en%20qu%C3%A9%20te%20puedo%20ayudar%3F(%40roroima)%F0%9F%A4%9D',
	},
	{
		icon: '',
		title: 'Whatsapp N°2',
		path: 'https://api.whatsapp.com/send?phone=584242362101&text=Hola%2C%20te%20est%C3%A1s%20comunicando%20con%20M%C3%B3nica%20S%C3%A1nchez%3B%20en%20qu%C3%A9%20te%20puedo%20ayudar%3F(%40roroima)%F0%9F%A4%9D',
	},
	{
		icon: '',
		title: 'Instagram',
		path: 'https://www.instagram.com/roroima/',
	},
	{
		icon: '',
		title: 'Facebook',
		path: 'https://www.facebook.com/roroimatours',
	},
	{
		icon: '',
		title: 'Twitter',
		path: 'https://twitter.com/roroimatours?lang=es',
	},
	{
		icon: '',
		title: 'Vehiculos',
		path: 'https://drive.google.com/file/d/1zGHJpqw3eG6qrA6UFxjadSbwXStG9BmK/view',
	},
	{
		icon: '',
		title: 'Servicios',
		path: 'https://drive.google.com/file/d/19Rcqi6O-RetCfrULOp0OzcIIvjHGrEXi/view',
	},
]

const LinksPage = () => {
	const variants = {
		visible: (i) => ({
			opacity: 1,
			transition: {
				delay: i * 0.15,
			},
			// transition: { staggerChildren: 0.07, delayChildren: 0.2 }
		}),
		hidden: {
			opacity: 0,
			// transition: { staggerChildren: 0.07, delayChildren: 0.2 }
			// staggerChildren: 0.4
		},
	}

	// const variantsItems = {
	// 	hidden: {
	// 		opacity: 0,
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 	},
	// };

	return (
		<>
			<Head>
				<title>Roroima | Servicio de Transporte Ejecutivo</title>
				<meta name="description" content="Roroima ofrece un servico de transporte ejecutivo de cálidad." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-slate-200 min-h-screen flex items-center py-14">
				<div className="max-w-2xl mx-auto w-full">
					<div className="text-center mb-6">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1 }}
						>
							<Image src={logo} alt="Logo Roroima" width={100} height={100} />
						</motion.div>
						<h1 className="font-semibold mb-2 text-lg">@ROROIMA</h1>
						<h3 className="">TRANSPORTE EJECUTIVO</h3>
						<a className="underline text-lg" href="mailto:cotizaciones@roroima.com" target="_blank">
							cotizaciones@roroima.com
						</a>
					</div>
					<div>
						<motion.ul className="flex flex-col justify-center items-center px-5">
							{links.map(({ icon, title, path }, i) => (
								<motion.li
									custom={i}
									variants={variants}
									initial="hidden"
									animate="visible"
									key={path}
									className="w-full text-center text-white font-medium cursor-pointer"
									whileTap={{ scale: 0.9 }}
								>
									<a
										href={path}
										target="_blank"
										className="bg-[#4AA758] text-xl w-full block py-3 my-3 rounded-2xl hover:opacity-90 transition-opacity ease-in-out duration-150"
									>
										{title}
									</a>
								</motion.li>
							))}
						</motion.ul>
					</div>
					{/* <motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1, duration: 1 }}
						className="flex justify-center items-center mt-8"
					>
						<span className="mr-2">Made with ❤ by</span>
						<a href="https://facelad.com" target="_blank">
							<Image src={logoFacelad} alt="Logo Facelad" width={110} height={28} />
						</a>
					</motion.div> */}
				</div>
			</main>
		</>
	)
}

export default LinksPage
