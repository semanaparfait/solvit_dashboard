import React from "react";
import { Box, Laptop, Users, List } from "lucide-react";
const menuItems = [
  {
    name: "Dashboard",
    icon: Laptop,
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
    icon: List,
    count: 100,
  },
  {
    name: "Assignments",
    icon: List,
    count: 10,
  },
  {
    name: "Categories",
    icon: List,
    count: null,
  },
];

function MenuItem({ item, mobile }) {
  const Icon = item.icon;

  return (
    <li
      className={`mb-4 flex items-center ${
        mobile ? "justify-center" : "justify-between"
      } ${item.active && !mobile
          ? "bg-gray-200 p-2 rounded-lg text-primaryColor-600"
          : ""
      }`}
    >
      <a
        href="#"
        className={`flex ${
          mobile
            ? "flex-col items-center text-xs"
            : "items-center gap-2"
        } text-gray-700 hover:text-primaryColor-600`}
      >
        <Icon size={mobile ? 15 : 20} />
        {item.name}
      </a>

      {!mobile && item.count !== null && (
        <span className="bg-gray-200 py-1 px-2 rounded-lg text-xs font-semibold text-gramaryColor-600">
          {item.count}
        </span>
      )}
    </li>
  );
}


function Aside() {
  return (
    <section>
      <aside className="w-64 h-screen bg-gray-100 fixed left-0 top-0 hidden md:block shadow-md">
        <div className="p-4">

          <div className="flex gap-2 items-center">
            <div className="bg-primaryColor-500 p-2 rounded-md">
              <Box color="white" size={35} />
            </div>
            <h2>
              <span className="text-2xl font-bold">iHUZA</span>
              <br />
              <span className="text-sm text-gray-400">INVENTORY</span>
            </h2>
          </div>


          <nav className="mt-6">
            <ul>
              {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </nav>
        </div>
      </aside>

   {/* ---------------------------mobile navigationnas my guy---------------------- */}
      <ul className="md:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around items-center shadow-md">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} mobile />
        ))}
      </ul>
    </section>
  );
}

export default Aside;
