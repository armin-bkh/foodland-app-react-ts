import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialMedia = [
  { icon: <FaInstagram />, href: "" },
  { icon: <FaLinkedin />, href: "" },
  { icon: <FaTwitter />, href: "" },
];

const Footer = () => {
  return (
    <footer className="layoutPadding shadow bg-purple-400 text-white">
      <p className="mb-5 w-full md:w-1/2 text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را 
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
