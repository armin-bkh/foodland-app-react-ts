import { NavLink } from "react-router-dom";

const links = [
  { to: "/", title: "خانه" },
  { to: "/foods", title: "سفارش" },
];

const Header = () => {
  return (
    <header className={`flex-between layoutPadding shadow`}>
      <span>FoodLand</span>
      <nav className="flex-1 flex-center">
        <ul className="flex-center">
          {links.length > 0 &&
            links.map((link) => (
              <li>
                <NavLink className={({isActive})=> "px-5 py-3" + (isActive ? "text-red" : "")} to={link.to}>{link.title}</NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
