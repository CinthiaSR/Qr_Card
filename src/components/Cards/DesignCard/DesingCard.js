"use client"
import axiosInstance from '@lib/axiosInstance';
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import PreviewCard from './PreviewCard';
import DesignCardList from './DesignCardList';
import { myId } from 'utils/utils';
import { useState, useEffect } from "react";

const key = Object.keys(sessionStorage).find(k => k.startsWith('oidc.user:'));
const data = JSON.parse(sessionStorage.getItem(key));
const userId = data?.profile.sub

const DesignCard = () => {
    const [mostrarQR, setMostrarQR] = useState(false);
    const [selectContact, setSelectContact] = useState('select')
    const [getList, setGetList] = useState([])
    const [formData, setFormData] = useState({ name: "" });

    const [colores, setColores] = useState([
        "#000000",
        "#2471a3",
        "#d35400",
        "#7b241c",
        "#ffffff",
    ]);
    const [colorInput, setColorInput] = useState("");
    const [colorSeleccionado, setColorSeleccionado] = useState("");

    useEffect(() => {
        const coloresGuardados = localStorage.getItem("coloresPersonalizados");
        if (coloresGuardados) {
            setColores(JSON.parse(coloresGuardados));
        }
        getListContacts()
    }, []);

    const handleAgregarColor = () => {
        const nuevoColor = colorInput.trim();
        if (nuevoColor && !colores.includes(nuevoColor)) {
            const nuevosColores = [...colores, nuevoColor];
            setColores(nuevosColores);
            localStorage.setItem("coloresPersonalizados", JSON.stringify(nuevosColores));
            setColorInput("");
        }
    };

    const handleMostrarQR = () => {
        setMostrarQR((prev) => !prev);
    };

    const handleSeleccionColor = (color) => {
        setColorSeleccionado(color);
    };

    const esHex = (color) => color.startsWith("#");

    const getListContacts = async () => {
        try {
            const response = await axiosInstance.get(`/${userId}/contacts`);
            const responseData = response.data._embedded.contacts
            console.log("RESPONSE DATA...", responseData)
            setGetList(responseData);
        } catch (error) {
            console.log('Error al obtener getListContacts:', error.message);
        }
    }

    const handleSelectContact = (e) => {
        const value = e.target.value
        setSelectContact(value)
        console.log("CONTACTO SELECCIONADO: ", value)
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const fd = new FormData();
        // fd.append("name", formData.name)
        // fd.append("color", colorSeleccionado)
        // fd.append("contactId", selectContact)
        const data = {
            name: formData.name,
            color: colorSeleccionado,
            contactId: selectContact
        };

        try {
            const bodyData = JSON.stringify(data)
            console.log(bodyData)
            const response = await axiosInstance.post(`/${userId}/vcards`, bodyData);
            console.log("✅ Contacto creado:", response.data);

            await fetchContact();
            resetForm()
        } catch (err) {
            console.log("❌ Error al agregar contacto", err);
        }

    }


    return (
        <div className="flex flex-col lg:flex-row flex-1 p-4 gap-4 overflow-y-auto h-full">
            {/*  Agregar Contacto y QR */}
            <div className="flex-1 min-w-0 bg-white p-4 rounded shadow">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">Crear tarjeta</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Formulario */}
                    <div className="w-full lg:w-2/3">
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded" onSubmit={handleSubmit}>
                            <div className="sm:col-span-2">
                                <h3 className="font-semibold mb-2 bg-gray-300 p-2 rounded">Diseño y personalización</h3>
                                <div className="flex items-center gap-4 mb-4 flex-wrap">
                                    {colores.map((color, index) => (
                                        <div
                                            key={index}
                                            className={`w-8 h-8 rounded-full cursor-pointer border ${color === colorSeleccionado ? "ring-4 ring-teal-500" : ""}`}
                                            onClick={() => handleSeleccionColor(color)}
                                            style={esHex(color) ? { backgroundColor: color } : {}}
                                            {...(!esHex(color) && {
                                                className: `w-8 h-8 rounded-full cursor-pointer ${color} ${color === colorSeleccionado ? "ring-4 ring-teal-500" : ""}`
                                            })}
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 pb-2">
                                    <label htmlFor="hashtag">Agregar</label>
                                    <input
                                        id="hashtag"
                                        className="border rounded px-2 py-1"
                                        placeholder="#---"
                                        value={colorInput}
                                        onChange={(e) => setColorInput(e.target.value)}
                                    />
                                    <span onClick={handleAgregarColor}>
                                        <PlusCircleIcon className="w-8 h-8 text-[#e79363] cursor-pointer hover:scale-110 transition" />
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 pb-4">
                                    <label htmlFor="contacto">Seleccionado</label>
                                    <select
                                        id="color"
                                        className="border rounded px-2 py-1 w-full"
                                        value={colorSeleccionado}
                                        onChange={(e) => setColorSeleccionado(e.target.value)}
                                    >
                                        <option value="">Color</option>
                                        {colores.map((color, index) => (
                                            <option key={myId()} value={color}>
                                                {color}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <h3 className="font-semibold mb-2 bg-gray-300 p-2 rounded">Nombre de la tarjeta: </h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <label htmlFor="contacto">Nombre: </label>
                                    <input
                                        id="name"
                                        className="border rounded px-2 py-1 w-full"
                                        placeholder="Nombre para identificar la tarjeta"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <h3 className="font-semibold mb-2 bg-gray-300 p-2 rounded">Información Personal</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <label htmlFor="contacto">Contacto: </label>
                                    <select id="contacto"
                                        className="border rounded px-2 py-1 w-full"
                                        value={selectContact}
                                        onChange={handleSelectContact}>
                                        <option value="select">Selecciona</option>
                                        {getList.map((item, i) => {
                                            const id = item.id
                                            const nameContact = item.name
                                            return <option key={myId()} value={`${id}`}>{nameContact}</option>;
                                        })}
                                    </select>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
                                    <button type="submit" className="bg-[#e79363] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                                        Guardar
                                    </button>
                                    <button className="bg-[#009688] text-white px-6 py-2 rounded-lg cursor-pointer transition">
                                        Descargar
                                    </button>
                                    <button type="button" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Vista previa */}
                    <div className="w-full lg:w-1/3">
                        <PreviewCard
                            mostrarQR={mostrarQR}
                            onClick={handleMostrarQR}
                            colorSeleccionado={colorSeleccionado}
                            onSeleted={selectContact}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3">
                <DesignCardList />
            </div>
        </div>

    );
}

export default DesignCard
