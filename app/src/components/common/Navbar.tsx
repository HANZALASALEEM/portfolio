"use client";
import { useEffect, useState } from "react";
import HomeIcon from "../../assets/images/icons/HomeIcon";
import AboutIcon from "../../assets/images/icons/AboutIcon";
import ProjectsIcon from "../../assets/images/icons/ProjectsIcon";
import ServicesIcon from "../../assets/images/icons/ServicesIcon";
import ContactIcon from "../../assets/images/icons/ContactIcon";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState("");

  const navigation = [
    { href: "#home", label: "Home", icon: <HomeIcon /> },
    { href: "#about", label: "About", icon: <AboutIcon /> },
    { href: "#projects", label: "Projects", icon: <ProjectsIcon /> },
    { href: "#services", label: "Services", icon: <ServicesIcon /> },
    { href: "#contact", label: "Contact", icon: <ContactIcon /> },
  ];

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <>
      {/* For Large Screens */}
      <nav className="w-full hidden min-[850px]:flex bg-secondary items-center justify-center h-[70px] z-50">
        <div className="w-1/6 min-[1100px]:w-1/4  flex justify-center items-center">
          <div className="w-[95%] h-1 bg-primary rounded-full shadow-primary" />
        </div>
        <div className="w-4/6 min-[1100px]:w-1/2 flex justify-center items-center">
          <ul className="flex w-full justify-evenly items-center">
            {navigation.map(({ href, label }) => (
              <a key={href} href={href} className="block">
                <li
                  className={`group py-1 rounded-full px-6 transition-colors duration-300 ${
                    activeHash === href
                      ? "bg-primary shadow-primary"
                      : "bg-secondary hover:bg-primary hover:shadow-primary"
                  }`}
                >
                  <span
                    className={`transition-colors duration-300 ${
                      activeHash === href
                        ? "text-white"
                        : "text-primary group-hover:text-white"
                    }`}
                  >
                    {label}
                  </span>
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="w-1/6 min-[1100px]:w-1/4 flex justify-center items-center">
          <div className="w-[95%] h-1 bg-primary rounded-full shadow-primary" />
        </div>
      </nav>

      {/* For Small Screens */}
      <nav className="fixed bottom-2 min-[850px]:hidden w-full bg-transparent z-50">
        <div className="flex justify-center">
          <div className="gap-3 px-6 py-1 bg-primary shadow-primary flex justify-evenly items-center rounded-full w-[90%] max-w-sm shadow-md">
            {navigation.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                className={`flex flex-col items-center transition-colors ${
                  activeHash === href
                    ? "text-white"
                    : "text-background hover:text-white"
                }`}
              >
                {icon}
                <span className="text-xs">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
