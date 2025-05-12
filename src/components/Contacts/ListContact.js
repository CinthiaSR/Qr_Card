"use client"
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import Pagination from '@components/utils/Pagination';


const ListContact = () => {
    const [page, setPage] = useState(1);
    const total = 10;
    return (
        <div className="bg-white p-6 shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4">Lista de Contactos</h2>

            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between bg-gray-200 p-3 rounded mb-4">
                    <p className="text-sm">Juana Clara Nereida Aguilar Gonzalez</p>
                    <div className='flex'>
                        <span className='text-black hover:text-[#e79363] cursor-pointer'><PencilIcon className="h-5 w-5" /></span>
                        <span className='text-black hover:text-red-600 cursor-pointer'><TrashIcon className="h-5 w-5" /></span>
                    </div>
                </div>
            ))}

            <Pagination currentPage={page} totalPages={total} onPageChange={setPage} />
        </div>
    );
}

export default ListContact