import linkBridgeVideo from "../assets/video/Link Bridge.mp4";

export function LinkBridge() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border border-amber-500/30 bg-amber-500/10 mb-6">
            <p className="text-amber-500 tracking-widest text-sm">
              EXCLUSIVE CONNECTIVITY
            </p>
          </div>
          <h2
            className="text-4xl md:text-6xl mb-6 text-white"
            style={{ fontFamily: "serif" }}
          >
            Your Private Link Bridge to KLCC
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled convenience with our
            exclusive covered link bridge — your direct,
            sheltered connection to the heart of Kuala Lumpur's
            premier lifestyle destination.
          </p>
        </div>

        {/* Main Visual Section */}
        <div className="flex justify-center mb-16">
          {/* Video - Centered and Larger */}
          <div className="relative group w-full max-w-5xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative overflow-hidden border-2 border-amber-500/30">
              <video
                src={linkBridgeVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <p className="text-white text-lg mb-2">
                  Climate-Controlled Walkway
                </p>
                <p className="text-white/70 text-sm">
                  Fully sheltered & air-conditioned passage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}