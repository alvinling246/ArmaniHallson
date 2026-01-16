import { X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import whatsappIcon from 'figma:asset/f8fdb5354c5e7f0be17b7f808b9a947484e90b09.png';

export function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 bg-white text-black p-4 rounded-lg shadow-2xl max-w-xs"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm mb-3 pr-4">
              <strong className="block mb-1">Chat with our property expert!</strong>
              Get instant answers about Armani Hallson KLCC.
            </p>
            <a
              href="https://wa.me/60123456789?text=Hi,%20I'm%20interested%20in%20Armani%20Hallson%20KLCC"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 bg-green-600 text-white text-center rounded hover:bg-green-700 transition-colors text-sm"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1
        }}
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-full h-full object-contain"
        />
        
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></span>
      </motion.button>
    </>
  );
}