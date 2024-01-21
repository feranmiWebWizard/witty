import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Button({ name, color, textColor }) {
  return (
    <motion.button
      whileHover={{ scale: 1.2, backgroundColor: color, color: textColor }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="bg-black text-white rounded-[1rem] px-4 py-3"
    >
      {name}
    </motion.button>
  );
}
Button.PropTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
export default Button;
