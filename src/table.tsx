import { useNavigate } from "react-router-dom";

export default function LeyesTable({ data }) {

    const navigate = useNavigate()

    const handleClick = (item:any) => {
        navigate(`/details/${item.no}`)
    }

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ley 
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Última Reforma
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Texto Vigente
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.no} className="hover:bg-gray-50 transition" onClick={() => handleClick(item)}>
              <td className="px-6 py-4 text-sm text-gray-700">{item.no}</td>

              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-800">{item.nombre}</div>
                <div className="text-xs text-gray-500">{item.fechaPublicacion}</div>
              </td>

              <td className="px-6 py-4 text-sm">
                <span className="text-gray-700">  {item.fechaReforma}</span>
              </td>

              <td className="px-6 py-4">
                <div className="flex gap-2">
                  {item.archivos?.map((archivo, idx) => {
                    const Icon = archivo.icon;
                    return (
                      <a
                        key={idx}
                        href={archivo.url}
                        target="_blank"
                        className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs transition"
                      >
                        <Icon className="w-4 h-4" />
                        {archivo.tipo}
                      </a>
                    );
                  })}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
