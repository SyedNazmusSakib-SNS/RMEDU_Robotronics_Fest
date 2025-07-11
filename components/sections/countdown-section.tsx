"use client"

import { motion } from "framer-motion"
import type { TimeLeft } from "@/types"

interface CountdownSectionProps {
  timeLeft: TimeLeft
}

export function CountdownSection({ timeLeft }: CountdownSectionProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dynamic Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950" />
        
        {/* Animated mesh gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(6, 182, 212, 0.2) 0%, transparent 50%, rgba(236, 72, 153, 0.2) 100%)",
              "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, transparent 50%, rgba(6, 182, 212, 0.2) 100%)",
              "linear-gradient(45deg, rgba(6, 182, 212, 0.2) 0%, transparent 50%, rgba(236, 72, 153, 0.2) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-fuchsia-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Title with Spectacular Effects */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative"
            style={{
              background: "linear-gradient(45deg, #00f5ff, #ff00ff, #00f5ff)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Event Countdown
            
            {/* Glowing underline */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.h2>
          
          {/* Subtitle with elegant animation */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The moment you've been waiting for is almost here
          </motion.p>
        </motion.div>
        
        {/* Magnificent Registration CTA */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScFLSQxR1ubCLVyGAZBDOjGiFI4gavwiPTpAkGTr_4Jp8iFcw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            
            {/* Button container */}
            <div className="relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 p-0.5 rounded-full">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-full px-12 py-6 group-hover:from-gray-800 group-hover:to-gray-900 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  {/* Animated sparkle */}
                  <motion.div
                    className="text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.div>
                  
                  {/* Text with shimmer effect */}
                  <motion.span
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
                    style={{ backgroundSize: "200% 200%" }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Register Now
                  </motion.span>
                  
                  {/* Animated arrow */}
                  <motion.div
                    className="text-cyan-400 text-2xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Floating particles */}
            <motion.div
              className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 w-4 h-4 bg-pink-400 rounded-full"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.a>
          
          {/* Elegant CTA description */}
          <motion.p
            className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join thousands of others in this extraordinary experience.
          </motion.p>
        </motion.div>
        
        {/* Spectacular Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              className="group relative"
              initial={{ opacity: 0, y: 100, rotateY: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15 + 0.8,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-300 transform-gpu">
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-full opacity-60" />
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-60" />
                
                {/* Time value */}
                <motion.div
                  className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-br from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.5)",
                      "0 0 20px rgba(6, 182, 212, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {value}
                </motion.div>
                
                {/* Unit label */}
                <div className="text-sm md:text-lg text-gray-300 uppercase tracking-wider font-semibold">
                  {unit}
                </div>
                
                {/* Animated progress bar */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 1.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom decorative elements */}
        <motion.div
          className="mt-16 flex justify-center space-x-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}