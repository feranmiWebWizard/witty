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
    <footer className="bg-peach text-center w-full py-8">
      <section className="px-4 space-y-4">
        <div className="w-full">
          <ul className="font-thin lg:flex justify-center gap-4">
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/" activeStyle={{ color: "black" }}>
                Home
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/coming-soon" activeStyle={{ color: "black" }}>
                Our Story
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/coming-soon" activeStyle={{ color: "black" }}>
                Menu
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/coming-soon" activeStyle={{ color: "black" }}>
                Order Now
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                y: -4,
              }}
            >
              <NavLink to="/coming-soon" activeStyle={{ color: "black" }}>
                Privacy Policy
              </NavLink>
            </motion.li>
          </ul>
        </div>
        <div className="space-x-4">
          <FontAwesomeIcon
            className="w-[1.5rem] h-[1.5rem]"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="w-[1.5rem] h-[1.5rem]"
            icon={faWhatsapp}
          />
          <FontAwesomeIcon className="w-[1.5rem] h-[1.5rem]" icon={faTwitter} />
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
