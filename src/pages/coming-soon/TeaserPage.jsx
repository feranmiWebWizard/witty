import { motion } from "framer-motion";

function TeaserPage() {
  return (
    <>
      <section className="bg-purple flex justify-center items-center w-full h-[100vh]">
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
          className="text-white text-5xl"
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
    </>
  );
}

export default TeaserPage;
