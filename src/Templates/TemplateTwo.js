import React from 'react';

const TemplateTwo = () => {
    return (
        <div className="w-80 h-48 bg-[#f0e8e0] text-[#4d4d4d] font-sans rounded shadow-md p-4 flex flex-col justify-between relative overflow-hidden">
            {/* Letras grandes de fondo */}
            <div className="absolute text-[5rem] font-bold text-[#d6ccc2] opacity-50 top-[-20px] left-2 pointer-events-none select-none">
                as
            </div>

            <div className="z-10">
                <p className="text-xs">@aikdesign en todas las redes</p>
                <p className="text-xs">#designlife</p>
            </div>

            <div className="z-10">
                <h1 className="text-lg font-semibold">aina serrano</h1>
                <p className="text-sm uppercase tracking-widest">artista · creadora de contenido</p>
            </div>

            <div className="z-10 mt-2">
                <p className="text-xs mb-1">¡Visita mi universo más cercano!</p>
                <div className="w-20 h-20 bg-[#e78e4e] flex items-center justify-center text-white text-xs font-bold rounded">
                    QR
                </div>
            </div>
        </div>
    );
};

export default TemplateTwo;
