"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { eventOrganizers } from "@/data/event-organizers"

export function EventOrganizersSection() {
  // Group organizers by tier
  const organizedByTier = eventOrganizers.reduce((acc, organizer) => {
    const tier = organizer.tier
    if (!acc[tier]) acc[tier] = []
    acc[tier].push(organizer)
    return acc
  }, {} as Record<string, typeof eventOrganizers>)

  // Sort tiers numerically
  const sortedTiers = Object.keys(organizedByTier).sort((a, b) => parseInt(a) - parseInt(b))

  // Get grid classes for Tiers 1 & 2
  const getGridClasses = (count: number) => {
    if (count === 1) return "grid-cols-1 max-w-md"
    if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-2xl"
    if (count === 3) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl"
    if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl"
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  }

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Event Organizers
        </motion.h2>

        <div className="space-y-16">
          {sortedTiers.map((tier) => {
            const tiersOrganizers = organizedByTier[tier]

            // Special layout for Tier 3
            if (tier === "3" && tiersOrganizers.length > 0) {
              const webmaster = tiersOrganizers[0]
              return (
                <div key={tier} className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)" }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                    className="max-w-xl w-full"
                  >
                    <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-gray-700/50 flex flex-col md:flex-row items-center p-6 md:p-8 rounded-2xl">
                      <div className="relative mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md animate-pulse"></div>
                        <img
                          src={webmaster.image || "/placeholder.svg"}
                          alt={webmaster.name}
                          className="relative w-40 h-40 rounded-full object-cover bg-gray-800 border-2 border-gray-700"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <CardTitle className="text-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                          {webmaster.name}
                        </CardTitle>
                        <p className="text-xl text-gray-300 mb-4">{webmaster.designation}</p>
                        <div className="inline-block bg-blue-500/20 text-blue-300 font-semibold rounded-full px-4 py-1 text-sm">
                          {webmaster.role}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              )
            }

            // Default grid layout for other tiers
            const gridClasses = getGridClasses(tiersOrganizers.length)
            return (
              <div key={tier} className="w-full">
                <div className={`grid ${gridClasses} gap-8 mx-auto`}>
                  {tiersOrganizers.map((organizer, index) => (
                    <motion.div
                      key={organizer.name}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-emerald-500/50 transition-all duration-300 h-[400px]">
                        <CardHeader className="text-center pb-4">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-blue-400 p-1">
                            <img
                              src={organizer.image || "/placeholder.svg"}
                              alt={organizer.name}
                              className="w-full h-full rounded-full object-cover bg-gray-800"
                            />
                          </div>
                          <CardTitle className="text-xl text-white h-14 flex items-center justify-center">
                            <span className="line-clamp-2 text-center">{organizer.name}</span>
                          </CardTitle>
                          <CardDescription className="text-emerald-400 h-12 flex items-center justify-center">
                            <span className="line-clamp-2 text-center">{organizer.designation}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center space-y-2">
                          <div className="text-blue-400 font-semibold h-12 flex items-center justify-center">
                            <span className="line-clamp-2 text-center">{organizer.role}</span>
                          </div>
                          {organizer.phone && (
                            <div className="flex items-center justify-center text-gray-300 h-6">
                              <Phone className="w-4 h-4 mr-2" />
                              {organizer.phone}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}