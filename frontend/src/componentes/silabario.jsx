import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Silabario() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const navigate = useNavigate();

  const handleMinimize = () => setIsMinimized(!isMinimized);
  const handleMaximize = () => setIsMaximized(!isMaximized);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center items-center bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500 p-4">
        <motion.div
          className={`bg-white rounded-lg shadow-lg overflow-hidden ${
            isMaximized ? 'w-full h-full' : 'w-full max-w-2xl'
          }`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: isMinimized ? 0.8 : 1,
            opacity: 1,
            height: isMinimized ? '60px' : 'auto',
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-200 p-2 flex items-center">
            <div className="flex space-x-2">
              <motion.button
                className="w-3 h-3 rounded-full bg-red-500"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.button
                className="w-3 h-3 rounded-full bg-yellow-500"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleMinimize}
              />
              <motion.button
                className="w-3 h-3 rounded-full bg-green-500"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleMaximize}
              />
            </div>
            <div className="flex-grow text-center">
              <span className="text-sm font-medium text-gray-600">Silabario</span>
            </div>
          </div>
          <motion.div
            className="p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMinimized ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">¿Qué es el silabario?</h2>
            <p className="text-gray-700 mb-4">
              El silabario es una herramienta educativa que ayuda a los niños a aprender a leer y escribir mediante la
              práctica de sílabas. Es fundamental para mejorar sus habilidades lingüísticas desde una edad temprana.
            </p>
            <motion.div
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="font-bold">Vista previa del Silabario</p>
              <iframe
                src="/Silabario%20Reducido%20para%20impresion_compressed.pdf#view=FitH"
                title="Vista previa del Silabario"
                className="w-full h-60 border-2 border-gray-300 rounded"
              />
            </motion.div>
            <motion.a
              href="/Silabario%20Reducido%20para%20impresion_compressed.pdf"
              download
              className="mt-6 inline-block bg-blue-400 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Descargar Silabario
            </motion.a>
            <motion.button
              onClick={() => navigate('/')}
              className="mt-6 inline-block bg-blue-400 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Regresar al Inicio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center w-full">
        <p className="text-sm">Diseñado por <span className="font-bold">jg.ssj</span></p>
      </footer>
    </div>
  );
}
