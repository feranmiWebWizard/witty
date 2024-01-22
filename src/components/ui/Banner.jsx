import { motion } from "framer-motion";

function Banner() {
  return (
    <section className="flex flex-wrap justify-center items-stretch gap-4 py-[1.74rem]">
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="border-2 border-gray-500 rounded-l-[3rem] max-w-[15.6rem] py-[3.75rem] px-[1.5rem]"
      >
        <h2 className=" text-black text-3xl">5+</h2>
        <h4 className=" text-purple text-lg">Years of Experience</h4>
        <p className=" text-gray-500"> Years of honing the craft</p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
        className="border-2 border-gray-500 max-w-[15.6rem] py-[3.75rem] px-[1.5rem]"
      >
        <h2 className=" text-black text-3xl">500+</h2>
        <h4 className=" text-purple text-lg">Cakes Delivered</h4>
        <p className=" text-gray-500">countless smiles, one slice at a time.</p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
        className="border-2 border-gray-500 max-w-[15.6rem] py-[3.75rem] px-[1.5rem]"
      >
        <h2 className=" text-black text-3xl">1k+</h2>
        <h4 className=" text-purple text-lg">Happy Clients</h4>
        <p className=" text-gray-500">
          Customer satisfaction is pour recipe for success
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5 }}
        className="border-2 border-gray-500 rounded-r-[3rem] max-w-[15.6rem] py-[3.75rem] px-[1.5rem]"
      >
        <h2 className=" text-black text-3xl">20+ </h2>
        <h4 className=" text-purple text-lg">Students Taught</h4>
        <p className=" text-gray-500">
          nurturing the next generation of bakers
        </p>
      </motion.section>
    </section>
  );
}

export default Banner;
