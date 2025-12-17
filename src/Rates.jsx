import { Users,  Box, TriangleAlert,CircleCheckBig } from 'lucide-react';
import React from 'react';

function Rates() {
  const rates = [
    { nber: 110, text: "Total Users", icon: Users },
    { nber: 100, text: "Total Products", icon: Box },
    { nber: 10, text: "Assigned Products", icon: CircleCheckBig },
    { nber: 90, text: "Unassigned Products", icon: TriangleAlert },
  ];

  return (
    <div className="flex flex-wrap items-center justify-evenly gap-4 overflow-x-auto md:overflow-visible">
      {rates.map((rate, index) => {
        const IconComponent = rate.icon;


        let bgColor = " backdrop-blur-md"; 
        if (IconComponent === Users) bgColor = "text-blue-500 bg-blue-500/20 backdrop-blur-md";
        if (IconComponent === Box) bgColor = "text-blue-500 bg-blue-500/20 backdrop-blur-md";
        if (IconComponent === CircleCheckBig) bgColor = "text-green-500 bg-green-500/20 backdrop-blur-md";
        if (IconComponent === TriangleAlert) bgColor = "text-yellow-500 bg-yellow-500/20 backdrop-blur-md";

        return (
          <div
            key={index}
            className="min-w-[220px] p-4 shadow-md rounded-md flex items-center gap-4"
          >
            <div className={`p-3 rounded-md flex items-center justify-center ${bgColor}`}>
              <IconComponent  size={28} />
            </div>
            <div>
              <h2 className="font-bold text-[18px]">{rate.nber}</h2>
              <p className="text-sm">{rate.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rates;
