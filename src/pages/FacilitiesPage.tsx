import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import facilitiesHeroImage from "figma:asset/198562a45f939d5284e02a104872f29863afd851.png";
import level10Plan from "figma:asset/f3b0ab69fb4709f82df28700cccf3d4225554653.png";
import sovoPlan from "figma:asset/ac0dd5505f77ade336e1b17b0dcbf7febe6cfe9a.png";
import sohoPlan from "figma:asset/c4c54242baed46652cd99f7cba6ff0d37b7af99b.png";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Footer } from "../components/Footer";

// Level 10 Facilities Images
import zenGarden from "../assets/level10_facilities/Zen Garden.jpg";
import bbqLounge from "../assets/level10_facilities/BBQ Lounge.jpg";
import bbqLounge2 from "../assets/level10_facilities/BBQ Lounge 2.jpg";
import bbqLounge3 from "../assets/level10_facilities/BBQ Lounge 3.jpg";
import floatingTeaPavilion from "../assets/level10_facilities/Floating Tea Pavilion.jpg";
import hangingGardenWalkway from "../assets/level10_facilities/Hanging Garden Walkway.jpg";
import tropicalPavilion from "../assets/level10_facilities/Tropical Pavilion.jpg";
import tranquilLagoon from "../assets/level10_facilities/Tranquil Lagoon.jpg";
import healingWaterfall from "../assets/level10_facilities/Healing Waterfall.jpg";
import gardenBoardwalk from "../assets/level10_facilities/Garden Boardwalk.jpg";
import gardenBoardwalk2 from "../assets/level10_facilities/Garden Boardwalk 2.jpg";
import serenetyPavilion from "../assets/level10_facilities/Serenity Pavilion.jpg";
import serenetyPavilion2 from "../assets/level10_facilities/Serenity Pavilion 2.jpg";
import reflectionsPassage from "../assets/level10_facilities/Reflections Passage.jpg";
import observationPavilion from "../assets/level10_facilities/Observation Pavilion.jpg";
import observationPavilion2 from "../assets/level10_facilities/Observation Pavilion 2.jpg";
import gardenView from "../assets/level10_facilities/Garden View.jpg";
import topView from "../assets/level10_facilities/Top View.jpg";
import pavallionSteps from "../assets/level10_facilities/Pavilion Steps.jpg";

// SOVO Facilities Images
import l76ChangingRoom from "../assets/sovo_facilities/L76 Changing Room.jpg";
import l76ChangingRoom2 from "../assets/sovo_facilities/L76 Changing Room 2.jpg";
import l76ElevatedHeatedPool from "../assets/sovo_facilities/L76 Elevated Heated Pool.jpg";
import l76ElevatedHeatedPool2 from "../assets/sovo_facilities/L76 Elevated Heated Pool 2.jpg";
import l76ImperialOnsen from "../assets/sovo_facilities/L76 Imperial Onsen.jpg";
import l76PoolDeck from "../assets/sovo_facilities/L76 Sky Pool.jpg";
import l76SaunaRoom from "../assets/sovo_facilities/L76 Sauna Room.jpg";
import l76TranquilOnsen from "../assets/sovo_facilities/L76 Tranquil Onsen.jpg";
import l77LiftLobby from "../assets/sovo_facilities/L77 Lift Lobby.jpg";
import l77SkyGym from "../assets/sovo_facilities/L77 Sky Gym.jpg";
import l77SkyGym2 from "../assets/sovo_facilities/L77 Sky Gym 2.jpg";
import l77SkyGym3 from "../assets/sovo_facilities/L77 Sky Gym 3.jpg";
import l77SkyGym4 from "../assets/sovo_facilities/L77 Sky Gym 4.jpg";
import l77SkyLounge from "../assets/sovo_facilities/L77 Sky Lounge.jpg";
import l77SkyLounge2 from "../assets/sovo_facilities/L77 Sky Lounge 2.jpg";
import l77SkyLounge3 from "../assets/sovo_facilities/L77 Sky Lounge 3.jpg";
import l77SkyLounge4 from "../assets/sovo_facilities/L77 Sky Lounge 4.jpg";
import l78ViewingDeck from "../assets/sovo_facilities/L78 Viewing Deck.jpg";
import rooftopFacilities from "../assets/sovo_facilities/Rooftop Facilities.jpg";

