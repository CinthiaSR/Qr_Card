"use client"
import { useAuth } from "react-oidc-context";
import axios from "@lib/axiosInstance";
import { useState, useEffect } from "react";
import Main from "@components/Main/Main";
const Inicio = () => {
    const auth = useAuth()
    const userId = auth.user?.profile.sub
    const token = auth.user?.access_token
    const [dataInfoGral, setDataInfoGral] = useState([]);

    // useEffect(() => {
    //     getInfoGral()
    // }, [])

    // const getInfoGral = async () => {
    //     try {
    //         const response = await axios.get(`/${userId}/contacts`);
    //         const responseData = response.data._embedded.contacts
    //         console.log("RESPONSE DATA...", responseData)
    //         setDataInfoGral(responseData);
    //     } catch (error) {
    //         console.error('Error al obtener getContacts:', error.message);
    //     }
    // };

    return <Main />;
}

export default Inicio