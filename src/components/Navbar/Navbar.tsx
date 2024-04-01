import MENU from "../../assets/menu.svg";
import LOGO from "../../assets/LOGO_P.svg";
import LIGTH from "../../assets/LIGTH.webp";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav
      className="fixed top-0 w-full h-auto z-10 backdrop-filter backdrop-blur-sm"
      style={{ boxShadow: "0 2px 4px rgba(146, 161, 176, 0.15)" }}
    >
      <section className="flex justify-between items-center px-16 py-6">
        <img
          className="w-24 h-auto"
          src={LOGO}
          alt={LOGO}
          draggable="false"
          loading="lazy"
        />
        <ul className="flex items-center gap-10 font-glacial-indifference text-lg">
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="cursor-pointer">About</li>
          </Link>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer font-extrabold border-2 border-yelow_body px-3 transition duration-300 ease-in-out transform hover:bg-yelow_body hover:text-white">
            EN
          </li>
          <li className="cursor-pointer">
            <img
              className="w-7 h-auto transition duration-300 ease-in-out transform hover:rotate-90"
              src={LIGTH}
              alt={LIGTH}
              draggable="false"
              loading="lazy"
            />
          </li>
        </ul>
        <div className="hidden lg:flex">
          <button>
            <img src={MENU} alt={MENU} draggable="false" loading="lazy" />
          </button>
        </div>
      </section>
    </nav>
  );
};
