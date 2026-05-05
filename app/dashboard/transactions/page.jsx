import React from 'react'

function page() {
    return (
        <div className=' flex flex-col gap-y-12'>
            <div className='flex items-end justify-between'>
                <div>
                    <div className='text-[#AFB3BD] mb-3'>Circulation Ledger</div>
                    <div className='text-5xl'>Transactions</div>
                </div>
                <button className="flex items-center gap-x-2 bg-white px-4 py-3 rounded-xl text-sm text-gray-400 hover:bg-gray-200 transition">
                    <img className="w-4 h-4" src="/icons/download.svg" alt="" />
                    Export
                </button>
            </div>
            <div className="flex items-center justify-between mb-1 gap-4">
                <div className="flex items-center bg-white rounded-xl px-4 py-3 w-full">
                    <img className="w-4 h-4 mr-3 opacity-50" src="/icons/search.svg" alt="" />
                    <input
                        type="text"
                        placeholder="Search transactions"
                        className="bg-transparent outline-none w-full text-sm text-gray-600 placeholder-gray-400"
                    />
                </div>
                <button className="flex items-center gap-x-2 bg-white px-4 py-3 rounded-xl text-sm text-gray-600 hover:bg-gray-200 transition">
                    <img className="w-4 h-4" src="/icons/filter.svg" alt="" />
                    Filter
                </button>
            </div>
            <div className="bg-white rounded-xl shadow ">
                <table className="w-full text-sm">

                    <thead className="text-gray-400 border-gray-200 bg-gray-100 text-xs uppercase border-y ">
                        <tr>
                            <th className="text-left py-4 px-4">ID</th>
                            <th className="text-left">Type</th>
                            <th className="text-left">Book</th>
                            <th className="text-left">Member</th>
                            <th className="text-left">Date</th>
                            <th className="text-left">Due</th>
                            <th className="text-left">Fine</th>
                            <th className="text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b border-gray-200 even:bg-gray-50 hover:bg-gray-100 ">
                            <td className="py-4 pl-4 text-left text-gray-500">TX-001</td>

                            <td className="py-4">
                                <div className="flex items-center">
                                    <img className="w-8 h-8 p-2" src="/icons/arrow_borrow.svg" alt="" />
                                    <span className="font-medium text-blue-600">Borrow</span>
                                </div>
                            </td>
                            <td className="text-gray-500">Clean Code</td>
                            <td className="text-gray-500">M. Farhan</td>
                            <td className="text-gray-500">2024-12-23</td>
                            <td className="text-gray-500">2024-12-28</td>
                            <td className="text-red-600">--</td>
                            <td>
                                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-fit">
                                    <div className='w-2 h-2 bg-green-500 rounded-full'>
                                    </div>
                                    <div>Complated</div>
                                </div>
                            </td>
                        </tr>

                        <tr className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-200 ">
                            <td className="py-4 pl-4 text-left text-gray-500">TX-002</td>

                            <td className="py-4">
                                <div className="flex items-center">
                                    <img className="w-8 h-8 p-2 rotate-180" src="/icons/arrow_return.svg" alt="" />
                                    <span className="font-medium text-green-500">Return</span>
                                </div>
                            </td>
                            <td className="text-gray-500">Design Patterns</td>
                            <td className="text-gray-500">A. Rizky</td>
                            <td className="text-gray-500">2025-01-18</td>
                            <td className="text-gray-500">2025-01-21</td>
                            <td className="text-red-600">--</td>
                            <td>
                                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-fit">
                                    <div className='w-2 h-2 bg-blue-500 rounded-full'>
                                    </div>
                                    <div>Active</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-200 ">
                            <td className="py-4 pl-4 text-left text-gray-500">TX-003</td>

                            <td className="py-4">
                                <div className="flex items-center">
                                    <img className="w-8 h-8 p-2 rotate-180" src="/icons/arrow_return.svg" alt="" />
                                    <span className="font-medium text-green-500">Return</span>
                                </div>
                            </td>
                            <td className="text-gray-500">Structure and Interpretation</td>
                            <td className="text-gray-500">B. Namrud</td>
                            <td className="text-gray-500">2025-02-08</td>
                            <td className="text-gray-500">2025-02-11</td>
                            <td className="text-red-600">--</td>
                            <td>
                                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-fit">
                                    <div className='w-2 h-2 bg-blue-500 rounded-full'>
                                    </div>
                                    <div>Active</div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-200 ">
                            <td className="py-4 pl-4 text-left text-gray-500">TX-004</td>

                            <td className="py-4">
                                <div className="flex items-center">
                                    <img className="w-8 h-8 p-2" src="/icons/arrow_borrow.svg" alt="" />
                                    <span className="font-medium text-blue-600">Borrow</span>
                                </div>
                            </td>
                            <td className="text-gray-500">Structure and Interpretation</td>
                            <td className="text-gray-500">B. Namrud</td>
                            <td className="text-gray-500">2025-02-08</td>
                            <td className="text-gray-500">2025-02-11</td>
                            <td className="text-red-600">Rp 15.000</td>
                            <td>
                                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-fit">
                                    <div className='w-2 h-2 bg-red-500 rounded-full'>
                                    </div>
                                    <div>Overdue</div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className="flex justify-center py-4">
                    <div className="flex items-center gap-x-2">
                        <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200">
                            Prev
                        </button>
                        <button className="px-3 py-1 rounded-lg bg-blue-500 text-white">
                            1
                        </button>
                        <button className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
                            2
                        </button>
                        <button className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
                            3
                        </button>
                        <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200">
                            Next
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page