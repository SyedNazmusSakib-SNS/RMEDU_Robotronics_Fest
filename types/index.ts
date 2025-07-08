export interface Segment {
  id: string
  name: string
  color: string
  icon: string
  description: string
  prizes: {
    first: string
    second: string
    third: string
  }
}

export interface Organizer {
  name: string
  designation: string
  role: string
  phone: string
  image: string
  tier: "head" | "second" | "third"
}

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}
