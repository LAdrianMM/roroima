import Head from 'next/head'
import BuildingPage from 'src/components/BuildingPage'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Roroima | Servicio de Transporte Ejecutivo</title>
				<meta name="description" content="Roroima ofrece un servico de transporte ejecutivo de cálidad." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <div>
				<Navbar />
				<Hero />
				<AboutUs />
				<div className="bg-fixed h-96 bg-no-repeat bg-cover bg-[url('../assets/images/trip-bg1.jpg')]" />
				<ServicesSection />
				Nuestra flota sección
				<div className="bg-gray-300 py-16">
					<div className="container mx-auto flex justify-center items-center">
						<div className="">
							<h1 className="font-extrabold text-white text-5xl mb-8">Nuestra flota.</h1>
							<p className="max-w-sm text-slate-600 text-sm mb-10">
								Categorías Ejecutivo y Premium. Contamos con una amplia opción de vehículos que incluyen en ambas
								categorías: sedán, minivan, van, minibus y buses.
							</p>
							<button className="bg-gray-700 text-white rounded-lg py-2 px-6">Saber más</button>
						</div>
						<Image src={carFlotaImg} alt="Car" width={550} height={380} />
					</div>
				</div>
				Fin Nuestra flota sección
				Banner.
				<div className="flex justify-center items-center flex-col max-w-2xl mx-auto">
					<div className="h-32 w-32 bg-gray-400" />
					<h3 className='text-4xl my-10'>Puntualidad. Confort. Seguridad.</h3>
					<p className='text-sm mb-10 text-center text-slate-600'>
						Nuestro equipo de trabajo está conformado con profesionales de gran conocimiento del mercado y lo más
						importante, con entusiasmo y ganas de seguir colaborando con los clientes que han confiado en nuestra
						empresa.
					</p>
				</div>
				Fin Banner
			</div> */}
			<BuildingPage />
		</div>
	)
}
