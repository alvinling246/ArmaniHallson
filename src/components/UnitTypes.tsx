import { Bed, Maximize, Key } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function UnitTypes() {
  const units = [
    {
      type: 'Studio',
      icon: <Key className="w-6 h-6" />,
      size: '450 - 550 sq ft',
      price: 'RM 650,000',
      features: ['Open-plan layout', 'Premium fixtures', 'Smart home system']
    },
    {
      type: '1 Bedroom',
      icon: <Bed className="w-6 h-6" />,
      size: '650 - 850 sq ft',
      price: 'RM 950,000',
      features: ['Spacious bedroom', 'Modern kitchen', 'Balcony with city view']
    },
    {
      type: 'Dual Key',
      icon: <Maximize className="w-6 h-6" />,
      size: '950 - 1,200 sq ft',
      price: 'RM 1,350,000',
      features: ['2 separate units', 'Rental flexibility', 'Investment potential']
    }
  ];

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
            Unit Types & Layouts
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-white/80">
            Choose from our selection of meticulously designed residences
          </p>
        </motion.div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit, index) => (
            <motion.div 
              key={index}
              className="bg-black border border-white/10 overflow-hidden hover:border-amber-500/50 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgxNDE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={`${unit.type} Interior`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-2 flex items-center gap-2">
                  {unit.icon}
                  <span>{unit.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-white/60 text-sm mb-2">Size: {unit.size}</p>
                  <p className="text-2xl mb-1 text-white">Starting from</p>
                  <p className="text-3xl text-amber-500" style={{ fontFamily: 'serif' }}>
                    {unit.price}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {unit.features.map((feature, idx) => (
                    <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors">
                  View Floor Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}