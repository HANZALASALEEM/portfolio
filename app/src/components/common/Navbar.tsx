const Navbar = () => {
  return (
    <>
      {/* For Large Screens */}
      <nav className="w-full hidden min-[850px]:flex bg-secondary items-center justify-center h-[70px] z-50">
        <div className="w-1/6 min-[1100px]:w-1/4  flex justify-center items-center">
          <div className="w-[95%] h-1 bg-primary rounded-full" />
        </div>
        <div className="w-4/6 min-[1100px]:w-1/2 flex justify-center items-center">
          <ul className="flex w-full justify-evenly items-center">
            <li className="group py-1 rounded-full px-6 bg-secondary hover:bg-primary transition-colors duration-300">
              <a
                href="#home"
                className="text-primary group-hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>

            <li className="group py-1 rounded-full px-6 bg-secondary hover:bg-primary transition-colors duration-300">
              <a
                href="#about"
                className="text-primary group-hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="group py-1 rounded-full px-6 bg-secondary hover:bg-primary transition-colors duration-300">
              <a
                href="#projects"
                className="text-primary group-hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li className="group py-1 rounded-full px-6 bg-secondary hover:bg-primary transition-colors duration-300">
              <a
                href="#services"
                className="text-primary group-hover:text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li className="group py-1 rounded-full px-6 bg-secondary hover:bg-primary transition-colors duration-300">
              <a
                href="#contact"
                className="text-primary group-hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/6 min-[1100px]:w-1/4 flex justify-center items-center">
          <div className="w-[95%] h-1 bg-primary rounded-full" />
        </div>
      </nav>

      {/* For Small Screens */}
      <nav className="fixed bottom-2 min-[850px]:hidden w-full bg-background z-50">
        <div className="flex justify-center">
          <div className="gap-3 px-6 py-1 bg-primary flex justify-evenly items-center rounded-full w-[90%] max-w-sm shadow-md">
            <a
              href="#home"
              className="flex flex-col items-center text-background hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-xs">Home</span>
            </a>
            <a
              href="#about"
              className="flex flex-col items-center text-background hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-xs">About</span>
            </a>

            <a
              href="#projects"
              className="flex flex-col items-center text-background hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                <path
                  fillRule="evenodd"
                  d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                  clipRule="evenodd"
                />
                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
              </svg>
              <span className="text-xs">Projects</span>
            </a>

            <a
              href="#services"
              className="flex flex-col items-center text-background hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571V15H4V5.78571ZM12 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1ZM8.27586 6.31035c.38089-.39993 1.01387-.41537 1.4138-.03449l2.62504 2.5c.1981.18875.3103.45047.3103.72414 0 .27368-.1122.5354-.3103.7241l-2.62504 2.5c-.39993.3809-1.03291.3655-1.4138-.0344-.38088-.4-.36544-1.033.03449-1.4138L10.175 9.5 8.31035 7.72414c-.39993-.38089-.41537-1.01386-.03449-1.41379Z"
                  clipRule="evenodd"
                />
                <path d="M2 17v1c0 1.1046.89543 2 2 2h16c1.1046 0 2-.8954 2-2v-1H2Z" />
              </svg>
              <span className="text-xs">Services</span>
            </a>

            <a
              href="#contact"
              className="flex flex-col items-center text-background hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z" />
                <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z" />
              </svg>

              <span className="text-xs">Contact</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
