import React from 'react';

const TemplateTree = () => {
    return (
        <div className="w-[420px] h-48 bg-white text-[#2f2f2f] font-serif rounded shadow border flex">
            {/* Lado izquierdo */}
            <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                    <p className="text-xs uppercase text-[#7a7a7a]">Clínica de la Mujer de Monte Grande</p>
                    <h1 className="text-xl font-semibold mt-2">Dr. Carlos Hernández</h1>
                    <p className="text-sm text-[#4a4a4a] mt-1">Ginecología y obstetricia</p>
                </div>
            </div>

            {/* Lado derecho */}
            <div className="w-1/2 p-4 flex flex-col justify-between">
                <div className="w-20 h-20 bg-black flex items-center justify-center text-white text-xs rounded self-end">
                    QR
                </div>
                <div className="text-xs mt-4">
                    <p><span className="font-semibold">Dirección:</span> Av. Siempre Viva 123</p>
                    <p><span className="font-semibold">Email:</span> carlos.hernandez@salud.com</p>
                    <p><span className="font-semibold">Tel.:</span> 112-345-5677</p>
                </div>
            </div>
        </div>
    );
};

export default TemplateTree;
