// organizer.ts (Updated and Organized)

import type { Organizer } from "@/types"

export const organizers: Organizer[] = [
  // Head Organizers (Convener and Co-convener)
  {
    name: "Dr. Sejuti Rahman",
    designation: "Chairperson and Associate Professor",
    role: "Convener",
    phone: "+8001836800864",
    image: "/chairperson.jpg",
    tier: "head",
  },
  {
    name: "Dr. MD Mehedi Hasan",
    designation: "Assistant Professor",
    role: "Co-convener",
    phone: "+8801707034821",
    image: "/mehedi_sir.jpg",
    tier: "head",
  },
  
  // Second Tier (Directors)
    {
    name: "Dr. Shamim Ahmed Deowan",
    designation: "Associate Professor",
    role: "Advisor of SoccerBot Segment",
    phone: "+8801677696189",
    image: "/shamim_sir.jpeg",
    tier: "second",
  },
  {
    name: "Md. Ariful Islam",
    designation: "Assistant Professor",
    role: "Director of SoccerBot Segment",
    phone: "+8801677696189",
    image: "/ariful_sir.jpg",
    tier: "second",
  },
  {
    name: "Md. Jubair Ahmed Sourov",
    designation: "Lecturer",
    role: "Director of LFR Segment",
    phone: "+8801521331734",
    image: "/jubair_sir.jpg",
    tier: "second",
  },
  {
    name: "Shifat-E-Arman",
    designation: "Assistant Professor",
    role: "Director of Micromouse Segment",
    phone: "+8801762333999",
    image: "/Shifat_sir.jpg",
    tier: "second",
  },
  {
    name: "Dr. Abhishek Kumar Ghosh",
    designation: "Assistant Professor",
    role: "Director of Project Showcase Segment",
    phone: "+8801816925531",
    image: "/Abhishek_sir.jpg",
    tier: "second",
  },
  
  // Third Tier (AI Challenge Team)
  {
    name: "Dr. MD Mehedi Hasan",
    designation: "Assistant Professor",
    role: "Director of DU AI Challenge",
    phone: "+8801707034821",
    image: "/mehedi_sir.jpg",
    tier: "third",
  },
  {
    name: "ASM Shihavuddin",
    designation: "Professor, Presidency University",
    role: "Adviser of DU AI Challenge",
    phone: "",
    image: "/shihab_Sir.jpg",
    tier: "third",
  },
]