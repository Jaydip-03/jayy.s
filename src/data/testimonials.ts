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
      "Jaydip picks up backend concepts fast — Spring Boot, REST APIs, database design. He asks the right questions and doesn't stop at 'it works on my machine.'",
    name: "Team Lead",
    role: "Sakshiiii ",
  },
  {
    id: "2",
    quote:
      "One of the most consistent students in the batch. Strong in Core Java and always the first to help classmates debug Hibernate and SQL issues.",
    name: "Colleague",
    role: "Bhushann",
  },
  {
    id: "3",
    quote:
      "Built clean MVC architecture on his projects and actually understood the why behind every layer — not just copying tutorials.",
    name: "Colleague",
    role: "Sarveshh",
  },
  {
    id: "4",
    quote:
      "Reliable in a team setting — communicates clearly, takes feedback well, and ships fixes without needing hand-holding.",
    name: "Colleague",
    role: "Nilam",
  },
];
