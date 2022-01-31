import { FaHome } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useCart } from "../Providers/CartProvider";

const links = [
  { to: "/", title: "Home", icons: <FaHome /> },
  { to: "/foods", title: "Menu", icons: <MdOutlineMenuBook /> },
  { to: "/checkout", title: null, icons: <IoMdCart /> },
];

const Header = () => {
  const { cart } = useCart();

  return (
    <header
      className={`flex-between layoutPadding shadow sticky top-0 bg-white z-50`}
    >
      <span className="text-xl md:text-3xl text-red-400">FoodLand</span>
      <nav className="flex-1">
        <ul className="flex-center text">
          {links.length > 0 &&
            links.map((link) => (
              <li className="last:ml-auto" key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    "layoutContentPadding flex-center" +
                    " " +
                    (isActive ? "text-red-500" : "")
                  }
                  to={link.to}
                >
                  <span
                    className={link.to !== "/checkout" ? "mr-3" : "relative"}
                  >
                    {link.icons}
                    {link.to === "/checkout" && (
                      <span className="absolute -top-5 -right-4 bg-red-400 rounded-full flex-center text-white w-5 h-5">
                        {cart.length}
                      </span>
                    )}
                  </span>
                  {link?.title}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
