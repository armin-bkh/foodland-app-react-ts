import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", title: "خانه", icons: <FaHome/> },
  { to: "/foods", title: "سفارش", icons: <FaHome/> },
];

const Header = () => {
  return (
    <header className={`flex-between layoutPadding shadow sticky top-0 bg-white`}>
      <span className="text-xl md:text-3xl text-purple-400">FoodLand</span>
      <nav className="flex-1 flex-center">
        <ul className="flex-center text">
          {links.length > 0 &&
            links.map((link) => (
              <li key={link.to}>
                <NavLink className={({isActive})=> "layoutContentPadding flex-center" + " " + (isActive ? "text-purple-400" : "")} to={link.to}><span className="ml-3">{link.icons}</span>{link.title}</NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
