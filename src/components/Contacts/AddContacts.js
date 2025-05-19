import { QrCodeIcon } from '@heroicons/react/24/outline'
import ListContact from './ListContact'
import PreviewContact from './PreviewContact'
const AddContacts = () => {
    return (
        <div className="flex flex-col lg:flex-row flex-1 p-4 gap-4 overflow-y-auto h-full">
            {/* Panel de Agregar Contacto y QR */}
            <div className="flex-1 min-w-0 bg-white p-4 rounded shadow">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold">Agregar Contacto</h2>
                </div>

                <div className="flex flex-col md:flex-row md:gap-4">
                    {/* Formulario */}
                    <div className="flex-1 p-2">
                        <div className="max-w-full mx-auto p-2">
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Identificador</label>
                                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Casa 1, mi negocio, oficina " />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Nombre</label>
                                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre completo" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Teléfono 1</label>
                                    <input type="tel" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+34 123 456 789" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Teléfono 2</label>
                                    <input type="tel" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+34 987 654 321" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="correo@ejemplo.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Página Web</label>
                                    <input type="url" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://tusitio.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Empresa</label>
                                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre de la empresa" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Puesto</label>
                                    <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu cargo" />
                                </div>

                                {/* Botones */}
                                <div className="sm:col-span-2 flex flex-col sm:flex-row justify-end gap-4 mt-6">
                                    <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">Generar QR</button>
                                    <button type="submit" className="bg-[#e79363] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">Guardar</button>
                                    <button type="button" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-4 mt-4 md:mt-0 md:w-1/3">
                        <PreviewContact />
                        {/* <div className='flex justify-center border rounded-lg border-b-black max-w-full h-60 p-10'>
                            <QrCodeIcon className="h-40 w-40 text-[#e79363]" />
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Panel Lista de Contactos */}
            <div className="w-full lg:w-1/3">
                <ListContact />
            </div>
        </div>
    )
}

export default AddContacts