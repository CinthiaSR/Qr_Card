import { UserIcon, PhoneIcon, EnvelopeOpenIcon, BuildingOfficeIcon, BriefcaseIcon, QrCodeIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const PreviewCard = ({ mostrarQR, onClick, colorSeleccionado }) => {
    const esHex = (color) => color && color.startsWith("#");

    const estiloColor = esHex(colorSeleccionado)
        ? { color: colorSeleccionado }
        : {};

    const convertirBgAText = (bgClass) => {
        if (bgClass.startsWith("bg-")) {
            return bgClass.replace("bg-", "text-");
        }
        return "";
    };

    const claseTexto = !esHex(colorSeleccionado)
        ? convertirBgAText(colorSeleccionado)
        : "";

    return (
        <div className="bg-white p-6 shadow-md h-full">
            <h3 className="text-center font-semibold mb-4">Vista Previa</h3>
            <div className="flex justify-center mb-4">
                {mostrarQR ? (
                    <QrCodeIcon
                        className={`h-46 w-46 ${claseTexto}`}
                        style={estiloColor}
                    />
                ) : (
                    <UserCircleIcon
                        className={`h-46 w-46 ${claseTexto}`}
                        style={estiloColor}
                    />
                )}
            </div>
            <div className="text-sm space-y-2">
                <p className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-gray-600" />
                    <strong>Nombre:</strong> Cinthia Sanchez
                </p>
                <p className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-gray-600" />
                    <strong>Tel:</strong> 6631275952
                </p>
                <p className="flex items-center gap-2">
                    <EnvelopeOpenIcon className="w-4 h-4 text-gray-600" />
                    <strong>Email:</strong> cinthia@dominio.com
                </p>
                <p className="flex items-center gap-2">
                    <BuildingOfficeIcon className="w-4 h-4 text-gray-600" />
                    <strong>Empresa: </strong> TECH
                </p>
                <p className="flex items-center gap-2">
                    <BriefcaseIcon className="w-4 h-4 text-gray-600" />
                    <strong>Puesto:</strong> Dev
                </p>
            </div>
            <div className="flex justify-center gap-3 mt-4">
                <button onClick={onClick} className="bg-[#009688] text-white px-6 py-2 rounded-lg cursor-pointer transition">
                    {mostrarQR ? "Tarjeta" : "QR"}
                </button>
                <button className="bg-[#009688] text-white px-6 py-2 rounded-lg cursor-pointer transition">
                    Descargar
                </button>
            </div>
        </div>
    );
};


export default PreviewCard