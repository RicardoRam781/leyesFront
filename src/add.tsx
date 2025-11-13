import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddLaw() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    no: '',
    nombre: '',
    fechaPublicacion: '',
    fechaReforma: '',
  })
  const [ok, setOk] = useState(false)

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Enviar nuevo documento:', form)
    setOk(true)
    setTimeout(() => navigate(-1), 1200)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Agregar documento de ley</h1>

      <div className="w-full bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs text-gray-600">No.</span>
              <input name="no" value={form.no} onChange={handleChange} required
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2 text-sm" />
            </label>

            <label className="block">
              <span className="text-xs text-gray-600">Nombre de la ley</span>
              <input name="nombre" value={form.nombre} onChange={handleChange} required
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2 text-sm" />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs text-gray-600">Fecha de publicación</span>
              <input type="date" name="fechaPublicacion" value={form.fechaPublicacion} onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2 text-sm" />
            </label>

            <label className="block">
              <span className="text-xs text-gray-600">Fecha última reforma</span>
              <input type="date" name="fechaReforma" value={form.fechaReforma} onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2 text-sm" />
            </label>
          </div>

          <label className="block">
            <span className="text-xs text-gray-600">Archivo (dummy)</span>
            <input type="file" className="mt-1 block w-full text-sm" />
          </label>

          <div className="flex items-center gap-2">
            <button type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
              Agregar
            </button>
            <button type="button" onClick={() => navigate(-1)} className="px-3 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200">
              Cancelar
            </button>
            {ok && <span className="text-sm text-green-600">Documento agregado (simulado)</span>}
          </div>
        </form>
      </div>
    </div>
  )
}