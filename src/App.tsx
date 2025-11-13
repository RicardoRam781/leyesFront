import './App.css'
import Navbar from './navbar';
import LeyesTable from './table'
import Details from './details'
import AddLaw from './add' // <-- nuevo
import {
  DocumentIcon,
  ClipboardDocumentIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const data = [
  {
    no: "001",
    nombre: "CONSTITUCIÓN Política de los Estados Unidos Mexicanos",
    fechaPublicacion: "05/02/1917",
    fechaReforma: "15/10/2025",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
      { tipo: "DOC", icon: ClipboardDocumentIcon, url: "#" },
      { tipo: "APK", icon: DevicePhoneMobileIcon, url: "#" },
      { tipo: "IOS", icon: DeviceTabletIcon, url: "#" },
    ],
  },
  {
    no: "002",
    nombre: "CÓDIGO Civil Federal",
    fechaPublicacion: "26/05/1928",
    fechaReforma: "17/01/2024",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
      { tipo: "APK", icon: DevicePhoneMobileIcon, url: "#" },
    ],
  },
  {
    no: "003",
    nombre: "CÓDIGO Penal Federal",
    fechaPublicacion: "14/08/1931",
    fechaReforma: "22/08/2023",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
      { tipo: "DOC", icon: ClipboardDocumentIcon, url: "#" },
    ],
  },
  {
    no: "004",
    nombre: "CÓDIGO Fiscal de la Federación",
    fechaPublicacion: "31/12/1981",
    fechaReforma: "27/12/2022",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
    ],
  },
  {
    no: "005",
    nombre: "LEY de Ingresos de la Federación",
    fechaPublicacion: "27/12/1982",
    fechaReforma: "06/11/2024",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
      { tipo: "APK", icon: DevicePhoneMobileIcon, url: "#" },
    ],
  },
  {
    no: "006",
    nombre: "LEY Federal del Trabajo",
    fechaPublicacion: "01/04/1970",
    fechaReforma: "02/05/2024",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
      { tipo: "DOC", icon: ClipboardDocumentIcon, url: "#" },
      { tipo: "IOS", icon: DeviceTabletIcon, url: "#" },
    ],
  },
  {
    no: "007",
    nombre: "LEY de Seguridad Social",
    fechaPublicacion: "21/12/1995",
    fechaReforma: "13/06/2023",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
    ],
  },
  {
    no: "008",
    nombre: "LEY General de Salud",
    fechaPublicacion: "07/02/1984",
    fechaReforma: "11/09/2024",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
      { tipo: "DOC", icon: ClipboardDocumentIcon, url: "#" },
    ],
  },
  {
    no: "009",
    nombre: "LEY General de Educación",
    fechaPublicacion: "13/07/1993",
    fechaReforma: "18/12/2022",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
      { tipo: "APK", icon: DevicePhoneMobileIcon, url: "#" },
      { tipo: "IOS", icon: DeviceTabletIcon, url: "#" },
    ],
  },
  {
    no: "010",
    nombre: "LEY General de Transparencia y Acceso a la Información Pública",
    fechaPublicacion: "04/05/2015",
    fechaReforma: "19/04/2023",
    archivos: [
      { tipo: "PDF", icon: DocumentIcon, url: "#" },
    ],
  },
];


  return (
    <BrowserRouter>
      <main className="min-h-screen">
        <Navbar />
        <div className='m-10' >
          <Routes>
            <Route path="/" element={<LeyesTable data={data} />} />
            <Route path="/buscar" element={<div className="p-6">Buscar (placeholder)</div>} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/add" element={<AddLaw />} /> {/* <-- nueva ruta */}
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
