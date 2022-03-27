import React from 'react'
import ServiceCard from './ServiceCard'

import imgCard1 from '../../assets/images/card-service-1.png'
import imgCard2 from '../../assets/images/card-service-2.jpg'
import imgCard3 from '../../assets/images/card-service-3.jpg'

const listOfServices = [
	{
		id: 0,
		title: 'TRANSPORTE EJECUTIVO EMPRESAS',
		desc: 'Convenios con empresas, contáctenos y deje en nuestras manos el traslado de sus ejecutivos. Tenemos capacidad técnica y personal para atender sus requerimientos. Garantizamos puntualidad, confort, comodidad, seguridad. Además, podrá llevar un control de gastos y seguimientos en tiempo real de los servicios a través de un moderno sistema digital y aplicación móvil.',
		img: imgCard1,
	},
	{
		id: 1,
		title: 'GRUPOS CORPORATIVOS',
		desc: 'Cobertura especial para eventos corporativos, deportivos, artisticos u otros, Contamos con vehículos de alta gama desde sedán a buses de hasta 44 pasajeros, con una capacidad para atender hasta 3.000 pasajeros simultaneamente. Esto gracias a una gran logística interna a través de ejecutivos de reservas, controladores de trafico, coordinadores en terreno y todo lo que sea necesario para garantizar un servicio de calidad sin margen de error.',
		img: imgCard2,
	},
	{
		id: 3,
		title: 'TURISMO PREMIUM',
		desc: 'Santiago y sus alrededores es un destino lleno de sorpresas, puede disfrutar de un City Tour Santiago y su contraste entre el centro histórico con su arquitectura antigua y el centro financiero más moderno de Latinoamerica, y no puede dejar de visitar los más exclusivos viñedos de los Valles de Colchagua, Maipo, Aconcagua y Casablanca.',
		img: imgCard3,
	},
]

const ServicesSection = () => {
	return (
		<div className="bg-gray-900 text-white">
			<div className="container mx-auto py-20 flex flex-col items-center">
				<h1 className="text-7xl text-white">Servicios</h1>
				<div className='mt-32'>
					{listOfServices.map(({ id, title, desc, img }) => (
						<ServiceCard key={id} title={title} desc={desc} img={img} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ServicesSection
