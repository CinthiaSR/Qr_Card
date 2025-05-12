import { UserIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <div className="w-full flex justify-end items-center px-6 py-4 bg-white shadow-sm">
            <div className="flex flex-row items-center gap-2 px-2 py-1 rounded">
                <span className="text-lg text-black">|</span>
                <span className="text-lg">
                    <UserIcon className="h-8 w-8 text-[#e79363]" />
                </span>
                <span className="text-sm font-medium text-black">Edward</span>
            </div>
        </div>

    )
}
export default Header