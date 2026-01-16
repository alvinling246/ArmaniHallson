import { motion } from 'motion/react';
import { Maximize2, Navigation, RotateCw, X } from 'lucide-react';
import { useState } from 'react';

export function VirtualTour() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Luxury Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
        
        {/* Animated gold particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Radial pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #d4af37 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 w-full px-4 py-12 md:py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-amber-500" />
            <div className="relative">
              <Navigation className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
              <div className="absolute inset-0 blur-xl bg-amber-500/30" />
            </div>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-amber-500" />
          </div>

          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            360° Virtual Experience
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-amber-500/80 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Step inside luxury. Explore every angle of your future home.
          </motion.p>
        </motion.div>

        {/* Fullscreen 360 Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-[1800px] mx-auto"
        >
          {/* Main viewer container */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 via-amber-500/30 to-amber-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
            
            {/* Corner accents - luxury touch */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-amber-500/60 z-20" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-amber-500/60 z-20" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-amber-500/60 z-20" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-amber-500/60 z-20" />

            {/* Iframe container */}
            <div 
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30"
              style={{ height: 'calc(100vh - 300px)', minHeight: '600px', maxHeight: '900px' }}
            >
              <iframe 
                className="w-full h-full" 
                title="Armani Hallson 360° Virtual Tour" 
                width="100%" 
                height="100%" 
                allow="fullscreen" 
                src="https://armanigroup.com.my/Site/Hallson/"
                style={{ border: 'none' }}
              />
              
              {/* Fullscreen button overlay */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFullscreen(true)}
                className="absolute top-6 right-6 bg-black/80 backdrop-blur-md hover:bg-amber-600/90 border border-amber-500/30 hover:border-amber-500 text-white p-4 rounded-xl transition-all duration-300 group/btn z-30"
              >
                <Maximize2 className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Feature highlights - positioned below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group/card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl blur-xl group-hover/card:blur-2xl transition-all" />
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 rounded-2xl p-8 text-center transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover/card:scale-110 transition-transform">
                  <Navigation className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Iconic KLCC Views</h3>
                <p className="text-gray-400 leading-relaxed">
                  Breathtaking Petronas Twin Towers and KLCC skyline
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group/card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl blur-xl group-hover/card:blur-2xl transition-all" />
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 rounded-2xl p-8 text-center transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover/card:scale-110 transition-transform">
                  <Maximize2 className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Panoramic Windows</h3>
                <p className="text-gray-400 leading-relaxed">
                  Floor-to-ceiling unobstructed city panoramas
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative group/card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl blur-xl group-hover/card:blur-2xl transition-all" />
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 rounded-2xl p-8 text-center transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover/card:scale-110 transition-transform">
                  <RotateCw className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Every Angle Perfect</h3>
                <p className="text-gray-400 leading-relaxed">
                  Stunning vistas from sunrise to sunset
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6 text-lg">
              Ready to experience this luxury in person?
            </p>
            <a
              href="#lead-capture"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white px-10 py-5 rounded-full transition-all duration-300 font-medium text-lg shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 hover:scale-105"
            >
              Schedule a Private Viewing
              <Navigation className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black"
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full transition-all z-50 group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
          </button>
          <iframe 
            className="w-full h-full" 
            title="Armani Hallson 360° Virtual Tour - Fullscreen" 
            width="100%" 
            height="100%" 
            allow="fullscreen" 
            src="https://armanigroup.com.my/Site/Hallson/"
            style={{ border: 'none' }}
          />
        </motion.div>
      )}
    </section>
  );
}