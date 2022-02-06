import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

const socialMedia = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/rminbkh" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/arminbkh" },
  { icon: <FaTwitter />, href: "https://twitter.com/arminbkh" },
];

const links = [
  { to: "/", title: "Home", icon: <FaHome /> },
  { to: "/foods", title: "Menu", icon: <MdOutlineMenuBook /> },
  { to: "/Cart", title: "Cart", icon: <IoMdCart /> },
];

const Footer = () => {
  return (
    <footer className="layoutPadding shadow text-red-400">
      <div className="flex flex-between flex-col md:flex-row items-start">
        <ul className="text-black flex md:flex-col mb-5 md:mb-0 text-sm md:text-base">
          {links.map((link) => (
            <li className="mr-3 md:mr-0 last:mr-0" key={link.to}>
              <Link
                className="flex-center justify-start hover:text-red-400 trnasition-all"
                to={link.to}
              >
                <span className="mr-2">{link.icon}</span>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mb-5 w-full md:w-1/2 text text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          distinctio expedita soluta nam nobis fugiat qui veritatis libero ipsam
          deleniti.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex-between">
        <p className="text-xs">copyRight Armin Bakhshi &copy;</p>
        <nav>
          <ul className="flex-center text">
            {socialMedia.map((link, index) => (
              <li key={index} className="mx-3 md:mx-5">
                <a
                  className={`hover:text-black transition-all`}
                  href={link.href}
                  target="_blank"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
