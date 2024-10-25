import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Edit, FileText, HelpCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Importa el hook useNavigate

const menuItems = [
  { title: "Problemática", icon: Book, description: "Explora desafíos de aprendizaje", route: '/problematica' },
  { title: "Silabario", icon: Edit, description: "Aprende a leer y escribir", route: '/silabario' },
  { title: "Guías", icon: FileText, description: "Recursos para padres y educadores", route: '/guias' },
  { title: "Dato curioso", icon: HelpCircle, description: "Descubre algo nuevo cada día", route: '/dato' }
];

const testimonials = [
  { name: "María G.", text: "¡Increíble herramienta para aprender en familia!" },
  { name: "Carlos P.", text: "Mi hijo ha mejorado mucho en lectura gracias a esta página." },
  { name: "Ana L.", text: "Los juegos educativos son divertidos y efectivos." }
];

const quizQuestions = [
  { question: '¿Qué letra viene después de la "Z" en el alfabeto?', correctAnswer: 'A' },
  { question: '¿Qué letra está antes de la "D" en el alfabeto?', correctAnswer: 'C' },
  { question: '¿Qué letra está entre la "M" y la "O" en el alfabeto?', correctAnswer: 'N' },
  { question: '¿Qué letra viene después de la "R" en el alfabeto?', correctAnswer: 'S' },
  { question: '¿Qué letra está al principio del alfabeto?', correctAnswer: 'A' }
];

export default function Component() {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [quizAnswer, setQuizAnswer] = useState('');
  const [isQuizCorrect, setIsQuizCorrect] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const familyImageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('morning');
    else if (hour < 18) setTimeOfDay('afternoon');
    else setTimeOfDay('evening');

    setCurrentQuestion(quizQuestions[Math.floor(Math.random() * quizQuestions.length)]);
  }, []);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    if (quizAnswer.toUpperCase() === currentQuestion.correctAnswer.toUpperCase()) {
      setIsQuizCorrect(true);
    } else {
      setIsQuizCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(quizQuestions[Math.floor(Math.random() * quizQuestions.length)]);
    setQuizAnswer('');
    setIsQuizCorrect(null);
  };

  const scrollToFamilyImage = () => {
    familyImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenido principal */}
      <div className={`flex-grow flex flex-col items-center justify-between p-4 relative overflow-hidden bg-gradient-to-b ${
        timeOfDay === 'morning' ? 'from-purple-800 via-indigo-600 to-blue-500' :
        timeOfDay === 'afternoon' ? 'from-blue-400 to-orange-200' :
        'from-indigo-900 to-purple-700'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-repeat opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Navigation Bar */}
        <nav className="w-full max-w-4xl flex justify-between items-center mb-8 z-10">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-[180px] md:w-[240px] h-auto border-none"
          />
          <motion.button
            className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-bold text-md md:text-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: '#FCD34D', boxShadow: '0 0 15px rgba(252, 211, 77, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToFamilyImage}
          >
            Empieza hoy
          </motion.button>
        </nav>

        {/* Main Content */}
        <main className="w-full max-w-4xl flex flex-col items-center z-10">
          {/* Title */}
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4 text-center"
            style={{ 
              fontFamily: "'Comic Neue', cursive",
              WebkitTextStroke: '1px white',
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ¡Aprendamos juntos!
          </motion.h1>

          {/* Slogan */}
          <motion.p 
            className="text-lg md:text-xl text-white text-center mb-8 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Descubre el mundo mágico del aprendizaje en familia
          </motion.p>

          {/* Welcome Illustration (Family Image) */}
          <motion.img
            ref={familyImageRef}
            src="/familia.png"
            alt="Familia aprendiendo junta"
            className="w-full max-w-md mb-12 border-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />

          {/* Menu Items */}
          <div className="w-full max-w-md mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleNavigate(item.route)}
                  className={`w-full py-4 px-6 rounded-full transition-all duration-300 text-gray-800 font-medium text-base md:text-lg flex items-center justify-center shadow-lg
                    ${index % 4 === 0 ? 'bg-gradient-to-r from-green-300 to-green-400' : 
                      index % 4 === 1 ? 'bg-gradient-to-r from-pink-300 to-pink-400' : 
                      index % 4 === 2 ? 'bg-gradient-to-r from-yellow-300 to-yellow-400' :
                      'bg-gradient-to-r from-blue-300 to-blue-400'}`}
                >
                  <item.icon className="mr-3" size={32} />
                  {item.title}
                </button>
                <p className="text-white text-sm mt-2 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Quiz */}
          {currentQuestion && (
            <div className="w-full max-w-md mb-20 bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Quiz rápido</h3>
              <p className="mb-6 text-gray-600 text-xl">{currentQuestion.question}</p>
              <form onSubmit={handleQuizSubmit} className="flex items-center mb-4">
                <input
                  type="text"
                  value={quizAnswer}
                  onChange={(e) => setQuizAnswer(e.target.value)}
                  className="border-2 border-gray-300 rounded-l-full px-6 py-3 w-full text-lg focus:outline-none focus:border-blue-500"
                  placeholder="Tu respuesta"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-8 py-3 rounded-r-full font-bold text-lg hover:bg-blue-600 transition-colors"
                >
                  Enviar
                </button>
              </form>
              <AnimatePresence>
                {isQuizCorrect !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <p className={`mt-4 text-lg ${isQuizCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isQuizCorrect ? '¡Correcto!' : 'Incorrecto. Inténtalo de nuevo.'}
                    </p>
                    <button 
                      className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-full font-bold text-lg hover:bg-yellow-600 transition-colors"
                      onClick={handleNextQuestion}
                    >
                      Siguiente pregunta
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Testimonials */}
          <div className="w-full max-w-4xl mb-12">
            <h3 className="text-3xl font-bold mb-8 text-white text-center">Lo que dicen nuestros usuarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
                >
                  <p className="text-gray-600 mb-4 text-lg">{testimonial.text}</p>
                  <p className="text-gray-800 font-bold text-lg">{testimonial.name}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400" size={20} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center w-full">
        <p className="text-sm">Diseñado por <span className="font-bold">jg.ssj</span></p>
      </footer>
    </div>
  );
}
