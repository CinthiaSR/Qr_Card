import { UserIcon, PhoneIcon, EnvelopeOpenIcon, BuildingOfficeIcon, BriefcaseIcon, QrCodeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import axiosInstance from "@lib/axiosInstance";
import { useEffect, useState } from "react";

const key = Object.keys(sessionStorage).find(k => k.startsWith('oidc.user:'));
const data = JSON.parse(sessionStorage.getItem(key));
const userId = data?.profile.sub


const PreviewCard = ({ mostrarQR, onClick, colorSeleccionado, onSeleted }) => {
    const esHex = (color) => color && color.startsWith("#");
    const [getInfoContact, setInfoContact] = useState({})
    console.log("seleccionado desde preview", onSeleted)

    useEffect(() => {
        getByContact(onSeleted)
    }, [onSeleted]);

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

    const getByContact = async (onSeleted) => {
        const contactId = onSeleted
        console.log("CONTACT ID FROM FUNCTION: ", contactId)
        try {
            const response = await axiosInstance.get(`/${userId}/contacts/${contactId}`)
            console.log("RESPONSE DATA...", response.data)
            setInfoContact(response.data);
        } catch (error) {
            console.log('Error al obtener getContacts:', error.message);
        }
    };
    console.log("DATA CONTACT SELECCIONADO: ", getInfoContact.name)

    return (
        <div className="bg-white p-2 h-full">
            <h3 className="text-center font-semibold mb-4">Vista Previa</h3>

            <div className="flex justify-center mb-4">
                <QrCodeIcon
                    className={`h-40 w-40 ${claseTexto}`}
                    style={estiloColor}
                />
            </div>
            <div className="text-sm space-y-2">
                {/* <p className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-gray-600" />
                    <strong>Nombre:</strong> {getInfoContact.name}
                </p> */}
                <p className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-gray-600" />
                    <strong>Nombre:</strong> {getInfoContact ? `${getInfoContact.name}` : "Cinthia Sanchez"}
                </p>
                <p className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-gray-600" />
                    <strong>Tel:</strong> 6631275952
                    {/* <strong>Tel:</strong> {getInfoContact ? `${getInfoContact.phones[0]}` : "6631275952"} */}
                </p>
                <p className="flex items-center gap-2">
                    <EnvelopeOpenIcon className="w-4 h-4 text-gray-600" />
                    <strong>Email:</strong> {getInfoContact ? `${getInfoContact.email}` : "cinthia@dominio.com"}
                </p>
                <p className="flex items-center gap-2">
                    <BuildingOfficeIcon className="w-4 h-4 text-gray-600" />
                    <strong>Empresa: </strong> {getInfoContact ? `${getInfoContact.company}` : "Tech"}
                </p>
                <p className="flex items-center gap-2">
                    <BriefcaseIcon className="w-4 h-4 text-gray-600" />
                    <strong>Puesto:</strong> {getInfoContact ? `${getInfoContact.position}` : "DEV"}
                </p>
            </div>
            {/* <div className="flex justify-center gap-3 mt-4">
                <button onClick={onClick} className="bg-[#009688] text-white px-6 py-2 rounded-lg cursor-pointer transition">
                    {mostrarQR ? "Tarjeta" : "QR"}
                </button>
                <button className="bg-[#009688] text-white px-6 py-2 rounded-lg cursor-pointer transition">
                    Descargar
                </button>
            </div> */}
        </div>
    );
};


export default PreviewCard