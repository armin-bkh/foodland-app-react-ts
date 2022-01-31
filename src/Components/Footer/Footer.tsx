import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialMedia = [
  { icon: <FaInstagram />, href: "" },
  { icon: <FaLinkedin />, href: "" },
  { icon: <FaTwitter />, href: "" },
];

const Footer = () => {
  return (
    <footer className="layoutPadding shadow text-red-400">
      <p className="mb-5 w-full md:w-1/2 text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        distinctio expedita soluta nam nobis fugiat qui veritatis libero ipsam
        deleniti.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam distinctio expedita soluta nam nobis fugiat qui veritatis
        libero ipsam deleniti.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Laboriosam distinctio expedita soluta nam nobis fugiat qui
        veritatis libero ipsam deleniti.
      </p>
      <div className="flex-between">
        <p className="text-xs">copyRight Armin Bakhshi &copy;</p>
        <nav>
          <ul className="flex-center text">
            {socialMedia.map((link, index) => (
              <li key={index} className="mx-3 md:mx-5">
                <a className={``} href={link.href}>
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
