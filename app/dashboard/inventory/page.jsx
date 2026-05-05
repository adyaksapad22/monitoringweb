import React from 'react'

function page() {
    return (
        <div className=' flex flex-col gap-y-12'>
            <div className='flex items-end justify-between'>
                <div>
                    <div className='text-[#AFB3BD] mb-3'>Book Management</div>
                    <div className='text-5xl'>Inventory</div>
                </div>
                <button className="flex items-center gap-x-2 bg-blue-600 px-10 py-3 rounded-xl text-sm text-white hover:bg-blue-400 transition">
                    <img className="w-6 h-6" src="/icons/add.svg" alt="" />
                    Add Book
                </button>
            </div>
            <div className="flex items-center justify-between mb-1 gap-4">
                <div className="flex items-center bg-white rounded-xl px-4 py-3 w-full">
                    <img className="w-4 h-4 mr-3 opacity-50" src="/icons/search.svg" alt="" />
                    <input
                        type="text"
                        placeholder="Search by title, author, ISBN, or RFID..."
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
                            <th className="text-left">Title</th>
                            <th className="text-left">Author</th>
                            <th className="text-left">Rack</th>
                            <th className="text-left">RFID</th>
                            <th className="text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b border-gray-200 even:bg-gray-50 hover:bg-gray-100 ">
                            <td className="py-4 pl-4 text-left text-gray-500">BK-001</td>

                            <td className="py-4">
                                <div className="flex items-center gap-x-3">
                                    <img className="w-10 h-10 p-2 bg-blue-100 rounded-lg" src="/icons/bookinven.svg" alt="" />
                                    <span className="font-medium">Clean Code</span>
                                </div>
                            </td>

                            <td className="text-gray-500">Robert C. Martin</td>
                            <td>A-1</td>
                            <td className="text-gray-400">RFID-4421</td>

                            <td>
                                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                    <div className='w-2 h-2 bg-green-500 rounded-full'>
                                    </div>
                                    <div>Available</div>
                                </div>
                            </td>
                        </tr>

                        <tr className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-200 ">
                            <td className="py-4 pl-4 text-left text-gray-500">BK-002</td>

                            <td className="py-4">
                                <div className="flex items-center gap-x-3">
                                    <img className="w-10 h-10 p-2 bg-blue-100 rounded-lg" src="/icons/bookinven.svg" alt="" />
                                    <span className="font-medium">Design Patterns</span>
                                </div>
                            </td>

                            <td className="text-gray-500">Gang of Four</td>
                            <td>A-2</td>
                            <td className="text-gray-400">RFID-4422</td>

                            <td>
                                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                    <div className='w-2 h-2 bg-blue-500 rounded-full'>
                                    </div>
                                    <div>Borrowed</div>
                                </div>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-200">
                            <td className="py-4 pl-4 text-left text-gray-500">BK-003</td>

                            <td className="py-4">
                                <div className="flex items-center gap-x-3">
                                    <img className="w-10 h-10 p-2 bg-blue-100 rounded-lg" src="/icons/bookinven.svg" alt="" />
                                    <span className="font-medium">Introduction to Algorithms</span>
                                </div>
                            </td>

                            <td className="text-gray-500">Thomas H. Cormen</td>
                            <td>B-1</td>
                            <td className="text-gray-400">RFID-4423</td>

                            <td>
                                <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                    <div className='w-2 h-2 bg-red-500 rounded-full'>
                                    </div>
                                    <div>Overdue</div>
                                </div>
                            </td>
                        </tr>

                        {/* Row 4 */}
                        <tr className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-200">
                            <td className="py-4 pl-4 text-left text-gray-500">BK-004</td>

                            <td className="py-4">
                                <div className="flex items-center gap-x-3">
                                    <img className="w-10 h-10 p-2 bg-blue-100 rounded-lg" src="/icons/bookinven.svg" alt="" />
                                    <span className="font-medium">The Pragmatic Program</span>
                                </div>
                            </td>

                            <td className="text-gray-500">Andrew Hunt</td>
                            <td>B-1</td>
                            <td className="text-gray-400">RFID-4424</td>

                            <td>
                                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                    <div className='w-2 h-2 bg-green-500 rounded-full'>
                                    </div>
                                    <div>Available</div>
                                </div>
                            </td>
                        </tr>

                        <tr className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-200">
                            <td className="py-4 pl-4 text-left text-gray-500">BK-005</td>

                            <td className="py-4">
                                <div className="flex items-center gap-x-3">
                                    <img className="w-10 h-10 p-2 bg-blue-100 rounded-lg" src="/icons/bookinven.svg" alt="" />
                                    <span className="font-medium">Structure and Interpretation</span>
                                </div>
                            </td>

                            <td className="text-gray-500">Harold Abelson</td>
                            <td>B-2</td>
                            <td className="text-gray-400">RFID-4425</td>

                            <td>
                                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-24">
                                    <div className='w-2 h-2 bg-green-500 rounded-full'>
                                    </div>
                                    <div>Available</div>
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