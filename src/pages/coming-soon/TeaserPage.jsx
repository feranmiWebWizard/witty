import { motion } from "framer-motion";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

function TeaserPage() {
  return (
    <>
      <Navbar />
      <section className="bg-peach1 flex justify-center items-center w-full h-[100vh]">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-purple text-5xl"
        >
          Coming Soon
          <motion.span
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            initial={{ opacity: 0 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            initial={{ opacity: 0 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            initial={{ opacity: 0 }}
          >
            .
          </motion.span>
        </motion.h1>
      </section>
      <Footer />
    </>
  );
}

export default TeaserPage;
