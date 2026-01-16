import { motion } from "motion/react";
import linkBridgeImage from "figma:asset/9f82dca09a90ffa4042db13b2f9db83a72ca7619.png";

export function About() {
  return (
    <section className="bg-zinc-900">
      {/* Link Bridge Feature - Full Screen Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-screen min-h-[600px]"
      >
        <div className="relative w-full h-full">
          {/* Image container */}
          <div className="relative w-full h-full overflow-hidden bg-black">
            <img
              src={linkBridgeImage}
              alt="Exclusive Link Bridge connecting Armani Hallson to KLCC"
              className="w-full h-full object-cover object-[18%_center] md:object-[center_70%]"
            />

            {/* Black gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>

            {/* Content overlay at bottom right */}
            <div className="absolute top-0 md:bottom-0 md:top-auto right-0 md:left-1/2 p-8 md:p-16 max-w-xl lg:max-w-none flex flex-col justify-between md:justify-start md:block h-full md:h-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6 md:space-y-6"
              >
                <div>
                  <h3
                    className="text-3xl md:text-5xl lg:text-6xl mb-4 text-white leading-tight tracking-tight"
                    style={{ fontFamily: "serif" }}
                  >
                    Direct Access to KLCC
                  </h3>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-md md:max-w-xl">
                    Experience unparalleled connectivity through
                    our exclusive climate-controlled link
                    bridge.
                  </p>
                </div>

                {/* Clean stats - Desktop only */}
                <div className="hidden md:flex gap-8 items-center">
                  <div>
                    <p
                      className="text-5xl md:text-6xl text-amber-500 mb-1"
                      style={{ fontFamily: "serif" }}
                    >
                      5
                    </p>
                    <p className="text-white/60 text-sm uppercase tracking-wider">
                      Minutes
                    </p>
                  </div>
                  <div className="w-px h-16 bg-white/20"></div>
                  <div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Walk to Petronas Towers,
                      <br />
                      Suria KLCC & MRT Station
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mobile bottom right stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col items-end gap-3 md:hidden mb-30"
              >
                <div className="text-right">
                  <p
                    className="text-5xl text-amber-500 mb-1"
                    style={{ fontFamily: "serif" }}
                  >
                    5
                  </p>
                  <p className="text-white/60 text-sm uppercase tracking-wider">
                    Minutes
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm leading-relaxed">
                    Walk to Petronas Towers,
                    <br />
                    Suria KLCC & MRT Station
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-amber-500/40"></div>
          <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-amber-500/40"></div>
          <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-amber-500/40"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-amber-500/40"></div>
        </div>
      </motion.div>
    </section>
  );
}