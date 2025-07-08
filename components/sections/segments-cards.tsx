"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { segments } from "@/data/segments"
import { scrollToSection } from "@/utils/scroll"

export function SegmentsCards() {
  return (
    <section id="segments" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Competition Segments
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              className={`relative group cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection(segment.id)}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${segment.color} rounded-full flex items-center justify-center text-2xl`}
                  >
                    {segment.icon}
                  </div>
                  <CardTitle
                    className={`text-xl font-bold bg-gradient-to-r ${segment.color} bg-clip-text text-transparent`}
                  >
                    {segment.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{segment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className={`w-full bg-gradient-to-r ${segment.color} hover:opacity-90 transition-opacity`}
                    onClick={() => scrollToSection(segment.id)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
