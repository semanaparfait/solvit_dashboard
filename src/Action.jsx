import { Box, Users, List } from "lucide-react";
import React from "react";
import { Button } from "./Button";

function Action() {
  const actions = [
    {
      title: "View Users",
      icon: Users,
      details: "View all registered users",
    },
    {
      title: "View Products",
      icon: Box,
      details: "View all products in inventory",
    },
    {
      title: "View Assignments",
      icon: List,
      details: "View all assigned products",
    },
  ];

  return (
    <div className=" md:w-[45%] border border-gray-200 px-3 rounded-md mt-5 py-5">
             <div className=' border py-3 border-gray-200 px-3 rounded-md'>

      <h1 className="font-bold text-xl mb-4">Action</h1>
        </div>

      <div>
        {actions.map((action, index) => (
          <div key={index}
            className={`border p-4 rounded-md flex items-center gap-4 mt-4 justify-between ${
              index < 2
                ? "border-blue-500 bg-blue-50"
                : "border-purple-500 bg-purple-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <action.icon
                size={24}
                className={index < 2 ? "text-blue-600" : "text-purple-600"}
              />

              <div>
                <h2
                  className={`font-bold text-[18px] ${
                    index < 2 ? "text-blue-700" : "text-purple-700"
                  }`}
                >
                  {action.title}
                </h2>
                <p className="text-sm text-gray-500">{action.details}</p>
              </div>
            </div>
                  <Button
                  className="px-4 py-1 rounded-md text-sm font-medium"
            label="Go"
            variant={index < 2 ? "primary" : "action"}
          />
            {/* <button
              className={`px-4 py-1 rounded-md text-sm font-medium ${
                index < 2
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              Go
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Action;
