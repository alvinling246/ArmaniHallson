import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';

// SOVO Floor Plans
import sovoA1 from '../assets/sovo_floorplans/Sovo A 1.jpg';
import sovoA2 from '../assets/sovo_floorplans/Sovo A 2.jpg';
import sovoB1 from '../assets/sovo_floorplans/Sovo B 1.jpg';
import sovoB2 from '../assets/sovo_floorplans/Sovo B 2.jpg';
import sovoB1_1 from '../assets/sovo_floorplans/Sovo B1 1.jpg';
import sovoB1_2 from '../assets/sovo_floorplans/Sovo B1 2.jpg';
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
  const [activeCategory, setActiveCategory] = useState<'sovo' | 'soho'>('sovo');
  const [activeUnit, setActiveUnit] = useState<string>('A');

  // Unit data structure
  const unitData = {
    sovo: {
      A: {
        name: 'SOVO A',
        area: '72.05',
        levels: 'Level 10 - Level 65',
        floorPlan: sovoA1,
        elevation: sovoA2,
        dimensions: { width: '5940', height: '7726' }
      },
      B: {
        name: 'SOVO B',
        area: '77.15',
        levels: 'Level 10 - Level 65',
        floorPlan: sovoB1,
        elevation: sovoB2,
        dimensions: { width: '6200', height: '7726' }
      },
      B1: {
        name: 'SOVO B1',
        area: '82.30',
        levels: 'Level 10 - Level 65',
        floorPlan: sovoB1_1,
        elevation: sovoB1_2,
        dimensions: { width: '6450', height: '7726' }
      },
      C: {
        name: 'SOVO C',
        area: '85.45',
        levels: 'Level 10 - Level 65',
        floorPlan: sovoC1,
        elevation: sovoC2,
        dimensions: { width: '6700', height: '7726' }
      },
      D: {
        name: 'SOVO D',
        area: '88.60',
        levels: 'Level 10 - Level 65',
        floorPlan: sovoD1,
        elevation: sovoD2,
        dimensions: { width: '6950', height: '7726' }
      },
      E: {
        name: 'SOVO E',
        area: '91.75',
        levels: 'Level 10 - Level 65',
        floorPlan: sovoE1,
        elevation: sovoE2,
        dimensions: { width: '7200', height: '7726' }
      }
    },
    soho: {
      A: {
        name: 'SOHO A',
        area: '65.50',
        levels: 'Level 66 - Level 87',
        floorPlan: sohoA1,
        elevation: sohoA2,
        dimensions: { width: '5600', height: '7100' }
      },
      B: {
        name: 'SOHO B',
        area: '70.25',
        levels: 'Level 66 - Level 87',
        floorPlan: sohoACorner1,
        elevation: sohoACorner2,
        dimensions: { width: '5850', height: '7100' }
      },
      B1: {
        name: 'SOHO B1',
        area: '75.40',
        levels: 'Level 66 - Level 87',
        floorPlan: sohoB1,
        elevation: sohoB2,
        dimensions: { width: '6100', height: '7100' }
      },
      C: {
        name: 'SOHO C',
        area: '78.80',
        levels: 'Level 66 - Level 87',
        floorPlan: sohoB1,
        elevation: sohoB2,
        dimensions: { width: '6350', height: '7100' }
      },
      D: {
        name: 'SOHO D',
        area: '82.15',
        levels: 'Level 66 - Level 87',
        floorPlan: sohoB1,
        elevation: sohoB2,
        dimensions: { width: '6600', height: '7100' }
      },
      E: {
        name: 'SOHO E',
        area: '85.50',
        levels: 'Level 66 - Level 87',
        floorPlan: sohoB1,
        elevation: sohoB2,
        dimensions: { width: '6850', height: '7100' }
      }
    }
  };

  const currentUnit = unitData[activeCategory][activeUnit];
  const availableUnits = Object.keys(unitData[activeCategory]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Main Content */}
      <section className="pb-20 px-6" style={{ paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              className="text-5xl md:text-6xl text-center mb-16 tracking-wide"
              style={{ 
                fontFamily: 'serif',
                color: '#ffffff'
              }}
            >
              FLOOR PLANS
            </h1>
          </motion.div>

          {/* Category Tabs: SOVO / SOHO */}
          <div className="flex justify-center mb-12" style={{ gap: '120px' }}>
            <button
              onClick={() => {
                setActiveCategory('sovo');
                setActiveUnit('A');
              }}
              className="relative pb-2 text-2xl tracking-wider transition-colors"
              style={{
                fontFamily: 'serif',
                color: activeCategory === 'sovo' ? '#ffffff' : '#C5B8A8'
              }}
            >
              SOVO
              {activeCategory === 'sovo' && (
                <motion.div
                  layoutId="categoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => {
                setActiveCategory('soho');
                setActiveUnit('A');
              }}
              className="relative pb-2 text-2xl tracking-wider transition-colors"
              style={{
                fontFamily: 'serif',
                color: activeCategory === 'soho' ? '#ffffff' : '#C5B8A8'
              }}
            >
              SOHO
              {activeCategory === 'soho' && (
                <motion.div
                  layoutId="categoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>

          {/* Unit Type Tabs */}
          <div className="flex justify-center gap-8 mb-20">
            {availableUnits.map((unit) => (
              <button
                key={unit}
                onClick={() => setActiveUnit(unit)}
                className="relative px-4 py-2 text-xl tracking-wider transition-all"
                style={{
                  fontFamily: 'serif',
                  color: activeUnit === unit ? '#ffffff' : '#C5B8A8',
                  border: activeUnit === unit ? '2px solid #FE9A00' : '2px solid transparent'
                }}
              >
                {unit}
              </button>
            ))}
          </div>

          {/* Floor Plan Display */}
          <motion.div
            key={`${activeCategory}-${activeUnit}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto"
          >
            {/* Left Side: Unit Info & Elevation */}
            <div className="space-y-8">
              {/* Unit Name */}
              <div>
                <h2 
                  className="text-4xl mb-2"
                  style={{ 
                    fontFamily: 'serif',
                    color: '#ffffff'
                  }}
                >
                  {currentUnit.name}
                </h2>
                <div 
                  className="w-20 h-0.5 mb-6 bg-amber-500"
                ></div>
                
                {/* Unit Area */}
                <p 
                  className="text-lg mb-8"
                  style={{ color: '#ffffff' }}
                >
                  Unit Area <span style={{ fontFamily: 'serif' }}>{currentUnit.area}m²</span>
                </p>
              </div>

              {/* Elevation View */}
              <div className="space-y-4">
                <p 
                  className="text-sm text-center"
                  style={{ color: '#ffffff' }}
                >
                  East View (KL City View)
                </p>
                <div className="bg-white p-4 border border-black/10">
                  <ImageWithFallback
                    src={currentUnit.elevation}
                    alt="Elevation View"
                    className="w-full h-auto"
                  />
                </div>
                <p 
                  className="text-sm text-center"
                  style={{ color: '#8B7D6B' }}
                >
                  West View (Facilities View)
                </p>
                <p 
                  className="text-center mt-4"
                  style={{ 
                    color: '#4A4138',
                    fontFamily: 'serif'
                  }}
                >
                  {currentUnit.levels}
                </p>
              </div>
            </div>

            {/* Right Side: Floor Plan */}
            <div className="relative">
              {/* Dimensions Top */}
              <div className="absolute -top-8 right-0 left-0 flex justify-end">
                <div 
                  className="text-xs tracking-wider"
                  style={{ color: '#8B7D6B' }}
                >
                  {currentUnit.dimensions.width}
                </div>
              </div>
              
              {/* Dimensions Side */}
              <div className="absolute -right-12 top-0 bottom-0 flex items-center">
                <div 
                  className="text-xs tracking-wider"
                  style={{ 
                    color: '#8B7D6B',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)'
                  }}
                >
                  {currentUnit.dimensions.height}
                </div>
              </div>

              {/* Floor Plan Image */}
              <div className="bg-white border border-black/20">
                <ImageWithFallback
                  src={currentUnit.floorPlan}
                  alt={`${currentUnit.name} Floor Plan`}
                  className="w-full h-auto"
                />
              </div>

              {/* Type Label */}
              <p 
                className="text-center mt-4"
                style={{ 
                  color: '#ffffff',
                  fontFamily: 'serif'
                }}
              >
                Type {activeUnit}
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="/#lead-capture"
              className="inline-block px-12 py-4 border-2 tracking-widest text-sm hover:bg-black/5 transition-all"
              style={{
                color: '#4A4138',
                borderColor: '#4A4138'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              REQUEST FULL FLOOR PLAN
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}