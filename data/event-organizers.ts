// data/event-organizers.ts
export interface EventOrganizer {
  name: string;
  designation: string;
  role: string;
  image: string;
  tier: string;
  phone?: string;
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
  {
    name: "Md. Ajmain Istiak Apon",
    designation: "Printing and Publication Secretary, RMEDU Student Club",
    role: "Head of LFR Segment",
    image: "/apon.jpg",
    tier: "2",
  },
  {
    name: "Shafayat Ahammed Sifat",
    designation: "Cultural Secretary, RMEDU Student Club",
    role: "Head of Project Showcasing Segment",
    image: "/sifat.jpg",
    tier: "2",
  },
  {
    name: "Md Tanjid Ahamed Jim",
    designation: "Sports Secretary, RMEDU Student Club",
    role: "Head of DU AI Challenge Segment",
    image: "/jim.jpg",
    tier: "2",
  },
  {
    name: "Samudra Jit Saha",
    designation: "Research and Information Secretary, RMEDU Student Club",
    role: "Head of SoccerBot Segment",
    image: "/samudra.jpg",
    tier: "2",
  },
  {
    name: "Ashraful Islam Hemel",
    designation: "Social Welfare Secretary, RMEDU Student Club",
    role: "Head of Micromouse Segment",
    image: "/hemel.jpg",
    tier: "2",
  }
//   {
//     name: "Syed Nazmus Sakib",
//     designation: "WebMaster",
//     role: "",
//     image: "/sakib.jpg",
//     tier: "2",
//   },
];
