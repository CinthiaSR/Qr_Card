import { QrCodeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

const Card = ({ title }) => {
    return (
        <div className="bg-white border rounded p-4 w-48 shadow-sm">
            <div className="bg-teal-600 text-white px-2 py-1 rounded text-sm w-fit mb-2">
                {title}
            </div>
            <div className="flex flex-row items-center gap-2 px-2 py-1 rounded">
                <p className="text-sm mb-3">Saúl Malagón</p>
                <span><QrCodeIcon className="h-16 w-16 text-[#e79363]" /></span> {/* Simulación de QR */}
            </div>
            <div className="flex justify-end text-xl">
                <span className="text-gray-500 hover:text-[#e79363] cursor-pointer"><PencilIcon className="h-6 w-6" /></span>
                <span className="text-gray-500 hover:text-red-600 cursor-pointer"><TrashIcon className="h-6 w-6" /></span>
            </div>
        </div>
    )
}

export default Card