import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function Facilities() {
  const facilities = [
    {
      title: 'Sky Infinity Pool',
      image: 'https://images.unsplash.com/photo-1562407184-c5428fdf2cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZpbml0eSUyMHBvb2wlMjBza3lsaW5lfGVufDF8fHx8MTc2ODIxMTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Spectacular rooftop infinity pool with panoramic KLCC skyline views'
    },
    {
      title: 'State-of-the-Art Gym',
      image: 'https://images.unsplash.com/photo-1758957646695-ec8bce3df462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBneW18ZW58MXx8fHwxNzY4MjExNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Fully equipped fitness center with premium equipment and personal training'
    },
    {
      title: 'Exclusive Sky Lounge',
      image: 'https://images.unsplash.com/photo-1611094016919-36b65678f3d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsb3VuZ2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgxOTYyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Private lounge area for residents with sophisticated entertainment spaces'
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
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
            World-Class Facilities
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-white/80">
            Indulge in premium amenities designed for the discerning resident
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-amber-500/50 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl mb-2 text-white" style={{ fontFamily: 'serif' }}>
                  {facility.title}
                </h3>
                <p className="text-white/80 text-sm">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Facilities List */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['BBQ Area', 'Children\'s Playground', 'Function Room', 'Sauna & Steam'].map((item, idx) => (
            <div key={idx} className="py-4 border border-white/10">
              <p className="text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}