import { HomeIcon, UserIcon, ClipboardDocumentListIcon, ArrowLeftEndOnRectangleIcon, UsersIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
const Sidebar = () => {
    return (
        <div className="md:w-16 bg-teal-600 text-white flex flex-col items-center py-4 space-y-6 md:fixed md:h-screen md:justify-start">
            <div className="hidden md:block text-4xl font-bold text-[#e79363]">A</div>
            <div className="hidden md:flex flex-col justify-between h-full">
                <ul className="flex flex-col gap-6 mt-6 w-6 text-xl">
                    <li className="relative group">
                        <Link href="/dashboard/inicio" className="hover:text-[#e79363]">
                            <HomeIcon className="text-2xl text-center" />
                        </Link>
                        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 
                     bg-gray-800 text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
                            Inicio
                        </span>
                    </li>
                    <li className="relative group">
                        <Link href="/dashboard/contacts" className="hover:text-[#e79363]">
                            <UsersIcon className="text-2xl text-center" />
                        </Link>
                        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 
                     bg-gray-800 text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
                            Lista de contactos
                        </span>
                    </li>
                    <li className="relative group">
                        <Link href="/dashboard/cards" className="hover:text-[#e79363]">
                            <ClipboardDocumentListIcon className="text-2xl text-center" />
                        </Link>
                        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 
                     bg-gray-800 text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
                            Tarjetas
                        </span>
                    </li>
                </ul>
                <ul className="flex flex-col gap-6 mb-6 w-6 text-xl">
                    <li className="relative group">
                        <Link href="" className="hover:text-[#e79363]">
                            <UserIcon className="text-2xl text-center" />
                        </Link>
                        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 
                     bg-gray-800 text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
                            Cuenta
                        </span>
                    </li>
                    <li className="relative group">
                        <Link href="" className="hover:text-[#e79363]">
                            <ArrowLeftEndOnRectangleIcon className="text-2xl text-center" />
                        </Link>
                        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 
                     bg-gray-800 text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-10">
                            Salir
                        </span>
                    </li>
                </ul>
            </div>
            <div className="fixed bottom-0 left-0 right-0 h-12  bg-teal-600  py-3 border-t border-white/20 shadow-md md:hidden">
                <div className='text-white flex justify-around items-center'>
                    <Link href="/">
                        <HomeIcon className="w-8 h-8 hover:text-[#e79363] cursor-pointer" />
                    </Link>
                    <Link href="/contacts">
                        <UsersIcon className="w-8 h-8 hover:text-[#e79363] cursor-pointer" />
                    </Link>
                    <Link href="/cards">
                        <ClipboardDocumentListIcon className="w-8 h-8 hover:text-[#e79363] cursor-pointer" />
                    </Link>
                    <Link href="/">
                        <UserIcon className="w-8 h-8 hover:text-[#e79363] cursor-pointer" />
                    </Link>
                    <Link href="/">
                        <ArrowLeftEndOnRectangleIcon className="w-8 h-8 hover:text-[#e79363] cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Sidebar