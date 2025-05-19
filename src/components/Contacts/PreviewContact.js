import { UserIcon, PhoneIcon, EnvelopeOpenIcon, BuildingOfficeIcon, BriefcaseIcon, QrCodeIcon } from "@heroicons/react/24/outline";

const PreviewContact = () => {
    return (
        <div className="bg-white p-2 h-full">
            <h3 className="text-center font-semibold mb-4">Vista Previa</h3>
            <div className="flex justify-center mb-4">
                <UserIcon
                    className={`h-30 w-40`}
                />
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
        </div>
    );
};


export default PreviewContact