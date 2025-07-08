"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { segments } from "@/data/segments"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-pink-900/20" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating code elements */}
        <motion.div
          className="absolute top-32 left-16 text-cyan-400/40 font-mono text-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          {"<RobotController>"}
        </motion.div>
        <motion.div
          className="absolute top-48 right-24 text-pink-400/40 font-mono text-sm"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          {"function autonomousBot() {"}
        </motion.div>
        <motion.div
          className="absolute bottom-48 left-32 text-green-400/40 font-mono text-sm"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          {"#include <robotics.h>"}
        </motion.div>
        <motion.div
          className="absolute top-64 right-48 text-purple-400/40 font-mono text-sm"
          animate={{
            y: [0, 25, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          {"class MicroMouse {"}
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-16 text-orange-400/40 font-mono text-sm"
          animate={{
            y: [0, -18, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY }}
        >
          {"data.analyze()"}
        </motion.div>

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-32 h-32 border-2 border-cyan-500/30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-green-500/40 rotate-45"
          animate={{
            rotate: [45, 405],
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 5, repeat: Number.POSITIVE_INFINITY },
          }}
        />

        {/* Circuit-like lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.path
            d="M200,400 Q400,300 600,400 T1000,400"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
        </svg>

        {/* Particle effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
        {/* Top Section with Logos */}
        <div className="absolute top-8 left-0 right-0 flex justify-between items-start px-8">
          {/* Left: DU and RMEDU Logos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-8"
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden border-3 border-gradient-to-r from-cyan-400/50 to-blue-400/50 shadow-2xl shadow-cyan-500/20"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              <img
                src="/DU_Logo.jpg"
                alt="DU Logo"
                className="object-cover w-full h-full rounded-full"
              />
            </motion.div>
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden border-3 border-gradient-to-r from-pink-400/50 to-purple-400/50 shadow-2xl shadow-pink-500/20"
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: '0 0 30px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              <img
                src="/RMEDU_Logo.png"
                alt="RMEDU Logo"
                className="object-cover w-full h-full rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Right: University Badge and Date */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-end space-y-3"
          >
            <div className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-semibold">UNIVERSITY OF DHAKA</span>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              09-10 August 2025
            </Badge>
          </motion.div>
        </div>

        {/* Center: ICT Division Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 mt-8"
        >
          <div className="inline-flex flex-col items-center space-y-6">
            <motion.div
              className="w-36 h-36 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden border-4 border-gradient-to-r from-green-400/50 to-emerald-400/50 shadow-2xl shadow-green-500/20"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)'
              }}
              animate={{
                boxShadow: [
                  '0 0 40px rgba(34, 197, 94, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)',
                  '0 0 60px rgba(34, 197, 94, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.2)',
                  '0 0 40px rgba(34, 197, 94, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)'
                ]
              }}
            >
              <img
                src="/ict_div_logo.png"
                alt="ICT Division Logo"
                className="object-cover w-full h-full rounded-full scale-90"
              />
            </motion.div>
            <motion.span 
              className="text-3xl font-bold text-white tracking-wider"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              PRESENTS
            </motion.span>
          </div>
        </motion.div>

        {/* Main Event Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Main icon container */}
            <motion.div
              className="w-96 h-96 mx-auto mb-8 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl border-4 border-cyan-500/30 flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background inside container */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-purple-500/10" />

              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="circuit-main" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0,20 L40,20 M20,0 L20,40" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
                      <circle cx="20" cy="20" r="2" fill="#ec4899" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit-main)" />
                </svg>
              </div>

              {/* Main event icon */}
              <motion.div
                className="z-10 relative"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/icon.jpg"
                  alt="Robotronics Fest Icon"
                  className="w-80 h-80 object-contain rounded-2xl"
                />
              </motion.div>

              {/* Glowing corners */}
              <div className="absolute top-4 left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse opacity-60" />
              <div className="absolute top-4 right-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse opacity-60" />
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-60" />
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-60" />

              {/* Rotating border effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-cyan-500 via-pink-500 to-purple-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>

            {/* Event Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
                ROBOTRONICS FEST 2025
              </h1>
            </motion.div>
          </div>
        </motion.div>

        {/* Segments with animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-2xl md:text-3xl font-bold"
        >
          <div className="flex flex-wrap justify-center items-center gap-4">
            {segments.map((segment, index) => (
              <motion.span
                key={segment.id}
                className={`bg-gradient-to-r ${segment.color} bg-clip-text text-transparent relative`}
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.3,
                }}
                whileHover={{ scale: 1.1 }}
              >
                {segment.name}
                {index < segments.length - 1 && <span className="text-white mx-2">|</span>}

                {/* Glowing underline effect */}
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${segment.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Floating tech icons around the main content */}
        <motion.div
          className="absolute top-1/2 left-8 text-4xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          ⚙️
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-8 text-4xl"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          🔧
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-12 text-4xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
        >
          💻
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-12 text-4xl"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          📡
        </motion.div>
      </div>
    </section>
  )
}