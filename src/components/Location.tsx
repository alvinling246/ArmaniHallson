import { motion } from 'framer-motion';
import locationMap from 'figma:asset/c2c050b7c8f138880538eda89381b001beb020e9.png';

export function Location() {
  return (
    <section className="bg-zinc-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'serif' }}>
            Prime Location
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-white/80">
            At the epicenter of Kuala Lumpur's most prestigious district
          </p>
        </motion.div>

        {/* Location Map Image - Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Decorative glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-500/10 blur-2xl"></div>
          
          {/* Image container */}
          <div className="relative border-2 border-amber-500/30 rounded-lg overflow-hidden shadow-2xl">
            <img
              src={locationMap}
              alt="Armani Hallson KLCC Location Map - Attractions, Landmarks, Malls, Hotels, Embassies, Medical & Education"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-amber-500/60"></div>
          <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-amber-500/60"></div>
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-amber-500/60"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-amber-500/60"></div>
        </motion.div>
      </div>
    </section>
  );
}