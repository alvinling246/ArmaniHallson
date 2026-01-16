import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';
import { useState } from 'react';

// SOVO Floor Plans
import sovoA1 from '../assets/sovo_floorplans/Sovo A 1.png';
import sovoA2 from '../assets/sovo_floorplans/Sovo A 2.png';
import sovoB1_1 from '../assets/sovo_floorplans/Sovo B 1.jpg';
import sovoB1_2 from '../assets/sovo_floorplans/Sovo B 2.jpg';
import sovoB1Type1 from '../assets/sovo_floorplans/Sovo B1 1.jpg';
import sovoB1Type2 from '../assets/sovo_floorplans/Sovo B1 2.jpg';
import sovoC1 from '../assets/sovo_floorplans/Sovo C 1.jpg';
import sovoC2 from '../assets/sovo_floorplans/Sovo C 2.jpg';
import sovoD1 from '../assets/sovo_floorplans/Sovo D 1.jpg';
import sovoD2 from '../assets/sovo_floorplans/Sovo D 2.jpg';
import sovoE1 from '../assets/sovo_floorplans/Sovo E 1.jpg';
import sovoE2 from '../assets/sovo_floorplans/Sovo E 2.jpg';

// SOHO Floor Plans
import sohoA1 from '../assets/soho_floorplans/Soho A 1.jpg';
import sohoA2 from '../assets/soho_floorplans/Soho A 2.jpg';
import sohoACorner1 from '../assets/soho_floorplans/Soho A Corner 1.jpg';
import sohoACorner2 from '../assets/soho_floorplans/Soho A Corner 2.jpg';
import sohoB1 from '../assets/soho_floorplans/Soho B 1.jpg';
import sohoB2 from '../assets/soho_floorplans/Soho B 2.jpg';

