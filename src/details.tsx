import { useParams, useNavigate } from 'react-router-dom'

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200"
      >
        ← Volver
      </button>

      <h1 className="text-2xl font-bold">Detalle de la Ley (IA summary) — {id}</h1>
      <p className="mt-3 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam officia possimus nisi rerum deleniti praesentium recusandae, tempore quod commodi amet tenetur consequatur expedita maiores saepe quae unde, natus excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta doloremque sapiente corporis ea perferendis quidem, dignissimos eaque magni, atque alias excepturi assumenda eum dolore, aliquid accusantium aliquam veritatis minima? {id}.</p>

      {/* Ejemplo: fetch de datos por id y renderizado */}
    </div>
  )
}