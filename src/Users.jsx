import {User} from 'lucide-react'
import React from 'react'
import { Button } from './Button';

function Users() {
    const users = [
  {
    name: "John Smith",
    email: "john.smith@ihuza.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@ihuza.com",
    role: "Manager",
    status: "Active",
    lastActive: "5 hours ago",
  },
  {
    name: "Michael Brown",
    email: "m.brown@ihuza.com",
    role: "Staff",
    status: "Active",
    lastActive: "1 day ago",
  },
  {
    name: "Emily Davis",
    email: "emily.d@ihuza.com",
    role: "Staff",
    status: "Inactive",
    lastActive: "3 days ago",
  },
  {
    name: "David Wilson",
    email: "d.wilson@ihuza.com",
    role: "Staff",
    status: "Active",
    lastActive: "6 hours ago",
  },
  {
    name: "Lisa Anderson",
    email: "lisa.a@ihuza.com",
    role: "Manager",
    status: "Active",
    lastActive: "30 min ago",
  },
  {
    name: "Robert Taylor",
    email: "r.taylor@ihuza.com",
    role: "Staff",
    status: "Active",
    lastActive: "2 days ago",
  },
  {
    name: "Jennifer Miller",
    email: "j.miller@ihuza.com",
    role: "Staff",
    status: "Active",
    lastActive: "4 hours ago",
  },
  {
    name: "Christopher Lee",
    email: "c.lee@ihuza.com",
    role: "Admin",
    status: "Active",
    lastActive: "1 hour ago",
  },
  {
    name: "Amanda White",
    email: "a.white@ihuza.com",
    role: "Staff",
    status: "Inactive",
    lastActive: "1 week ago",
  },
];

  return (
    <div>
        <div className='flex justify-between items-center '>
            <h1 className='font-bold text-lg'>Users</h1>
            <Button label="Add User" />
            {/* <button className='bg-primaryColor-600 text-sm text-white rounded-lg py-2 px-4'>Add User </button> */}
        </div>
        <div className="w-full overflow-x-auto">
            <table className='w-full mt-4 border border-gray-200 rounded-lg'>
                <thead className='bg-gray-100'>
                    <tr className='text-sm'>
                        <th className='text-left p-3 text-sm text-gray-500'>NAME</th>
                        <th className='text-left p-3 text-sm text-gray-500'>ROLE</th>
                        <th className='text-left p-3 text-sm text-gray-500'>STATUS</th>
                        <th className='text-left p-3 text-sm text-gray-500'>LAST ACTIVITY</th>
                        <th className='text-left p-3 text-sm text-gray-500'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className={`border-t border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>

                      <td className='p-3'>
                        <div className='flex items-center gap-2'>
                          <User size={33} className='bg-gray-200 p-2 rounded-full' />
                          <div>
                            <p className='text-sm font-bold'>{user.name}</p>
                            <p className='text-sm text-gray-500'>{user.email}</p>
                          </div>
                        </div>
                      </td>

                          <td className='p-3'>
                            <span
                              className={`text-sm px-3 py-1 rounded-3xl inline-block
                                ${user.role === "Admin"
                                  ? "text-purple-500 bg-purple-200"
                                  : user.role === "Manager"
                                  ? "text-blue-500 bg-primaryColor-200"
                                  : "text-black bg-gray-200"
                                }`}
                            >
                              {user.role}
                            </span>
                          </td>

                            <td className='p-3'>{user.status}</td>
                            <td className='p-3'>{user.lastActive}</td>
                            <td className='p-3 flex  gap-2'>
                                <button className='text-primaryColor-600 font-medium text-sm'>Edit</button>
                                <button className='text-red-500 font-medium text-sm'>Delete</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users