"use client"

import { motion } from "framer-motion"
import { Trophy, Users, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Segment } from "@/types"

interface SegmentDetailProps {
  segment: Segment
}

export function SegmentDetail({ segment }: SegmentDetailProps) {
  return (
    <section id={segment.id} className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div
              className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${segment.color} rounded-full flex items-center justify-center text-4xl`}
            >
              {segment.icon}
            </div>
            <h2
              className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${segment.color} bg-clip-text text-transparent`}
            >
              {segment.name}
            </h2>
            <p className="text-xl text-gray-300">{segment.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <CardTitle className="text-2xl text-yellow-400">1st Prize</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">{segment.prizes.first}</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 border-gray-400/30">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <CardTitle className="text-2xl text-gray-400">2nd Prize</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">{segment.prizes.second}</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-600/30">
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <CardTitle className="text-2xl text-orange-600">3rd Prize</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white">{segment.prizes.third}</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Users className="w-8 h-8 mr-3 text-cyan-400" />
                Participation Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">General Rules:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Teams must consist of 2-4 members from the same university
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    All participants must be currently enrolled students
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Registration deadline: July 20, 2025
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Participants must bring their own equipment and robots
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90">
                    <FileText className="w-4 h-4 mr-2" />
                    Detailed Rules
                  </Button>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
