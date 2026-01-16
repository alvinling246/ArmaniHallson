import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Maximize, Download, ZoomIn, Bed, Home, Key } from 'lucide-react';
import { Footer } from '../components/Footer';

export function PlansPage() {
  const floorPlans = [
    {
      type: 'Studio',
      icon: <Key className="w-8 h-8" />,
      size: '450 - 550 sq ft',
      layouts: ['Layout A: 450 sq ft', 'Layout B: 550 sq ft'],
      image: 'https://images.unsplash.com/photo-1721244653580-79577d2822a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZmxvb3IlMjBwbGFuJTIwYmx1ZXByaW50fGVufDF8fHx8MTc2ODQxNjc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Open-plan living area',
        'Compact kitchen',
        'Bathroom with premium fixtures',
        'Built-in wardrobe',
        'Balcony (select units)'
      ],
      dimensions: {
        bedroom: 'N/A (Open concept)',
        living: '280 sq ft',
        kitchen: '80 sq ft',
        bathroom: '50 sq ft'
      }
    },
    {
      type: '1 Bedroom',
      icon: <Bed className="w-8 h-8" />,
      size: '650 - 850 sq ft',
      layouts: ['Layout A: 650 sq ft', 'Layout B: 750 sq ft', 'Layout C: 850 sq ft'],
      image: 'https://images.unsplash.com/photo-1758448511320-05d7d28f4298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBsYXlvdXR8ZW58MXx8fHwxNzY4NDc5MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Spacious master bedroom',
        'Separate living & dining area',
        'Modern kitchen with island',
        'Walk-in closet',
        'Premium bathroom',
        'Powder room (select units)',
        'Balcony with city view'
      ],
      dimensions: {
        bedroom: '180 sq ft',
        living: '250 sq ft',
        kitchen: '120 sq ft',
        bathroom: '85 sq ft'
      }
    },
    {
      type: 'Dual Key',
      icon: <Home className="w-8 h-8" />,
      size: '950 - 1,200 sq ft',
      layouts: ['Layout A: 950 sq ft', 'Layout B: 1,100 sq ft', 'Layout C: 1,200 sq ft'],
      image: 'https://images.unsplash.com/photo-1764337219290-5695657c9b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGJsdWVwcmludHxlbnwxfHx8fDE3Njg0NzkyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Unit 1: Studio with kitchenette',
        'Unit 2: 1-bedroom suite',
        'Dual independent entrances',
        'Separate utilities',
        '2 complete bathrooms',
        '2 full kitchens',
        'Maximum rental flexibility'
      ],
      dimensions: {
        unit1: '400 sq ft',
        unit2: '700 sq ft',
        totalArea: '1,100 sq ft (avg)',
        balconies: '2 private balconies'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721244653580-79577d2822a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZmxvb3IlMjBwbGFuJTIwYmx1ZXByaW50fGVufDF8fHx8MTc2ODQxNjc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 border border-amber-500/30 bg-amber-500/5 rounded-full mb-6">
              <p className="text-amber-500 text-sm tracking-[0.3em] uppercase">Floor Plans</p>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Architectural
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore meticulously designed floor plans that blend sophistication with functionality
            </p>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border border-amber-500/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 border border-amber-500/10 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>

      {/* Floor Plans Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {floorPlans.map((plan, index) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-32 last:mb-0"
            >
              {/* Plan Header */}
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 text-amber-500 mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {plan.icon}
                </motion.div>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {plan.type}
                </h2>
                <p className="text-2xl text-amber-500 font-light tracking-wide">{plan.size}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Floor Plan Image */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-lg border border-amber-500/20 bg-zinc-900/50">
                    <ImageWithFallback
                      src={plan.image}
                      alt={`${plan.type} Floor Plan`}
                      className="w-full h-[500px] object-cover"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                      <motion.button
                        className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ZoomIn className="w-5 h-5" />
                        View Full Size
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-2 px-6 py-3 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-black transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </motion.button>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-amber-500/50"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-amber-500/50"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-amber-500/50"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-amber-500/50"></div>
                  </div>

                  {/* Available Layouts */}
                  <div className="mt-6">
                    <p className="text-sm text-white/60 uppercase tracking-wider mb-3">Available Layouts</p>
                    <div className="flex flex-wrap gap-2">
                      {plan.layouts.map((layout, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 bg-zinc-900/80 border border-amber-500/20 rounded-full text-sm text-white/80"
                        >
                          {layout}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Plan Details */}
                <div className="space-y-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-2xl mb-6 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <Maximize className="w-6 h-6 text-amber-500" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {plan.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-transform"></div>
                          <p className="text-white/80 group-hover:text-white transition-colors">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div className="border-t border-amber-500/20 pt-8">
                    <h3 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Space Breakdown
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(plan.dimensions).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-zinc-900/50 border border-amber-500/10 rounded-lg p-4 hover:border-amber-500/30 transition-colors"
                        >
                          <p className="text-sm text-white/60 uppercase tracking-wider mb-2">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-lg text-amber-500 font-medium">{value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://wa.me/60123456789?text=I'm%20interested%20in%20the%20floor%20plans%20for%20Armani%20Hallson%20KLCC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-center font-semibold tracking-wider rounded-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <span className="relative z-10">REQUEST DETAILED FLOOR PLAN</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-900/50 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Need More Information?
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Our sales team is ready to provide you with detailed floor plans, 3D visualizations, 
              and personalized consultations to help you find the perfect unit.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                className="p-6 bg-zinc-900/50 border border-amber-500/20 rounded-lg"
                whileHover={{ y: -5, borderColor: 'rgba(245, 158, 11, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <Download className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Download Brochure</h3>
                <p className="text-sm text-white/60">Complete floor plan catalog</p>
              </motion.div>

              <motion.div
                className="p-6 bg-zinc-900/50 border border-amber-500/20 rounded-lg"
                whileHover={{ y: -5, borderColor: 'rgba(245, 158, 11, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <ZoomIn className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Virtual Tour</h3>
                <p className="text-sm text-white/60">3D walkthrough available</p>
              </motion.div>

              <motion.div
                className="p-6 bg-zinc-900/50 border border-amber-500/20 rounded-lg"
                whileHover={{ y: -5, borderColor: 'rgba(245, 158, 11, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <Home className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Schedule Viewing</h3>
                <p className="text-sm text-white/60">Visit our show unit</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
