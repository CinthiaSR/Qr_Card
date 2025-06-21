const SummaryPanel = () => {
    return (
        <div className="w-48 bg-white p-4 shadow-md ml-4">
            <div className="bg-teal-500 text-white p-3 rounded mb-4">
                <p className="text-sm">Total Contactos</p>
                <p className="text-xl font-bold">230</p>
            </div>
            <div className="bg-gray-200 p-3 rounded">
                <p className="text-sm">Total tarjetas</p>
                <p className="text-xl font-bold">60</p>
            </div>
        </div>
    );
}

export default SummaryPanel