// SOHO Facilities Images
import l33OpenTerrace from "../assets/soho_facilities/L33 Open Terrace.jpg";
import l33OpenTerrace2 from "../assets/soho_facilities/L33 Open Terrace 2.jpg";
import l33OpenTerrace3 from "../assets/soho_facilities/L33 Open Terrace 3.jpg";
import l67SkyPool from "../assets/soho_facilities/L67 Sky Pool.jpg";
import l68Gym from "../assets/soho_facilities/L68 Gym.jpg";
import l68Gym2 from "../assets/soho_facilities/L68 Gym 2.jpg";

export function FacilitiesPage() {
  const [activeTab, setActiveTab] = useState<
    "level10" | "sovo" | "soho"
  >("level10");

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxGallery, setLightboxGallery] = useState<"level10" | "sovo" | "soho" | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const facilityPlans = {
    level10: {
      title: "Level 10 Facilities",
      image: level10Plan,
      splitAt: 11,
      features: [
        "Tranquil Lagoon",
        "Healing Waterfall",
        "Reflection Passage",
        "Water Cascade",
        "Floating Steps",
        "Floating Tea Pavilion",
        "Zen Garden",
        "BBQ Lounge",
        "Garden Broadwalk",
        "Hanging Garden Walkway",
        "Serenity Pavilion",
        "Tropical Pavilion",
        "Observation Pavilion",
        "Unit corridors",
        "Garden Grove",
        "Little Explorer's Zone",
        "Nature's Path",
        "Walkway",
        "Taichi Lawn",
        "Herbs Garden",
        "Waterfall Garden",
      ],
    },
    sovo: {
      title: "SOVO Floor Plan",
      image: sovoPlan,
      splitAt: 13,
      features: [
        "Infinity Pool",
        "Sun Deck",
        "Wet Deck",
        "Sauna (M)",
        "Sauna (F)",
        "Changing Room (M)",
        "Changing Room (F)",
        "Horizon Deck",
        "Sunken Cabana",
        "Outdoor Shower",
        "Hydro Spa",
        "Imperial Onsen",
        "Tranquil Bath Onsen",
        "Rock Pool",
        "Tranquil Alcove",
        "Elevated Heated Spa Pool",
        "Moonlit Lounge",
        "Paradise Lagoon",
        "Retail",
        "The Regent Lounge",
        "The Windsor Bar",
        "Gymnasium",
        "The Skyledge",
        "Zenith Lounge",
        "West Viewing Deck",
        "East Viewing Deck",
      ],
    },
    soho: {
      title: "SOHO Floor Plan",
      image: sohoPlan,
      splitAt: 6,
      features: [
        "Open Terrace",
        "Sky Pool",
        "Sun Deck",
        "Jacuzzi East",
        "Jacuzzi West",
        "Sauna (F)",
        "Sauna (M)",
        "Changing Room (F)",
        "Changing Room (M)",
        "East Viewing Terrace",
        "West Viewing Terrace",
        "Gymnasium",
      ],
    },
  };

  const level10ScrollRef = useRef<HTMLDivElement>(null);
  const sovoScrollRef = useRef<HTMLDivElement>(null);
  const sohoScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = (
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Mouse drag scrolling
  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    if (!ref.current) return;
    
    const slider = ref.current;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeftPos = slider.scrollLeft;
    
    let isDown = true;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeftPos - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.style.cursor = 'grab';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    slider.style.cursor = 'grabbing';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const level10Images = [
    zenGarden,
    floatingTeaPavilion,
    bbqLounge,
    bbqLounge2,
    bbqLounge3,
    hangingGardenWalkway,
    tropicalPavilion,
    tranquilLagoon,
    healingWaterfall,
    gardenBoardwalk,
    gardenBoardwalk2,
    serenetyPavilion,
    serenetyPavilion2,
    reflectionsPassage,
    observationPavilion,
    observationPavilion2,
    gardenView,
    topView,
    pavallionSteps,
  ];

  const level10Names = [
    "Zen Garden",
    "Floating Tea Pavilion",
    "BBQ Lounge",
    "BBQ Lounge",
    "BBQ Lounge",
    "Hanging Garden Walkway",
    "Tropical Pavilion",
    "Tranquil Lagoon",
    "Healing Waterfall",
    "Garden Boardwalk",
    "Garden Boardwalk",
    "Serenity Pavilion",
    "Serenity Pavilion",
    "Reflections Passage",
    "Observation Pavilion",
    "Observation Pavilion",
    "Garden View",
    "Top View",
    "Pavilion Steps"
  ];

  const sovoImages = [
    l76PoolDeck,
    l76ElevatedHeatedPool,
    l76ElevatedHeatedPool2,
    l76SaunaRoom,
    l76TranquilOnsen,
    l76ImperialOnsen,
    l76ChangingRoom,
    l76ChangingRoom2,
    l77LiftLobby,
    l77SkyLounge,
    l77SkyLounge2,
    l77SkyLounge3,
    l77SkyLounge4,
    l77SkyGym,
    l77SkyGym2,
    l77SkyGym3,
    l77SkyGym4,
    l78ViewingDeck,
    rooftopFacilities,
  ];

  const sovoNames = [
    "L76 Sky Pool",
    "L76 Elevated Heated Pool",
    "L76 Elevated Heated Pool",
    "L76 Sauna Room",
    "L76 Tranquil Onsen",
    "L76 Imperial Onsen",
    "L76 Changing Room",
    "L76 Changing Room",
    "L77 Lift Lobby",
    "L77 Sky Lounge",
    "L77 Sky Lounge",
    "L77 Sky Lounge",
    "L77 Sky Lounge",
    "L77 Sky Gym",
    "L77 Sky Gym",
    "L77 Sky Gym",
    "L77 Sky Gym",
    "L78 Viewing Deck",
    "Rooftop Facilities"
  ];

  const sohoImages = [
    l33OpenTerrace,
    l33OpenTerrace2,
    l33OpenTerrace3,
    l67SkyPool,
    l68Gym,
    l68Gym2,
  ];

  const sohoNames = [
    "L33 Open Terrace",
    "L33 Open Terrace",
    "L33 Open Terrace",
    "L67 Sky Pool",
    "L68 Gym",
    "L68 Gym"
  ];

  // Helper function to get current gallery data
  const getCurrentGalleryData = () => {
    if (!lightboxGallery) return { images: [], names: [] };
    
    switch (lightboxGallery) {
      case "level10":
        return { images: level10Images, names: level10Names };
      case "sovo":
        return { images: sovoImages, names: sovoNames };
      case "soho":
        return { images: sohoImages, names: sohoNames };
      default:
        return { images: [], names: [] };
    }
  };

  // Open lightbox
  const openLightbox = (gallery: "level10" | "sovo" | "soho", index: number) => {
    setLightboxGallery(gallery);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigate to previous image
  const goToPrevious = () => {
    const { images } = getCurrentGalleryData();
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Navigate to next image
  const goToNext = () => {
    const { images } = getCurrentGalleryData();
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxIndex, lightboxGallery]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10"></div>
        <div className="absolute inset-0">
          <ImageWithFallback
            src={facilitiesHeroImage}
            alt="Armani Hallson KLCC Facilities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-7xl mb-6 text-white tracking-tight"
              style={{ fontFamily: "serif" }}
            >
              World-Class Facilities
            </h1>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Indulge in premium amenities designed exclusively
              for the discerning resident
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility Plans Tabs Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-12 text-white"
              style={{ fontFamily: "serif" }}
            >
              Facilities Plans
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            {[
              { key: "level10", label: "Level 10" },
              { key: "sovo", label: "SOVO" },
              { key: "soho", label: "SOHO" },
            ].map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() =>
                  setActiveTab(
                    tab.key as "level10" | "sovo" | "soho",
                  )
                }
                className="relative pb-2 bg-transparent transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`font-semibold tracking-wider text-lg ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-white/50"
                  }`}
                >
                  {tab.label}
                </span>
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Content Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-8 md:gap-12 items-start max-w-7xl w-full">
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden border-2 border-amber-500/30 group">
                  <ImageWithFallback
                    src={facilityPlans[activeTab].image}
                    alt={facilityPlans[activeTab].title}
                    className="w-full h-auto object-contain bg-white/5 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-amber-500"></div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-amber-500"></div>
              </div>

              {/* Features List */}
              <div className="pt-0 md:pt-0">
                <div className="grid grid-cols-2 gap-x-8 md:gap-x-1 gap-y-3">
                  {/* Left column: 1-13 */}
                  <div className="space-y-3">
                    {facilityPlans[activeTab].features
                      .slice(
                        0,
                        facilityPlans[activeTab].splitAt,
                      )
                      .map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200"
                        >
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-amber-500/20 transition-colors">
                            {idx + 1}
                          </span>
                          <span className="text-white/80 pt-1 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                  {/* Right column: 14-26 */}
                  <div className="space-y-3">
                    {facilityPlans[activeTab].features
                      .slice(facilityPlans[activeTab].splitAt)
                      .map((feature, idx) => (
                        <div
                          key={
                            idx +
                            facilityPlans[activeTab].splitAt
                          }
                          className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-200"
                        >
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-amber-500/20 transition-colors">
                            {idx +
                              facilityPlans[activeTab].splitAt +
                              1}
                          </span>
                          <span className="text-white/80 pt-1 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Level 10 Facilities Gallery */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4 text-white text-center"
              style={{ fontFamily: "serif" }}
            >
              Level 10 Facilities
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollLeft(level10ScrollRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-amber-500 text-white p-3 border border-white/20 hover:border-amber-500 transition-all -ml-4 md:-ml-6"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollRight(level10ScrollRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-amber-500 text-white p-3 border border-white/20 hover:border-amber-500 transition-all -mr-4 md:-mr-6"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={level10ScrollRef}
              className="flex overflow-x-auto space-x-4 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                cursor: "grab"
              }}
              onMouseDown={(e) => handleMouseDown(e, level10ScrollRef)}
            >
              {level10Images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <div 
                    className="relative overflow-hidden border-2 border-amber-500/30 group h-96 cursor-pointer"
                    onClick={() => openLightbox("level10", index)}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Level 10 Facility ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-2 left-2 text-sm text-white/80 font-semibold">
                      {level10Names[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOVO Facilities Gallery */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4 text-white text-center"
              style={{ fontFamily: "serif" }}
            >
              SOVO Facilities
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollLeft(sovoScrollRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/80 hover:bg-amber-500 text-white p-3 border border-white/20 hover:border-amber-500 transition-all -ml-4 md:-ml-6"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollRight(sovoScrollRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/80 hover:bg-amber-500 text-white p-3 border border-white/20 hover:border-amber-500 transition-all -mr-4 md:-mr-6"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={sovoScrollRef}
              className="flex overflow-x-auto space-x-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                cursor: "grab"
              }}
              onMouseDown={(e) => handleMouseDown(e, sovoScrollRef)}
            >
              {sovoImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <div 
                    className="relative overflow-hidden border-2 border-amber-500/30 group h-96 cursor-pointer"
                    onClick={() => openLightbox("sovo", index)}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`SOVO Facility ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-2 left-2 text-sm text-white/80 font-semibold">
                      {sovoNames[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOHO Facilities Gallery */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4 text-white text-center"
              style={{ fontFamily: "serif" }}
            >
              SOHO Facilities
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollLeft(sohoScrollRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-amber-500 text-white p-3 border border-white/20 hover:border-amber-500 transition-all -ml-4 md:-ml-6"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollRight(sohoScrollRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-amber-500 text-white p-3 border border-white/20 hover:border-amber-500 transition-all -mr-4 md:-mr-6"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={sohoScrollRef}
              className="flex overflow-x-auto space-x-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                cursor: "grab"
              }}
              onMouseDown={(e) => handleMouseDown(e, sohoScrollRef)}
            >
              {sohoImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <div 
                    className="relative overflow-hidden border-2 border-amber-500/30 group h-96 cursor-pointer"
                    onClick={() => openLightbox("soho", index)}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`SOHO Facility ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-2 left-2 text-sm text-white/80 font-semibold">
                      {sohoNames[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl mb-6 text-white"
            style={{ fontFamily: "serif" }}
          >
            Experience Luxury Living at Its Finest
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Schedule a private tour to explore our world-class
            facilities and discover why Armani Hallson KLCC is
            the ultimate address for sophisticated urban living.
          </p>
          <motion.a
            href="/#lead-capture"
            className="inline-block px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold tracking-wider relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            <span className="relative z-10">
              SCHEDULE A VIEWING
            </span>
          </motion.a>
        </motion.div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxGallery && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-amber-500 text-white p-4 border border-white/20 hover:border-amber-500 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-amber-500 text-white p-4 border border-white/20 hover:border-amber-500 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={`${lightboxGallery}-${lightboxIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <ImageWithFallback
                src={getCurrentGalleryData().images[lightboxIndex]}
                alt={getCurrentGalleryData().names[lightboxIndex]}
                className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain"
              />
              
              {/* Image Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                <p className="text-white text-lg font-semibold">
                  {getCurrentGalleryData().names[lightboxIndex]}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}