"use client"
import React from 'react'

import {
    ComposedChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area
} from "recharts";

const data = [
    { name: "Mon", borrow: 25, return: 18 },
    { name: "Tue", borrow: 30, return: 22 },
    { name: "Wed", borrow: 18, return: 25 },
    { name: "Thu", borrow: 40, return: 32 },
    { name: "Fri", borrow: 35, return: 30 },
    { name: "Sat", borrow: 15, return: 12 },
    { name: "Sun", borrow: 10, return: 8 },
];

function page() {
    return (
        <div className=' flex flex-col gap-y-12'>
            <div>
                <div className='text-[#AFB3BD] mb-3'>Overview</div>
                <div className='text-5xl'>Dashboard</div>
            </div>
            <div className='flex justify-between gap-x-8'>
                <div className='w-full flex bg-[#4C7CE4] p-8 justify-between rounded-2xl'>
                    <div className='text-white'>
                        <div className='font-light mb-8'>Total Books</div>
                        <div className='text-4xl mb-4'>14,548</div>
                        <div className='font-light'>+12 this month</div>
                    </div>
                    <div>
                        <img className='w-6 h-6' src="/icons/book.svg" alt="" />
                    </div>
                </div>
                <div className='w-full flex bg-[#2C96BD] p-8 justify-between rounded-2xl'>
                    <div className='text-white'>
                        <div className='font-light mb-8'>Active Members</div>
                        <div className='text-4xl mb-4'>2,341</div>
                        <div className='font-light'>+58 this week</div>
                    </div>
                    <div>
                        <img className='w-6 h-6' src="/icons/users.svg" alt="" />
                    </div>
                </div>
                <div className='w-full flex bg-[#664FC8] p-8 justify-between rounded-2xl'>
                    <div className='text-white'>
                        <div className='font-light mb-8'>In Circulation</div>
                        <div className='text-4xl mb-4'>341</div>
                        <div className='font-light'>18 due today</div>
                    </div>
                    <div>
                        <img className='w-6 h-6' src="/icons/trans.svg" alt="" />
                    </div>
                </div>
                <div className='w-full flex bg-[#E24445] p-8 justify-between rounded-2xl'>
                    <div className='text-white'>
                        <div className='font-light mb-8'>Overdue Items</div>
                        <div className='text-4xl mb-4'>7</div>
                        <div className='font-light'>3 critical</div>
                    </div>
                    <div>
                        <img className='w-6 h-6' src="/icons/warning.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className="bg-white p-8 rounded-xl shadow w-2/3 ">
                    <h2 className="font-semibold mb-2 text-xl">Weekly Activity</h2>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={data}>
                            <defs>
                                <linearGradient id="colorBorrow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>

                                <linearGradient id="colorReturn" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />

                            <Area
                                type="monotone"
                                dataKey="borrow"
                                fill="url(#colorBorrow)"
                                stroke="none"
                            />

                            <Area
                                type="monotone"
                                dataKey="return"
                                fill="url(#colorReturn)"
                                stroke="none"
                            />

                            <Line
                                type="monotone"
                                dataKey="borrow"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                dot={false}
                            />

                            <Line
                                type="monotone"
                                dataKey="return"
                                stroke="#14b8a6"
                                strokeWidth={2}
                                dot={false}
                            />

                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <div className='bg-white p-8 w-[30%] rounded-xl shadow h-130 overflow-y-auto pr-8'>
                    <div className='font-semibold text-2xl mb-6'>Shelf Status</div>
                    <div className='flex flex-col gap-y-8'>
                        <div className='flex flex-col gap-y-3'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
                                        <div className='font-semibold'>Rack A-1</div>
                                    </div>
                                    <div className='text-gray-400'>48/50</div>
                                </div>
                            </div>
                            <div className='w-full h-px bg-gray-300'></div>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
                                        <div className='font-semibold'>Rack A-2</div>
                                    </div>
                                    <div className='text-gray-400'>28/50</div>
                                </div>
                            </div>
                            <div className='w-full h-px bg-gray-300'></div>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='w-2 h-2 bg-yellow-500 rounded-full mr-3'></div>
                                        <div className='font-semibold'>Rack B-1</div>
                                    </div>
                                    <div className='text-gray-400'>50/50</div>
                                </div>
                            </div>
                            <div className='w-full h-px bg-gray-300'></div>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
                                        <div className='font-semibold'>Rack B-2</div>
                                    </div>
                                    <div className='text-gray-400'>18/50</div>
                                </div>
                            </div>
                            <div className='w-full h-px bg-gray-300'></div>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='w-2 h-2 bg-red-500 rounded-full mr-3'></div>
                                        <div className='font-semibold'>Rack C-1</div>
                                    </div>
                                    <div className='text-gray-400'>0/50</div>
                                </div>
                            </div>
                            <div className='w-full h-px bg-gray-300'></div>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
                                        <div className='font-semibold'>Rack C-2</div>
                                    </div>
                                    <div className='text-gray-400'>36/50</div>
                                </div>
                            </div>
                            <div className='w-full h-px bg-gray-300'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white p-8 rounded-xl'>
                <div className='flex justify-between'>
                    <div>
                        <div className='font-semibold text-2xl mb-2'>Recent Activity</div>
                        <div>Latest Transactions Accross All racks</div>
                    </div>
                    <div className='text-blue-700 flex items-end'>View All</div>
                </div>
                <div className='mt-6'>
                    <table className="w-full text-sm">

                        <thead className="text-gray-400 uppercase border-b">
                            <tr>
                                <th className="text-left py-3">ID</th>
                                <th className="text-left">Book</th>
                                <th className="text-left">Member</th>
                                <th className="text-left">Action</th>
                                <th className="text-right">Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b border-gray-400">
                                <td className="py-4 text-gray-500">TX-992</td>
                                <td className="font-medium">Clean Code</td>
                                <td className="text-gray-500">M. Farhan</td>
                                <td>
                                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                        <div className='w-2 h-2 bg-blue-500 rounded-full'>
                                        </div>
                                        <div>Borrowed</div>
                                    </div>
                                </td>
                                <td className="text-gray-400">
                                    <div className="flex justify-end items-center gap-x-1">
                                        <img className="w-4 h-4" src="/icons/clock.svg" alt="" />
                                        <div>14:32</div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="py-4 text-gray-500">TX-991</td>
                                <td className="font-medium">Design Patterns</td>
                                <td className="text-gray-500">A. Rizky</td>
                                <td>
                                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                        <div className='w-2 h-2 bg-green-500 rounded-full'>
                                        </div>
                                        <div>Returned</div>
                                    </div>
                                </td>
                                <td className="text-gray-400">
                                    <div className="flex justify-end items-center gap-x-1">
                                        <img className="w-4 h-4" src="/icons/clock.svg" alt="" />
                                        <div>13:12</div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-400">
                                <td className="py-4 text-gray-500">TX-990</td>
                                <td className="font-medium">Introduction to Algorithms</td>
                                <td className="text-gray-500">S. Putri</td>
                                <td>
                                    <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                        <div className='w-2 h-2 bg-red-500 rounded-full'>
                                        </div>
                                        <div>Overdue</div>
                                    </div>
                                </td>
                                <td className="text-gray-400">
                                    <div className="flex justify-end items-center gap-x-1">
                                        <img className="w-4 h-4" src="/icons/clock.svg" alt="" />
                                        <div>Yesterday</div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-b border-gray-400">
                                <td className="py-4 text-gray-500">TX-989</td>
                                <td className="font-medium">The Pragmatic Programmer</td>
                                <td className="text-gray-500">D. Wijaya</td>
                                <td>
                                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                        <div className='w-2 h-2 bg-blue-500 rounded-full'>
                                        </div>
                                        <div>Borrowed</div>
                                    </div>
                                </td>
                                <td className="text-gray-400">
                                    <div className="flex justify-end items-center gap-x-1">
                                        <img className="w-4 h-4" src="/icons/clock.svg" alt="" />
                                        <div>Yesterday</div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="border-b border-gray-400">
                                <td className="py-4 text-gray-500">TX-988</td>
                                <td className="font-medium">Structure and Interpretation</td>
                                <td className="text-gray-500">R. Andini</td>
                                <td>
                                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                        <div className='w-2 h-2 bg-green-500 rounded-full'>
                                        </div>
                                        <div>Returned</div>
                                    </div>
                                </td>
                                <td className="text-gray-400">
                                    <div className="flex justify-end items-center gap-x-1">
                                        <img className="w-4 h-4" src="/icons/clock.svg" alt="" />
                                        <div>2 Day Ago</div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default page