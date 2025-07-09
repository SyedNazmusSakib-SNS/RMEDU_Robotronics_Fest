"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { eventOrganizers } from "@/data/event-organizers"

export function EventOrganizersSection() {
  // Group organizers by tier and sort tiers numerically
  const organizedByTier = eventOrganizers
    .reduce((acc, organizer) => {
      const tier = organizer.tier
      if (!acc[tier]) acc[tier] = []
      acc[tier].push(organizer)
      return acc
    }, {} as Record<string, typeof eventOrganizers>)

  // Sort tiers numerically
  const sortedTiers = Object.keys(organizedByTier).sort((a, b) => parseInt(a) - parseInt(b))

  // Get grid classes based on number of items in tier
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

        {/* Render organizers by tier */}
        <div className="space-y-16">
          {sortedTiers.map((tier) => {
            const tiersOrganizers = organizedByTier[tier]
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