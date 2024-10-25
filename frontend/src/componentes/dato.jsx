import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Component() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [showFlashcard1, setShowFlashcard1] = useState(false);
  const [showFlashcard2, setShowFlashcard2] = useState(false);
  const [showFlashcard3, setShowFlashcard3] = useState(false);
  const navigate = useNavigate();

  const handleMinimize = () => setIsMinimized(!isMinimized);
  const handleMaximize = () => setIsMaximized(!isMaximized);
  const toggleFlashcard1 = () => setShowFlashcard1(!showFlashcard1);
  const toggleFlashcard2 = () => setShowFlashcard2(!showFlashcard2);
  const toggleFlashcard3 = () => setShowFlashcard3(!showFlashcard3);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center items-center bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-orange-400 p-4">
        <motion.div
          className={`bg-white rounded-lg shadow-lg overflow-hidden ${
            isMaximized ? 'w-full h-full' : 'w-full max-w-2xl'
          }`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: isMinimized ? 0.8 : 1,
            opacity: 1,
            height: isMinimized ? '60px' : 'auto'
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
              <span className="text-sm font-medium text-gray-600">Datos Curiosos</span>
            </div>
          </div>
          <motion.div
            className="p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMinimized ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Datos Curiosos</h2>
            <p className="text-gray-700 mb-4">
              Haz clic en las tarjetas para descubrir información interesante sobre el uso de pantallas en niños.
            </p>

            <motion.div
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded cursor-pointer mb-4"
              whileHover={{ scale: 1.05 }}
              onClick={toggleFlashcard1}
            >
              <p className="font-bold">¿Sabías que?</p>
              {showFlashcard1 && (
                <p className="mt-2">
                  Estudios recientes de la Universidad Europea de Madrid advierten un incremento de casos de miopía en niños menores a 7 años provocado por el uso de pantallas. La OMS pronostica que en 2050, el 50% de la población mundial padecerá miopía.
                </p>
              )}
            </motion.div>

            <motion.div
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded cursor-pointer mb-4"
              whileHover={{ scale: 1.05 }}
              onClick={toggleFlashcard2}
            >
              <p className="font-bold">Dato Interesante</p>
              {showFlashcard2 && (
                <p className="mt-2">
                  Según estudios en EE.UU., los niños que pasan más de dos horas al día frente a la pantalla sin supervisión obtienen calificaciones más bajas en pruebas de lenguaje y pensamiento.
                </p>
              )}
            </motion.div>

            <motion.div
              className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={toggleFlashcard3}
            >
              <p className="font-bold">Otra Curiosidad</p>
              {showFlashcard3 && (
                <p className="mt-2">
                  La Asociación Americana de Pediatría recomienda que los bebés menores de 18 meses no usen pantallas. La OMS sugiere limitar el uso a una hora al día para niños de 2 a 5 años.
                </p>
              )}
            </motion.div>

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
