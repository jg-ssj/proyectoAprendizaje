import { motion } from 'framer-motion';
import { useState } from 'react'; 
import { Link } from 'react-router-dom';

export default function Guias() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => setIsMinimized(!isMinimized);
  const handleMaximize = () => setIsMaximized(!isMaximized);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenido principal */}
      <div className="flex-grow flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
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
              <span className="text-sm font-medium text-gray-600">Guías</span>
            </div>
          </div>

          <motion.div
            className="p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMinimized ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Recursos Educativos para Niños y Padres</h2>
            <p className="text-gray-700 mb-4">
              Estas guías están diseñadas para ayudar a los padres y educadores a brindar apoyo adicional en el proceso
              de aprendizaje de los niños. A través de ellas, los niños podrán mejorar sus habilidades de lectura,
              escritura, y desarrollar una comprensión más profunda del lenguaje.
            </p>

            <motion.div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
              <h3 className="font-bold">Guías disponibles para descargar:</h3>
              <ul className="list-disc ml-6">
                <li>
                  <motion.a
                    href="/guiaaaaaahorasi_compressed.pdf"
                    download
                    className="text-blue-500 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Descargar Guía 1 (guiaaaaaahorasi.pdf)
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/manualde%20uso%20final.pdf"
                    download
                    className="text-blue-500 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Descargar Manual de Uso (manualde uso final.pdf)
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/guiadeejercicios.pdf"
                    download
                    className="text-blue-500 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Descargar Guía de Ejercicios (guiadeejercicios.pdf)
                  </motion.a>
                </li>
              </ul>
            </motion.div>

            <motion.div className="mt-8">
              <Link to="/">
                <motion.button
                  className="bg-yellow-400 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volver al Inicio
                </motion.button>
              </Link>
            </motion.div>
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
