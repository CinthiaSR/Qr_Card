
"use client"
import axiosInstance from '@lib/axiosInstance';
import ListContact from './ListContact'
import PreviewContact from './PreviewContact'
import { useRef, useState, useEffect } from 'react';
import { showConfirmDelete, showUpdateContact } from 'utils/utils';

const key = Object.keys(sessionStorage).find(k => k.startsWith('oidc.user:'));
const data = JSON.parse(sessionStorage.getItem(key));
const userId = data?.profile.sub

const AddContacts = () => {
    const fetched = useRef(false);
    const [getListContact, setListContact] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [formData, setFormData] = useState({
        identifier: "",
        name: "",
        email: "",
        web: "",
        company: "",
        position: "",
        phones: ["", ""]
    });

    useEffect(() => {
        if (!fetched.current) {
            fetched.current = true;
            console.log("🔥 Ejecutando fetch...");
            fetchContact();
        }
    }, []);

    const fetchContact = async () => {
        try {
            const response = await axiosInstance.get(`/${userId}/contacts`);
            const responseData = response.data._embedded.contacts
            console.log("RESPONSE DATA...", responseData)
            setListContact(responseData);
        } catch (error) {
            console.log('Error al obtener getContacts:', error.message);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handlePhoneChange = (index, value) => {
        const updatedPhones = [...formData.phones];
        updatedPhones[index] = value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            phones: updatedPhones,
        }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const bodyData = JSON.stringify({ ...formData })
            console.log(bodyData)

            if (isEditing && editId) {
                showUpdateContact(async () => {
                    const response = await axiosInstance.put(`/${userId}/contacts/${editId}`, bodyData)
                    console.log("📝 Contacto Actualizado:", response.data);
                })
            } else {
                const response = await axiosInstance.post(`/${userId}/contacts`, bodyData);
                console.log("✅ Contacto creado:", response.data);
            }

            await fetchContact();
            resetForm()
        } catch (err) {
            console.log("❌ Error al agregar/o actualizars contacto", err);
        }
    };

    const handleEditContact = async (contact) => {
        console.log(contact)
        try {
            const getForUser = await axiosInstance.get(`/${userId}/contacts/${contact}`)
            console.log("📝 Datos por contacto", getForUser.data);
            const response = getForUser.data
            setFormData({
                identifier: response.identifier || "",
                name: response.name || "",
                email: response.email || "",
                web: response.web || "",
                company: response.company || "",
                position: response.position || "",
                phones: response.phones?.length ? response.phones : ["", ""]
            })
            setEditId(contact);
            setIsEditing(true);

        } catch (err) {
            console.log("❌ Error al consultar contacto", err);
        }
    }

    const resetForm = () => {
        setFormData({
            identifier: "",
            name: "",
            email: "",
            web: "",
            company: "",
            position: "",
            phones: ["", ""]
        });
        setIsEditing(false);
        setEditId(null);
    };

    const handleDeleteContact = async (contactId) => {
        await showConfirmDelete(async () => {
            const response = await axiosInstance.delete(`/${userId}/contacts/${contactId}`);
            console.log("📝 Contacto Eliminado:", response);
            await fetchContact();
        });
    };


    return (
        <div className="flex flex-col lg:flex-row flex-1 p-4 gap-4 overflow-y-auto h-full">

            <div className="flex-1 min-w-0 bg-white p-4 rounded shadow">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold">
                        {isEditing ? "Editar Contacto" : "Agregar Contacto"}
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                    {/* Formulario */}
                    <div className="flex-1 p-2">
                        <div className="max-w-full mx-auto p-2">
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit} >
                                <div>
                                    <label className="block text-sm font-medium mb-1">Identificador</label>
                                    <input type="text" name="identifier" value={formData.identifier} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Casa 1, mi negocio, oficina " />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Nombre</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre completo" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Teléfono 1</label>
                                    <input type="tel" name="telefono1" value={formData.phones[0]} onChange={(e) => handlePhoneChange(0, e.target.value)} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+34 123 456 789" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Teléfono 2</label>
                                    <input type="tel" name="telefono2" value={formData.phones[1]} onChange={(e) => handlePhoneChange(1, e.target.value)} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+34 987 654 321" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="correo@ejemplo.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Página Web</label>
                                    <input type="url" name="web" value={formData.web} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://tusitio.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Empresa</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre de la empresa" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Puesto</label>
                                    <input type="text" name="position" value={formData.position} onChange={handleChange} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu cargo" />
                                </div>

                                {/* Botones */}
                                <div className="sm:col-span-2 flex flex-col sm:flex-row justify-end gap-4 mt-6">
                                    {/* <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">Generar QR</button> */}
                                    <button type="submit" className="bg-[#e79363] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">{
                                        isEditing ? "Actualizar" : "Guardar"
                                    }</button>
                                    <button type="button" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition" onClick={resetForm}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-4 mt-4 md:mt-0 md:w-1/3">
                        <PreviewContact formData={formData} />
                    </div>
                </div>
            </div>

            {/* Panel Lista de Contactos */}
            <div className="w-full lg:w-1/3">
                <ListContact arrListContact={getListContact} onEdit={handleEditContact} onDelete={handleDeleteContact} />
            </div>
        </div>
    )
}

export default AddContacts