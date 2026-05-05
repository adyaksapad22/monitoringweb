"use client";
import React from 'react'
import CardInformation from '../../components/reports/CardInformation'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    PieChart,
    Pie,
    LineChart,
    Line,
    Cell,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#2563eb", "#38bdf8", "#6366f1", "#14b8a6", "#94a3b8"];

const dataBar = [
    { month: "Jan", borrow: 180, return: 150 },
    { month: "Feb", borrow: 210, return: 190 },
    { month: "Mar", borrow: 195, return: 205 },
    { month: "Apr", borrow: 260, return: 230 },
];

const dataPie = [
    { name: "Computer Science", value: 42 },
    { name: "Mathematics", value: 22 },
    { name: "Engineering", value: 18 },
    { name: "Literature", value: 12 },
    { name: "Others", value: 6 },
];

const dataLine = [
    { day: 1, visitors: 45 },
    { day: 5, visitors: 62 },
    { day: 10, visitors: 38 },
    { day: 15, visitors: 72 },
    { day: 20, visitors: 55 },
    { day: 25, visitors: 82 },
    { day: 30, visitors: 68 },
];

function page() {
    return (
        <div>
            <div className='flex items-end justify-between mb-10'>
                <div>
                    <div className='text-[#AFB3BD] mb-3'>Analytics</div>
                    <div className='text-5xl'>Reports</div>
                </div>
                <button className="flex items-center gap-x-2 bg-blue-600 px-10 py-3 rounded-xl text-sm text-white hover:bg-blue-400 transition">
                    <img className="w-6 h-6" src="/icons/export_report.svg" alt="" />
                    Export
                </button>
            </div>
            <div className='mb-10'>
                <div className="grid grid-cols-4 gap-y-4 gap-x-8">
                    <CardInformation
                        title="Total Borrowings"
                        value={855}
                        percentage={15}
                        isIncrease={true}
                    />
                    <CardInformation
                        title="Unique Visitors"
                        value={419}
                        percentage={-5}
                        isIncrease={true}
                    />
                    <CardInformation
                        title="Avg Return Time"
                        value={11.2}
                        satuan="d"
                        percentage={-2}
                        isIncrease={false}
                    />
                    <CardInformation
                        title="Total Fines Collected"
                        value={425}
                        satuan="K"
                        percentage={22}
                        isIncrease={true}
                    />
                </div>
            </div>
            <div className='flex gap-x-8 mb-10'>
                <div className="bg-white p-8 pb-12 rounded-2xl w-full h-125">
                    <h2 className="text-gray-700 font-semibold mb-4">
                        Monthly Borrowings vs Returns
                    </h2>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dataBar} barCategoryGap="20%">
                            <XAxis dataKey="month" padding={{ left: 20, right: 20 }} />
                            <YAxis />
                            <Tooltip />

                            <Bar dataKey="borrow" fill="#2563eb" radius={[6, 6, 0, 0]} />
                            <Bar dataKey="return" fill="#14b8a6" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white p-8 pb-12 rounded-2xl w-full h-125">
                    <h2 className="text-gray-700 font-semibold mb-4">
                        Popular Categories
                    </h2>

                    <ResponsiveContainer width="100%" height="80%">
                        <PieChart>
                            <Pie
                                data={dataPie}
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={3}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                            >
                                {dataPie.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="flex justify-center flex-wrap gap-4 mt-4">
                        {dataPie.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: COLORS[index] }}
                                ></div>
                                <span>
                                    {item.name} ({item.value}%)
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-white p-8 pb-12 rounded-2xl w-full h-100">

                    <h2 className="text-gray-700 font-semibold mb-4">
                        Daily Active Visitors
                    </h2>

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={dataLine}>

                            <CartesianGrid strokeDasharray="3 3" vertical={false} />

                            <XAxis dataKey="day" padding={{ left: 20, right: 20 }} />
                            <YAxis />

                            <Tooltip />

                            <Line
                                type="monotone"  
                                dataKey="visitors"
                                stroke="#2563eb"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />

                        </LineChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div>
    )
}

export default page