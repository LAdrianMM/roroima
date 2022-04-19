import Link from 'next/link'
import React from 'react'

const listPaths = [
  { id: 0, label: 'Inicio', path: '/' },
  { id: 1, label: 'Cotizar Traslado', path: '/' },
  { id: 2, label: 'Servicios', path: '/' },
  { id: 3, label: 'Nuestra flota', path: '/' },
  { id: 4, label: 'Convenios', path: '/' },
]
const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 fixed inset-x-0 top-0">
      <nav className="container mx-auto py-6 flex items-center justify-between">
        <div className="w-32 h-14 bg-gray-200" />
        <ul className="flex items-center space-x-10">
          {listPaths.map(({ id, label, path }) => (
            <Link href={path} key={id}>
              <a className="font-bold text-lg">{label}</a>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
