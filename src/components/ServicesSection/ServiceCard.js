import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ title, desc, img }) => {
	return (
		<div className='mb-28'>
			<div className='flex'>
				<div className='relative flex-none'>
					<div className='h-32 w-32 bg-gray-200 opacity-30 absolute -top-12 left-0 z-10' />
					<div className='ml-12'>
						<Image src={img} alt="service image" width={354} height={188} />
					</div>
				</div>
				<div className='ml-10'>
					<h3 className='mb-4 text-2xl font-medium'>{title}</h3>
					<p className='max-w-lg'>{desc}</p>
				</div>
			</div>
		</div>
	)
}

export default ServiceCard