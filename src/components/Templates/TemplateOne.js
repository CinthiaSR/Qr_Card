import React from 'react';

const TemplateOne = () => {
    return (
        <div className="w-80 h-48 bg-[#2c3d38] text-white font-sans rounded shadow-lg flex flex-col justify-between p-4">
            <div>
                <h2 className="text-sm uppercase tracking-wide">Paco y Lola Inmobiliaria</h2>
                <p className="text-xs mt-1">Propiedades a tu alcance</p>
            </div>

            <div>
                <h1 className="text-lg font-semibold mt-6">Javier Pan</h1>
                <p className="text-sm">Asesor</p>
            </div>

            <div className="flex justify-end mt-4">
                {/* Placeholder QR */}
                <div className="w-16 h-16 bg-white flex items-center justify-center text-xs text-black">
                    QR
                </div>
            </div>
        </div>
    );
};

export default TemplateOne;
