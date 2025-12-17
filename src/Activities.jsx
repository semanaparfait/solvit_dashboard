import { Box, TriangleAlert, Users } from 'lucide-react'
import React from 'react'

function Activities() {
  const inventoryLogs = [
    {
      action: "Product added to inventory",
      product: 'MacBook Pro 16" M3 (PROD2024001)',
      date: "Dec 4, 2024",
      icon: Box,
    },
    {
      action: "Product added to inventory",
      product: "Dell ThinkPad X1 Carbon (PROD2024001)",
      date: "Dec 3, 2024",
      icon: Box,
    },
    {
      action: "Product added to inventory",
      product: "Apple MacBook Air M2 (PROD2024001)",
      date: "Dec 2, 2024",
      icon: Box,
    },
    {
      action: "Product sent for maintenance",
      product: "HP Spectre x360 - Screen replacement required",
      date: "Jan 16, 2024",
      icon: TriangleAlert,
    },
    {
      action: "New user registered",
      user: "Amanda White - Staff Member",
      date: "Jan 14, 2024",
      icon: Users,
    },
  ];

  return (
    <div className='border  border-gray-200 px-3 rounded-md mt-5  md:w-[45%]'><br />
      <div className='flex items-center justify-between border py-4 border-gray-200 px-3 rounded-md'>
        <h1 className='font-bold text-lg'>Recent Activity</h1>
        <p className='text-sm cursor-pointer'>View all</p>
      </div>
      <div className='mt-4'>
        {inventoryLogs.map((log, index) => {
          const IconComponent = log.icon;
          let iconColor = "text-green-500"; 
          if (IconComponent === Box) iconColor = "text-blue-500";
          if (IconComponent === TriangleAlert) iconColor = "text-yellow-500";

          return (
            <div key={index} className="border-b border-gray-200 py-4 flex items-center gap-4">
              <div className={`p-2 rounded-[7px] bg-gray-100 ${iconColor}`}>
                <IconComponent/>
              </div>

              <div>
                <p className='font-bold'>{log.action}</p>
                <p className='text-base text-gray-600'>{log.product || log.user}</p>
                <p className='text-[12px] text-gray-400'>{log.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Activities
