"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { organizers } from "@/data/organizers"

export function OrganizersSection() {
  const conveners = organizers.filter((org) => org.tier === "head")
  const directors = organizers.filter((org) => org.tier === "second")
  const advisers = organizers.filter((org) => org.tier === "third")

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Organizers
        </motion.h2>

        {/* Row 1 - Conveners */}
        <div className="mb-16">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              {conveners.map((organizer, index) => (
                <motion.div
                  key={organizer.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-[420px] w-full max-w-[300px]">
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
                        <span className="line-clamp-2 text-center text-sm">{organizer.designation}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="text-pink-400 font-semibold h-12 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.role}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Directors */}
        <div className="mb-16">
          <div className="flex justify-center">
            <div
              className="
                grid grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-5 
                gap-6 
                max-w-7xl
              "
            >
              {directors.map((organizer, index) => (
                <motion.div
                  key={`${organizer.name}-${organizer.role}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-[420px] w-full max-w-[280px]">
                    <CardHeader className="text-center pb-4">
                      <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-pink-400 p-1">
                        <img
                          src={organizer.image || "/placeholder.svg"}
                          alt={organizer.name}
                          className="w-full h-full rounded-full object-cover bg-gray-800"
                        />
                      </div>
                      <CardTitle className="text-lg text-white h-14 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.name}</span>
                      </CardTitle>
                      <CardDescription className="text-cyan-400 h-12 flex items-center justify-center">
                        <span className="line-clamp-2 text-center text-sm">{organizer.designation}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="text-pink-400 font-semibold h-16 flex items-center justify-center">
                        <span className="line-clamp-3 text-center text-sm">{organizer.role}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 - Advisers (Always Centered) */}
        {/* Row 3 - Advisers (Always Perfectly Centered) */}
        <div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
              {advisers.map((organizer, index) => (
                <motion.div
                  key={`${organizer.name}-${organizer.role}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-[420px] w-full max-w-[300px]">
                    <CardHeader className="text-center pb-4">
                      <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-pink-400 p-1">
                        <img
                          src={organizer.image || "/placeholder.svg"}
                          alt={organizer.name}
                          className="w-full h-full rounded-full object-cover bg-gray-800"
                        />
                      </div>
                      <CardTitle className="text-lg text-white h-14 flex items-center justify-center">
                        <span className="line-clamp-2 text-center">{organizer.name}</span>
                      </CardTitle>
                      <CardDescription className="text-cyan-400 h-12 flex items-center justify-center">
                        <span className="line-clamp-2 text-center text-sm">{organizer.designation}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="text-pink-400 font-semibold h-16 flex items-center justify-center">
                        <span className="line-clamp-3 text-center text-sm">{organizer.role}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
