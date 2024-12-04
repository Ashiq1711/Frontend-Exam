
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineDetails } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
export const headerNavigation = [
  { icons: <FaHome />, title: "Home", link: "/" },

  { icons: <FaShoppingBag />, title: "Shop", link: "/shop" },

  { icons: <MdOutlineDetails />, title: "About", link: "/about" },

  { icons: <BiSolidUserDetail />, title: "Contact", link: "/contact" },

  { icons: <FaShoppingCart />, title: "Orders", link: "/orders" },
];