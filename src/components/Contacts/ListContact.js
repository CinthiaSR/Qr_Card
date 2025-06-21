"use client"
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import Pagination from 'utils/Pagination';


const ListContact = ({ arrListContact, onEdit, onDelete }) => {
    const [page, setPage] = useState(1);
    const total = 10;
    return (
        <div className="bg-white p-6 shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4">Lista de Contactos</h2>

            {arrListContact.map((contact, i) => (
                <div key={i} className="flex justify-between bg-gray-200 p-3 rounded mb-4">
                    <p className="text-sm">{contact.id}.- {contact.identifier} | {contact.name} </p>
                    <div className='flex'>
                        <span className='text-black hover:text-[#e79363] cursor-pointer'>
                            <PencilIcon className="h-5 w-5" onClick={() => onEdit(contact.id)} />
                        </span>
                        <span className='text-black hover:text-red-600 cursor-pointer'>
                            <TrashIcon className="h-5 w-5" onClick={() => onDelete(contact.id)} />
                        </span>
                    </div>
                </div>
            ))}

            {/* <Pagination currentPage={page} totalPages={total} onPageChange={setPage} /> */}
        </div>
    );
}

export default ListContact