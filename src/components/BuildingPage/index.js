import { useRouter } from 'next/router'

import React, { useEffect } from 'react'

const BuildingPage = () => {
	const router = useRouter()

	useEffect(() => {
		router.push('/links')
	}, [])

	return (
		<div></div>
	)
}

export default BuildingPage