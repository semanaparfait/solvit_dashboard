import React from "react";
import { LayoutDashboard, Package, Users, List, Layers, LogOut } from 'lucide-react';

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    count: null,
    active: true,
  },
  {
    name: "Users",
    icon: Users,
    count: 116,
  },
  {
    name: "Products",
    icon: Package,
    count: 100,
  },
  {
    name: "Assignments",
    icon: List,
    count: 10,
  },
  {
    name: "Categories",
    icon: Layers,
    count: null,
  },
];

function MenuItem({ item, mobile }) {
  const Icon = item.icon;

  return (
    <li
      className={`mb-4 flex items-center ${
        mobile ? "justify-center" : "justify-between"
      } ${
        item.active && !mobile
          ? "bg-gray-200 p-2 rounded-lg text-primaryColor-600"
          : ""
      }`}
    >
      <a
        href="#"
        className={`flex ${
          mobile ? "flex-col items-center text-xs" : "items-center gap-2"
        } text-gray-700 hover:text-primaryColor-600`}
      >
        <Icon size={mobile ? 15 : 20} />
        {item.name}
      </a>

      {!mobile && item.count !== null && (
        <span className="bg-gray-200 py-1 px-2 rounded-lg text-xs font-semibold text-gray-600">
          {item.count}
        </span>
      )}
    </li>
  );
}

function Aside() {
  return (
    <section>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="w-64 h-screen bg-gray-100 fixed left-0 top-0 hidden md:flex flex-col shadow-md">
        <div className="p-4 flex flex-col h-full">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <div className="bg-primaryColor-500 p-2 rounded-md">
              <LayoutDashboard color="white" size={35} />
            </div>
            <h2>
              <span className="text-2xl font-bold">iHUZA</span>
              <br />
              <span className="text-sm text-gray-400">INVENTORY</span>
            </h2>
          </div>

          {/* Navigation */}
          <nav className="mt-6">
            <ul>
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </nav>

          {/* Logout (pushed to bottom) */}
          <div className="mt-auto pt-4 ">
            <button className="flex items-center gap-2 tex hover:text-red-700 w-full">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <ul className="md:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around items-center shadow-md">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} mobile />
        ))}
      </ul>
    </section>
  );
}

export default Aside;
