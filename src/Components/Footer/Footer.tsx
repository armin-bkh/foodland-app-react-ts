import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialMedia = [
  { icon: <FaInstagram />, href: "" },
  { icon: <FaLinkedin />, href: "" },
  { icon: <FaTwitter />, href: "" },
];

const Footer = () => {
  return (
    <footer className="layoutPadding">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, tempora
        optio consectetur commodi consequuntur voluptatem error eius repudiandae
        corporis beatae reiciendis unde maiores quaerat at quasi quas suscipit,
        rem a!
      </p>
      <div className="flex-between">
        <p>copyRight FoodLand, Armin Bakhshi &copy;</p>
        <nav>
          <ul className="flex-center">
            {socialMedia.map((link) => (
              <li className="mx-5">
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
