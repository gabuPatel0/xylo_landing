"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Parallax } from 'react-scroll-parallax'
import { ChevronRight, ChevronDown } from "lucide-react"
const features = [
  {
    id: "monetization",
    title: "Complete Monetization",
    description:
      "Integrate multiple payment gateways, cryptocurrencies, and NFT marketplaces with zero commission fees.",
    stats: [
      { label: "Payment Methods", value: "15+" },
      { label: "Supported Chains", value: "5+" },
      { label: "Transaction Fee", value: "0%" },
    ],
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    description: "Track revenue, player spending patterns, and engagement metrics in real-time.",
    stats: [
      { label: "Daily Active Users", value: "25.4K" },
      { label: "Avg Revenue/User", value: "$12.75" },
      { label: "Retention Rate", value: "85%" },
    ],
  },
  {
    id: "assets",
    title: "Digital Asset Management",
    description: "Create, manage and sell in-game items, NFTs, and DLC content seamlessly.",
    stats: [
      { label: "Assets Created", value: "2.5K" },
      { label: "NFTs Minted", value: "850+" },
      { label: "Sales Volume", value: "$1.2M" },
    ],
  },
]
export default function FeatureSection() {
  const [selectedFeature, setSelectedFeature] = useState(features[0])
  return (
    <div className="min-h-screen bg-black text-white py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <Parallax speed={5}>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Power your game&apos;s economy
          </motion.h2>
        </Parallax>
        
        <Parallax speed={10}>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-center text-gray-400 mb-10 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete toolkit for managing your game&apos;s monetization, from payments to NFTs
          </motion.p>
        </Parallax>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-start">
          {/* Feature Navigation */}
          <Parallax speed={15}>
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature) => (
                <motion.button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature)}
                  className={`w-full text-left p-4 sm:p-6 rounded-xl backdrop-blur-sm transition-all duration-300 
                    ${
                      selectedFeature.id === feature.id
                        ? "bg-gradient-to-r from-[#00D632]/20 to-[#00FF94]/20"
                        : "hover:bg-white/5"
                    } 
                    flex flex-col relative overflow-hidden group`}
                  whileHover={{ x: 5 }}
                >
                  {/* Gradient border effect */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 
                    ${selectedFeature.id === feature.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00FF94]/50 to-[#00FF94] opacity-50"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0, 0 0)",
                        transition: "clip-path 0.3s ease-in-out",
                      }}
                    />
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-2">{feature.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight
                        className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 hidden lg:block ${
                          selectedFeature.id === feature.id ? "text-[#00FF94] translate-x-2" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`lg:hidden mt-2 sm:mt-4 flex justify-center ${
                      selectedFeature.id === feature.id ? "text-[#00FF94]" : "text-gray-400"
                    }`}
                  >
                    <ChevronDown
                      className={`w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 ${
                        selectedFeature.id === feature.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </Parallax>
          {/* Feature Display */}
          <Parallax speed={20}>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mt-6 lg:mt-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    {/* Main Stats Card */}
                    <motion.div
                      className="absolute inset-[40px] rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 border border-gray-800"
                      animate={{ rotate: [0, 1, 0], y: [0, -5, 0] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        {selectedFeature.stats.map((stat, index) => (
                          <div key={index} className="p-2 sm:p-4 rounded-lg bg-black/50">
                            <div className="text-[#00FF94] text-lg sm:text-xl md:text-2xl font-bold">{stat.value}</div>
                            <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    {/* Floating Accent Cards */}
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-gradient-to-r from-[#00D632]/20 to-[#00FF94]/20 backdrop-blur-sm"
                      animate={{ rotate: [0, 5, 0], scale: [1, 1.02, 1] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-r from-[#00FF94]/20 to-[#00D632]/20 backdrop-blur-sm"
                      animate={{ rotate: [0, -5, 0], scale: [1, 1.05, 1] }}
                      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  )
}