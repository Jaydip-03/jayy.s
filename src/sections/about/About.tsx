// "use client";

// import { motion } from "framer-motion";
// import AboutContent from "./AboutContent";
// import AboutCodeCard from "./AboutCodeCard";
// import AboutFooter from "./AboutFooter";

// export default function About() {
//   return (
//     <section id="about" className="bg-white text-black py-16 lg:py-20">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mb-12">
//           <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
//             04 / ABOUT
//           </p>
//           <div className="h-px w-full bg-neutral-200" />
//         </div>

//         <div className="grid items-center gap-14 lg:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//           >
//             <AboutContent />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             <AboutCodeCard />
//           </motion.div>
//         </div>

//         <AboutFooter />
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AboutContent from "./AboutContent";
import AboutCodeCard from "./AboutCodeCard";
import AboutFooter from "./AboutFooter";

export default function About() {
  return (
    <section id="about" className="bg-white text-black py-16 lg:py-20">
      <Container>
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            04 / ABOUT
          </p>
          <div className="h-px w-full bg-neutral-200" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <AboutContent />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AboutCodeCard />
          </motion.div>
        </div>

        <AboutFooter />
      </Container>
    </section>
  );
}