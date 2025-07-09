// data/event-organizers.ts
export interface EventOrganizer {
  name: string
  designation: string
  role: string
  image: string
  tier: string
  phone?: string
}

export const eventOrganizers: EventOrganizer[] = [
  {
    name: "Junayed Ahmed",
    designation: "President, RMEDU Student Club",
    role: "Event Management",
    image: "/junayed.png",
    tier: "1",
  },
  {
    name: "Abyead Zarif Hassan",
    designation: "Vice President, RMEDU Student Club",
    role: "Event Management",
    image: "/zarif.jpg",
    tier: "1",
  },
  {
    name: "Tanvir Ahmed",
    designation: "Vice President, RMEDU Student Club",
    role: "Event Management",
    image: "/tanvir.jpg",
    tier: "1",
  },
  {
    name: "Aniruddha Majumder",
    designation: "General Secretary, RMEDU Student Club",
    role: "Event Management",
    image: "/aniruddho.jpg",
    tier: "1",
  },
  {
    name: "S M Mahin Abrar",
    designation: "Treasurer, RMEDU Student Club",
    role: "Event Management",
    image: "/mahin.jpg",
    tier: "1",
  },
]