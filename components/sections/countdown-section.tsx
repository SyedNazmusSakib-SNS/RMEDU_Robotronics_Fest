"use client"

import { motion } from "framer-motion"
import type { TimeLeft } from "@/types"

interface CountdownSectionProps {
  timeLeft: TimeLeft
}

export function CountdownSection({ timeLeft }: CountdownSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event Countdown
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-500/30"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                {value}
              </div>
              <div className="text-lg text-gray-300 capitalize">{unit}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
