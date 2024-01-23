import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import logo from "../../src/assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";

function Navbar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const buttonData = {
    name: "Order now!",
    color: "#F7B2B7DE",
    textColor: "#000000",
  };

  return (
    <nav className="bg-purple sticky top-0 inset-x-0 z-[10] p-4">
      <div className="flex justify-end relative lg:hidden px-4 py-2 z-10">
        <motion.button
          animate={mobileNav ? "open" : "closed"}
          onClick={() => {
            toggleMobileNav();
          }}
          className="space-y-1 "
        >
          <motion.span
            variants={{
              open: { rotate: 45, y: 7 },
              closed: { rotate: 0, y: 0 },
            }}
            className="bg-white block w-5 h-[0.2rem]"
          ></motion.span>
          <motion.span
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            className="bg-white block w-5 h-[0.2rem]"
          ></motion.span>
          <motion.span
            variants={{
              open: { rotate: -45, y: -8 },
              closed: { rotate: 0, y: 0 },
            }}
            className="bg-white block w-5 h-[0.2rem]"
          ></motion.span>
        </motion.button>
      </div>

      {/* logic to handle opening of dropdown menu */}
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig transition={{ type: "spring", bounce: 0.099 }}>
            <motion.div
              variants={{
                open: {
                  y: "0%",
                  transition: {
                    when: "beforeChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
                closed: {
                  y: "-100%",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.099,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-purple text-white flex flex-col justify-center fixed inset-0 lg:hidden"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, x: "0%" },
                  closed: { opacity: 0, x: "25%" },
                }}
              >
                <ul className="text-2xl font-semibold space-y-10 p-10 inset-0">
                  <motion.li
                    variants={{
                      tapped: { scale: 1.2 },
                      untouched: { scale: 1 },
                    }}
                    whileTap="tapped"
                    initial="untouched"
                    className=""
                  >
                    <NavLink
                      onClick={() => {
                        toggleMobileNav();
                      }}
                      to="/"
                      activeStyle={{ color: "black" }}
                    >
                      Home
                    </NavLink>
                  </motion.li>
                  <motion.li
                    variants={{
                      tapped: { scale: 1.2 },
                      untouched: { scale: 1 },
                    }}
                    whileTap="tapped"
                    initial="untouched"
                    className=""
                  >
                    <NavLink
                      onClick={() => {
                        toggleMobileNav();
                      }}
                      to="/about"
                      activeStyle={{ color: "black" }}
                    >
                      Our Story
                    </NavLink>
                  </motion.li>
                  <motion.li
                    variants={{
                      tapped: { scale: 1.2 },
                      untouched: { scale: 1 },
                    }}
                    whileTap="tapped"
                    initial="untouched"
                    className=""
                  >
                    <NavLink
                      onClick={() => {
                        toggleMobileNav();
                      }}
                      to="/coming-soon"
                      activeStyle={{ color: "black" }}
                    >
                      Contact
                    </NavLink>
                  </motion.li>
                  <motion.li
                    variants={{
                      tapped: { scale: 1.2 },
                      untouched: { scale: 1 },
                    }}
                    whileTap="tapped"
                    initial="untouched"
                    className=""
                  >
                    <NavLink
                      onClick={() => {
                        toggleMobileNav();
                      }}
                      to="/coming-soon"
                      activeStyle={{ color: "black" }}
                    >
                      Cakes & More
                    </NavLink>
                  </motion.li>
                  <motion.li
                    variants={{
                      tapped: { scale: 1.2 },
                      untouched: { scale: 1 },
                    }}
                    whileTap="tapped"
                    initial="untouched"
                    className=""
                  >
                    <NavLink
                      onClick={() => {
                        toggleMobileNav();
                      }}
                      to="/coming-soon"
                      activeStyle={{ color: "black" }}
                    >
                      Order Now
                    </NavLink>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>

      <div className="text-white text-xl hidden lg:flex justify-around">
        <div>
          <img
            className="rounded-[50%] absolute "
            src={logo}
            alt="witty bakehouse's logo"
          />
        </div>
        <ul className="text-2xl flex items-center space-x-10">
          <motion.li whileHover={{ y: -5 }} className="">
            <NavLink to="/" activeStyle={{ color: "black" }}>
              Home
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} className="">
            <NavLink to="/about" activeStyle={{ color: "black" }}>
              Our Story
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} className="">
            <NavLink to="/coming-soon" activeStyle={{ color: "black" }}>
              Contact
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} className="">
            <NavLink to="/coming-soon" activeStyle={{ color: "black" }}>
              Cakes & More
            </NavLink>
          </motion.li>
          <Button {...buttonData} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
