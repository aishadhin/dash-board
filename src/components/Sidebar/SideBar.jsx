import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaUsers, FaUser } from "react-icons/fa";
import {
  MdMessage,
  MdImageAspectRatio,
  MdOutlineAnalytics,
} from "react-icons/md";
import { BiSearch, BiListUl } from "react-icons/bi";
import { AiOutlineFileAdd, AiOutlineDollarCircle } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/assistants",
    name: "Assistants",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/assistants/view-all-clients",
        name: "View All ",
      },
      {
        path: "/assistants/add-new-assistants",
        name: "Add New Assistants",
      },
    ],
  },
  {
    path: "/clients",
    name: "Clients",
    icon: <FaUsers />,
    subRoutes: [
      {
        path: "/clients/view-all-clients",
        name: "View All Clients",
      },
      {
        path: "/clients/add-new-assistants",
        name: "Add New Clients",
      },
    ],
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <AiOutlineProject />,
    subRoutes: [
      {
        path: "/projects/orderd-projects",
        name: "Ordered Projects",
      },
      {
        path: "/projects/recurring-services",
        name: "Recurring Services",
      },
      {
        path: "/projects/schedualed-services",
        name: "Schedualed Services",
      },
    ],
  },
  {
    path: "/order-service",
    name: "Order Service",
    icon: <AiOutlineFileAdd />,
  },
  {
    path: "/draft-services",
    name: "Draft Services",
    icon: <MdImageAspectRatio />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <MdOutlineAnalytics />,
  },
  {
    path: "/services-offered",
    name: "Services Offered",
    icon: <BiListUl />,
    subRoutes: [
      {
        path: "/services-offered/view-all-services",
        name: "View All Services "
      },
      {
        path: "/services-offered/price-list",
        name: "Price List"
      },
    ],
  },
  {
    path: "/deposit-fund",
    name: "Deposit Fund",
    icon: <AiOutlineDollarCircle />,
  },
  {
    path: "/transaction-logs",
    name: "Transaction Logs",
    icon: <BsCardList />,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <MdMessage />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Logo
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
