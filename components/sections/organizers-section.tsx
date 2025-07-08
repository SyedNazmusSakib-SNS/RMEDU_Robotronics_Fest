"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { organizers } from "@/data/organizers"

export function OrganizersSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Organizers
        </motion.h2>

        {/* Top Two Organizers */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {organizers
              .filter((org) => org.tier === "head")
              .slice(0, 2)
              .map((organizer, index) => (
                <motion.div
                  key={organizer.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-[400px]">
                    <CardHeader className="text-center pb-4">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-pink-400 p-1">
                        <img
                          src={organizer.image || "/placeholder.svg"}
                          alt={organizer.name}
                          className="w-full h-full rounded-full object-cover bg-gray-800"
                        />
                      </div>
                      <CardTitle className="text-xl text-white h-14 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.name}</span>
                      </CardTitle>
                      <CardDescription className="text-cyan-400 h-12 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.designation}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="text-pink-400 font-semibold h-12 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.role}</span>
                      </div>
                      <div className="flex items-center justify-center text-gray-300 h-6">
                        <Phone className="w-4 h-4 mr-2" />
                        {organizer.phone}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Bottom Five Organizers */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {organizers
              .filter((org) => org.tier === "second" || org.tier === "third")
              .slice(0, 5)
              .map((organizer, index) => (
                <motion.div
                  key={organizer.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-[400px]">
                    <CardHeader className="text-center pb-4">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-pink-400 p-1">
                        <img
                          src={organizer.image || "/placeholder.svg"}
                          alt={organizer.name}
                          className="w-full h-full rounded-full object-cover bg-gray-800"
                        />
                      </div>
                      <CardTitle className="text-xl text-white h-14 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.name}</span>
                      </CardTitle>
                      <CardDescription className="text-cyan-400 h-12 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.designation}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="text-pink-400 font-semibold h-12 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.role}</span>
                      </div>
                      <div className="flex items-center justify-center text-gray-300 h-6">
                        <Phone className="w-4 h-4 mr-2" />
                        {organizer.phone}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}