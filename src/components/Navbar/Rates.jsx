import {Users,ShoppingCart,BarChart,Package} from 'lucide-react'
import React from 'react'

function Rates() {
    const rates = [
        { nber: 110, text: "total Users", icon: Users},
        { nber: 100, text: "total products",  icon: ShoppingCart},
        { nber: 10, text: "Assigned Products", icon: Package},
        { nber: 90, text: "Unassigned Products", icon: BarChart},
,
    ];
  return (
        <div className="flex flex-wrap items-center justify-evenly gap-4 overflow-x-auto md:overflow-visible">
        {rates.map((rate, index) => (
            <div
            key={index}
            className="min-w-[220px] p-4 shadow-md rounded-md flex items-center gap-4"
            >
            <div className="bg-primaryColor-500 p-2 rounded-md">
                <rate.icon color="white" size={24} />
            </div>
            <div>
                <h2 className="font-bold text-[18px]">{rate.nber}</h2>
                <p className="text-sm">{rate.text}</p>
            </div>
            </div>
        ))}
        </div>

  )
}

export default Rates