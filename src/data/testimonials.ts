export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Bro says 'I'll just fix one thing' and three hours later the whole project looks different 😂. Somehow it usually ends up better though.",
    name: "Sakshi",
    role: "Friend",
  },
  {
    id: "2",
    quote:
      "Jaydip can turn a simple assignment into a full-stack project 😂. Give him one idea and he'll come back with five new features nobody asked for.",
    name: "Bhushan",
    role: "caloj Mittar",
  },
  {
    id: "3",
    quote:
      "The guy cannot leave a project alone 😂. He's always changing something, learning something new, or saying 'brooo wait, I have an idea.",
    name: "Sarvesh",
    role: " caloj Frnd",
  },
  {
    id: "4",
    quote:
      "50% coding, 30% experimenting, 20% sending screenshots saying 'bro look at this' 😂. But you can't deny, he's always building something.",
    name: "Nilam",
    role: "Friend",
  },
];
