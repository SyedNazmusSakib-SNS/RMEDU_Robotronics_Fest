"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Robotics and Mechatronics Engineering
            <br />
                  University of Dhaka
          </h3>
        </div>
        <div className="text-gray-400 space-y-2">
          <p>Copyright Reserved by Department of Robotics and Mechatronics Engineering</p>
          <p>Created by Syed Nazmus Sakib</p>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
            <Mail className="w-4 h-4 mr-2" />
            rmedu@rme.du.ac.bd
          </Button>
        </div>
      </div>
    </footer>
  )
}
