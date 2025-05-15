import React from 'react';

const TemplateFour = () => {
    return (
        <div className="w-80 h-48 bg-white text-[#1f1f1f] font-sans rounded shadow-md p-4 flex flex-col justify-between">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-bold">Ricardo <span className="text-orange-500">Soto</span></h1>
                </div>

                <div className="flex flex-col space-y-1 items-end">
                    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">Estrategias disruptivas</span>
                    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">Diseño de marca</span>
                    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">Materiales P.O.P</span>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-xs rounded">
                    QR
                </div>

                <div className="text-[11px] text-right leading-tight">
                    <p>📞 123-456-789</p>
                    <p>📧 hola@ricardosoto.com</p>
                    <p className="break-all">www.ricardosoto.com</p>
                </div>
            </div>
        </div>
    );
};

export default TemplateFour;