export function UnitsPage() {
  const [activeTab, setActiveTab] = useState<'sovo' | 'soho'>('sovo');
  const [sovoActiveUnit, setSovoActiveUnit] = useState<'A' | 'B' | 'B1' | 'C' | 'D' | 'E'>('A');
  const [sohoActiveUnit, setSohoActiveUnit] = useState<'A' | 'ACorner' | 'B'>('A');

  const sovoUnits = {
    A: { images: [sovoA1, sovoA2], name: 'SOVO A', area: '72.05m²', levels: 'Level 10 - Level 65' },
    B: { images: [sovoB1_1, sovoB1_2], name: 'SOVO B', area: '85.50m²', levels: 'Level 10 - Level 65' },
    B1: { images: [sovoB1Type1, sovoB1Type2], name: 'SOVO B1', area: '92.10m²', levels: 'Level 10 - Level 65' },
    C: { images: [sovoC1, sovoC2], name: 'SOVO C', area: '105.80m²', levels: 'Level 10 - Level 65' },
    D: { images: [sovoD1, sovoD2], name: 'SOVO D', area: '118.50m²', levels: 'Level 10 - Level 65' },
    E: { images: [sovoE1, sovoE2], name: 'SOVO E', area: '135.20m²', levels: 'Level 10 - Level 65' }
  };

  const sohoUnits = {
    A: { images: [sohoA1, sohoA2], name: 'SOHO A', area: '58.30m²', levels: 'Level 33 - Level 65' },
    ACorner: { images: [sohoACorner1, sohoACorner2], name: 'SOHO A Corner', area: '78.60m²', levels: 'Level 33 - Level 65' },
    B: { images: [sohoB1, sohoB2], name: 'SOHO B', area: '95.40m²', levels: 'Level 33 - Level 65' }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10"></div>
        <div className="absolute inset-0 top-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1502672260066-6bc869c1e63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoaWdocmlzZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTczNzAyMjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Armani Hallson KLCC Unit Types"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Floor Plans
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our thoughtfully designed unit layouts
          </motion.p>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Main Tabs - SOVO / SOHO */}
          <motion.div
            className="flex justify-center gap-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setActiveTab('sovo')}
              className={`text-2xl font-serif pb-4 border-b-2 transition-colors text-white ${
                activeTab === 'sovo'
                  ? 'border-amber-500'
                  : 'border-black hover:border-black'
              }`}
            >
              SOVO
            </button>
            <button
              onClick={() => setActiveTab('soho')}
              className={`text-2xl font-serif pb-4 border-b-2 transition-colors text-white ${
                activeTab === 'soho'
                  ? 'border-amber-500'
                  : 'border-black hover:border-black'
              }`}
            >
              SOHO
            </button>
          </motion.div>

          {/* SOVO Section */}
          {activeTab === 'sovo' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Unit Type Tabs */}
              <div className="flex justify-center gap-4 mb-16 flex-wrap">
                {(Object.keys(sovoUnits) as Array<'A' | 'B' | 'B1' | 'C' | 'D' | 'E'>).map((unit) => (
                  <button
                    key={unit}
                    onClick={() => setSovoActiveUnit(unit)}
                    className={`px-6 py-2 border-2 transition-all font-serif ${
                      sovoActiveUnit === unit
                        ? 'bg-amber-500/20 border-amber-500 text-white'
                        : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {unit}
                  </button>
                ))}
              </div>

              {/* Unit Info */}
              <div className="text-left mb-8">
                <h2 className="text-4xl font-serif text-white mb-4">
                  {sovoUnits[sovoActiveUnit].name}
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-white/60 text-sm">Unit Area</p>
                    <p className="text-2xl text-amber-500 font-serif">
                      {sovoUnits[sovoActiveUnit].area}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Level</p>
                    <p className="text-white">{sovoUnits[sovoActiveUnit].levels}</p>
                  </div>
                </div>
              </div>

              {/* Unit Details - Images Side by Side */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Image 1 */}
                <motion.div
                  className="border border-amber-500/30 overflow-hidden bg-gray-900 h-[250px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ borderColor: 'rgb(217, 119, 6)' }}
                >
                  <ImageWithFallback
                    src={sovoUnits[sovoActiveUnit].images[0]}
                    alt={`${sovoUnits[sovoActiveUnit].name} View 1`}
                  />
                </motion.div>

                {/* Image 2 */}
                <motion.div
                  className="border border-amber-500/30 overflow-hidden bg-gray-900 h-[250px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ borderColor: 'rgb(217, 119, 6)' }}
                >
                  <ImageWithFallback
                    src={sovoUnits[sovoActiveUnit].images[1]}
                    alt={`${sovoUnits[sovoActiveUnit].name} View 2`}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* SOHO Section */}
          {activeTab === 'soho' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Unit Type Tabs */}
              <div className="flex justify-center gap-4 mb-16 flex-wrap">
                {(Object.keys(sohoUnits) as Array<'A' | 'ACorner' | 'B'>).map((unit) => (
                  <button
                    key={unit}
                    onClick={() => setSohoActiveUnit(unit)}
                    className={`px-6 py-2 border-2 transition-all font-serif ${
                      sohoActiveUnit === unit
                        ? 'bg-amber-500/20 border-amber-500 text-white'
                        : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {unit === 'ACorner' ? 'A Corner' : unit}
                  </button>
                ))}
              </div>

              {/* Unit Info */}
              <div className="text-left mb-8">
                <h2 className="text-4xl font-serif text-white mb-4">
                  {sohoActiveUnit === 'ACorner'
                    ? sohoUnits.ACorner.name
                    : sohoUnits[sohoActiveUnit].name}
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-white/60 text-sm">Unit Area</p>
                    <p className="text-2xl text-amber-500 font-serif">
                      {sohoActiveUnit === 'ACorner'
                        ? sohoUnits.ACorner.area
                        : sohoUnits[sohoActiveUnit].area}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Level</p>
                    <p className="text-white">
                      {sohoActiveUnit === 'ACorner'
                        ? sohoUnits.ACorner.levels
                        : sohoUnits[sohoActiveUnit].levels}
                    </p>
                  </div>
                </div>
              </div>

              {/* Unit Details - Images Side by Side */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Image 1 */}
                <motion.div
                  className="border border-amber-500/30 overflow-hidden bg-gray-900 h-[350px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ borderColor: 'rgb(217, 119, 6)' }}
                >
                  <ImageWithFallback
                    src={
                      sohoActiveUnit === 'ACorner'
                        ? sohoUnits.ACorner.images[0]
                        : sohoUnits[sohoActiveUnit].images[0]
                    }
                    alt={`${
                      sohoActiveUnit === 'ACorner'
                        ? sohoUnits.ACorner.name
                        : sohoUnits[sohoActiveUnit].name
                    } View 1`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Image 2 */}
                <motion.div
                  className="border border-amber-500/30 overflow-hidden bg-gray-900 h-[350px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ borderColor: 'rgb(217, 119, 6)' }}
                >
                  <ImageWithFallback
                    src={
                      sohoActiveUnit === 'ACorner'
                        ? sohoUnits.ACorner.images[1]
                        : sohoUnits[sohoActiveUnit].images[1]
                    }
                    alt={`${
                      sohoActiveUnit === 'ACorner'
                        ? sohoUnits.ACorner.name
                        : sohoUnits[sohoActiveUnit].name
                    } View 2`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
