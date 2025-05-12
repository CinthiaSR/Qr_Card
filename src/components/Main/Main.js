"use client"
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import CardList from "../Cards/CardList"
import SummaryPanel from "../Sidebar/SummaryPanel"

const Main = () => {
    return (
        <div className="flex flex-1 p-6 gap-6 overflow-hidden h-full">
            <div className="flex-1 min-w-0 bg-white p-4 rounded shadow">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold">Tarjetas creadas</h2>
                    <div className='flex justify-between'>
                        <span className='px-3 py-2'>Agregar nuevo </span>
                        <span><PlusCircleIcon className="w-10 h-10 text-[#e79363] hover:text-3 cursor-pointer" /></span>
                    </div>
                </div>
                <CardList />
            </div>
            <SummaryPanel />
        </div>
    )
}
export default Main