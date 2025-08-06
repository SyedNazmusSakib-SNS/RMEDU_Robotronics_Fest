"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Calendar } from "lucide-react"

const timelineData = [
  {
    day: "Day 1",
    date: "09.08.25",
    events: [
      {
        time: "08:00 - 09:00 AM",
        name: "Registration",
        place: "Event Site",
        color: "from-cyan-400 to-blue-500"
      },
      {
        time: "09:00 - 09:45 AM",
        name: "Opening Ceremony",
        place: "Senate Conference Room",
        color: "from-green-400 to-emerald-500"
      },
      {
        time: "09:30 AM - 07:00 PM",
        name: "DU AI Challenge",
        place: "Science Complex - Dept. of RME (9th Floor)",
        color: "from-purple-400 to-pink-500"
      },
      {
        time: "10:00 AM - 06:00 PM",
        name: "SoccerBot",
        place: "Senate Alumni Hall Room",
        color: "from-orange-400 to-red-500"
      },
      {
        time: "10:00 AM - 06:00 PM",
        name: "Micromouse",
        place: "Senate Conference Room",
        color: "from-indigo-400 to-purple-500"
      }
    ]
  },
  {
    day: "Day 2",
    date: "10.08.25",
    events: [
      {
        time: "08:00 - 09:00 AM",
        name: "Registration",
        place: "Event Site",
        color: "from-cyan-400 to-blue-500"
      },
      {
        time: "10:00 AM - 03:00 PM",
        name: "Project Showcase",
        place: "Senate - Alumni Hall Room",
        color: "from-green-400 to-emerald-500"
      },
      {
        time: "10:00 AM - 03:00 PM",
        name: "Line Follower Robot",
        place: "Senate Conference Room",
        color: "from-purple-400 to-pink-500"
      },
      {
        time: "04:00 - 06:00 PM",
        name: "Closing Ceremony",
        place: "Senate Auditorium",
        color: "from-pink-400 to-rose-500"
      }
    ]
  }
]

export function TimelineSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Event Timeline
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Two days of intense competition, innovation, and technological excellence
          </motion.p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {timelineData.map((dayData, dayIndex) => (
            <motion.div
              key={dayData.day}
              className="relative"
              initial={{ opacity: 0, x: dayIndex === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: dayIndex * 0.3 }}
            >
              {/* Day Header */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-8 py-4 border border-cyan-500/30">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    {dayData.day}
                  </h3>
                  <span className="text-xl text-gray-300">{dayData.date}</span>
                </div>
              </motion.div>

              {/* Timeline Container */}
              <div className="relative">
                {/* Main Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-pink-400 to-purple-400 opacity-60"></div>
                
                {/* Timeline Events */}
                <div className="space-y-8">
                  {dayData.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      className="relative flex items-start gap-6"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: dayIndex * 0.3 + eventIndex * 0.2 
                      }}
                    >
                      {/* Timeline Node */}
                      <motion.div
                        className="relative z-10 flex-shrink-0"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg shadow-black/20`}>
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                        {/* Glowing Effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} opacity-30 blur-md`}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: eventIndex * 0.5,
                          }}
                        />
                      </motion.div>

                      {/* Event Card */}
                      <motion.div
                        className="flex-1 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Event Header */}
                        <div className="flex items-center justify-between mb-4">
                          <h4 className={`text-2xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                            {event.name}
                          </h4>
                          <span className="text-sm text-gray-400 bg-gray-800/60 px-3 py-1 rounded-full">
                            {event.time}
                          </span>
                        </div>

                        {/* Event Location */}
                        <div className="flex items-center gap-2 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                          <MapPin className="w-5 h-5" />
                          <span className="text-lg">{event.place}</span>
                        </div>

                        {/* Hover Effect Line */}
                        <motion.div
                          className={`h-1 bg-gradient-to-r ${event.color} rounded-full mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          <motion.p
            className="text-gray-400 mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Be part of the future of robotics and technology
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}