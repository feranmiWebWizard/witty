import propTypes from "prop-types";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import birthdayCake from "../assets/images/birthday-cake.jpg";
import goldenCake from "../assets/images/golden-cake.jpg";

function CardThree({ title, text }) {
  const buttonData = {
    name: "Order now!",
    color: "#F7B2B7DE",
    textColor: "#000000",
  };
  return (
    <>
      <section className="md:grid grid-cols-2 py-[10rem] px-4">
        <motion.section
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center justify-center relative"
        >
          <img className=" relative" src={birthdayCake} alt="a birthday cake" />
          <img
            className=" absolute bottom-[-20%] right-[10%]"
            src={goldenCake}
            alt="a golden birthday cake"
          />
        </motion.section>
        <section className=" max-w-[40rem] flex flex-col gap-4 items-start justify-center mt-[6.5rem] md:mt-0">
          <h1 className="text-3xl">{title}</h1>
          <p>{text}</p>
          <Button {...buttonData} />
        </section>
      </section>
    </>
  );
}

CardThree.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
export default CardThree;
