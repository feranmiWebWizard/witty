import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  faTwitter,
  faWhatsapp,
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-peach w-full py-8 px-4">
      <section className="px-4 space-y-4">
        <div className="w-full">
          <ul className="font-thin text-lg lg:flex justify-center gap-4 space-y-4 lg:space-y-0">
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/">Home</NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/about">Our Story</NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/coming-soon">Menu</NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/coming-soon">Order Now</NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/coming-soon">Privacy Policy</NavLink>
            </motion.li>
          </ul>
        </div>
        <div className="space-x-4 text-center">
          <a
            href="https://www.instagram.com/witty_bakehouse/"
            className="px-2"
            target="_blank"
          >
            <FontAwesomeIcon
              className="w-[1.5rem] h-[1.5rem]"
              icon={faInstagram}
            />
          </a>
          <a
            href="https://twitter.com/wittyrye?s=20"
            className="px-2"
            target="_blank"
          >
            <FontAwesomeIcon
              className="w-[1.5rem] h-[1.5rem]"
              icon={faTwitter}
            />
          </a>
          <FontAwesomeIcon
            className="w-[1.5rem] h-[1.5rem]"
            icon={faWhatsapp}
          />
          <FontAwesomeIcon
            className="w-[1.5rem] h-[1.5rem]"
            icon={faSquareFacebook}
          />
        </div>
      </section>
      <sub className="font-thin">Copyright@2024 All right reserved</sub>
    </footer>
  );
}

export default Footer;
