"use client"

import { motion } from "framer-motion"

const sponsors = [
  { 
    name: "BdREN", 
    logo: "/bdren.jpg",
    description: ""
  },
  { 
    name: "MIS", 
    logo: "/mis.jpg",
    description: ""
  },
  { 
    name: "SincoS", 
    logo: "/sincoS.png",
    description: ""
  },
  { 
    name: "TechShopBD", 
    logo: "/techshopbd.png",
    description: ""
  },
  { 
    name: "Dot Internet", 
    logo: "/dot-internet.png",
    description: ""
  },
]

export function SponsorsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="sponsor-circuit" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,100 Q200,50 400,100 T800,100"
            stroke="url(#sponsor-circuit)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Our Sponsors
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Powered by industry leaders who believe in the future of robotics and innovation
          </motion.p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="group relative"
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Main Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 overflow-hidden h-64 flex flex-col items-center justify-center"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(45deg, #06b6d4, #ec4899, #8b5cf6)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "2px",
                  }}
                  animate={{
                    background: [
                      "linear-gradient(45deg, #06b6d4, #ec4899, #8b5cf6)",
                      "linear-gradient(45deg, #8b5cf6, #06b6d4, #ec4899)",
                      "linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4)",
                      "linear-gradient(45deg, #06b6d4, #ec4899, #8b5cf6)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Logo Container */}
                <motion.div
                  className="relative z-10 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-32 h-32 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl shadow-black/20 group-hover:shadow-cyan-500/20 transition-all duration-500">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-28 max-h-28 object-contain"
                    />
                  </div>
                </motion.div>

                {/* Sponsor Info */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                    {sponsor.description}
                  </p>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                  style={{
                    transform: "skewX(-45deg)",
                  }}
                />
              </motion.div>

              {/* Reflection Effect */}
              <motion.div
                className="absolute top-full left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"
                style={{
                  transform: "perspective(200px) rotateX(45deg)",
                  transformOrigin: "top",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Thank You Message */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.p
            className="text-xl text-gray-300 mb-4"
            animate={{
              textShadow: [
                "0 0 10px rgba(6, 182, 212, 0.5)",
                "0 0 20px rgba(236, 72, 153, 0.5)",
                "0 0 10px rgba(139, 92, 246, 0.5)",
                "0 0 10px rgba(6, 182, 212, 0.5)",
              ]
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Thank you for making Robotronics Fest 2025 possible!
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>
      </div>
    </section>
  )
}