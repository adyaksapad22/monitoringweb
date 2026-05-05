import React from 'react'
import CardName from '../../components/members/CardName'

function page() {
    return (
        <div className=' flex flex-col gap-y-12'>
            <div className='flex items-end justify-between'>
                <div>
                    <div className='text-[#AFB3BD] mb-3'>Member Management</div>
                    <div className='text-5xl'>Members</div>
                </div>
                <button className="flex items-center gap-x-2 bg-blue-600 px-10 py-3 rounded-xl text-sm text-white hover:bg-blue-400 transition">
                    <img className="w-6 h-6" src="/icons/add.svg" alt="" />
                    Add Member
                </button>
            </div>
            <div className="flex items-center justify-between mb-1 gap-4">
                <div className="flex items-center bg-white rounded-xl px-4 py-3 w-1/2">
                    <img className="w-4 h-4 mr-3 opacity-50" src="/icons/search.svg" alt="" />
                    <input
                        type="text"
                        placeholder="Search by title, author, ISBN, or RFID..."
                        className="bg-transparent outline-none w-full text-sm text-gray-600 placeholder-gray-400"
                    />
                </div>
            </div>
            <div className=''>
                <div className="grid grid-cols-3 gap-4">
                    <CardName
                        name="Amira Safa"
                        email="amira@gmail.com"
                        status="Available"
                        books={3}
                        joinedDate="Jan 2024"
                    />
                    <CardName
                        name="Budi Santoso"
                        email="budi@gmail.com"
                        status="Available"
                        books={5}
                        joinedDate="Feb 2023"
                    />
                    <CardName
                        name="Zakira Malik"
                        email="zakira@gmail.com"
                        status="Warned"
                        books={1}
                        joinedDate="Mar 2024"
                    />
                    <CardName
                        name="Adam Levins"
                        email="adams@gmail.com"
                        status="Suspanded"
                        books={1}
                        joinedDate="Jun 2025"
                    />
                </div>

            </div>
        </div>
    )
}

export default page