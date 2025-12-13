import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  ShoppingBag,
  Package,
  Layers,
  Boxes,
  Users,
  Truck,
  Store,
  Tag,
  Share2,
  Megaphone,
  Award,
  FileText,
  Headphones,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutGrid, path: "/" },
  { name: "Orders", icon: ShoppingBag, path: "/orders" },
  { name: "Products", icon: Package, path: "/products" },
  { name: "Categories", icon: Layers, path: "/categories" },
  { name: "Inventory", icon: Boxes, path: "/inventory" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "Delivery Partners", icon: Truck, path: "/delivery-partners" },
  { name: "Vendors*", icon: Store, path: "/vendors" },
  { name: "Coupons", icon: Tag, path: "/coupons" },
  { name: "Referrals", icon: Share2, path: "/referrals" },
  { name: "Offers & Ads", icon: Megaphone, path: "/offers" },
  { name: "Brands*", icon: Award, path: "/brands" },
  { name: "Reports", icon: FileText, path: "/reports" },
  { name: "Customer Support", icon: Headphones, path: "/support" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-64 bg-white min-h-screen flex-col border-r">

      {/* Logo */}
      <div className="px-6 py-5">
        <img
          src="/logo.png"
          alt="Tokrigo Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1">
        {menu.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-4 text-sm font-medium transition
                 ${
                   isActive
                     ? "bg-[linear-gradient(90deg,#0A591F_0%,#11B93E_99.99%)] text-white"
                     : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600"
                 }`
              }
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <button className="w-full bg-red-600 text-white py-2.5 rounded-md text-sm font-medium">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
