import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const visiblePages = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center mt-6 space-x-2 mb-5">
            {/* Botón anterior */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-md border text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {/* Paginación completa (solo visible en md+) */}
            <div className="hidden md:flex space-x-1">
                {visiblePages().map((page, index) =>
                    page === "..." ? (
                        <span key={index} className="px-2 text-sm text-gray-500">
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`px-3 py-1 rounded-md border text-sm ${page === currentPage
                                ? "bg-blue-600 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {page}
                        </button>
                    )
                )}
            </div>

            {/* Paginación móvil: solo muestra la página actual */}
            <span className="md:hidden text-sm text-gray-600">
                Página {currentPage} de {totalPages}
            </span>

            {/* Botón siguiente */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md border text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            >
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination;
