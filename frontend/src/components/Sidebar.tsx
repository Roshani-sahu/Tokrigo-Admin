import { NavLink } from "react-router-dom";

const menu = [
  "Dashboard",
  "Orders",
  "Products",
  "Categories",
  "Inventory",
  "Customers",
  "Delivery Partners",
  "Vendors",
  "Coupons",
  "Reports",
  "Settings",
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-64 bg-white shadow-sm min-h-screen flex-col">
      <div className="px-6 py-6 text-2xl font-bold text-green-600">
        Tokrigo
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item}
            to="/"
            className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition"
          >
            {item}
          </NavLink>
        ))}
      </nav>

      <div className="p-4">
        <button className="w-full bg-red-500 text-white py-2 rounded-lg">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
