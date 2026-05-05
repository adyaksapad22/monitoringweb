"use client"

import React from 'react'
import { usePathname } from "next/navigation"
import Link from "next/link"


function Sidebar() {
    const pathname = usePathname()
    return (
        <div className='w-75 fixed h-screen flex flex-col bg-[#111727] text-[#F4FDFF] pl-4 pt-8'>
            <div className='flex flex-col gap-y-1'>
                <div className='text-3xl'>RackGuard</div>
                <div className='text-sm tracking-[0.2em]'>ADMIN DAHSBOARD</div>
            </div>
            <div className='mt-12 pr-4 flex flex-col gap-y-16'>
                <div>
                    <div className='text-sm tracking-[0.2em] font-semibold mb-4 pl-4'>MANAGEMENT</div>
                    <div className='flex flex-col gap-y-3'>
                        <Link href="/dashboard">
                            <button
                                className={`w-full flex items-center gap-x-2 py-3 px-3 rounded-2xl transition ${pathname === "/dashboard"
                                    ? "bg-blue-500/20 text-white"
                                    : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                <img className="w-6 h-6" src="/icons/dashboard.svg" alt="dashboard" />
                                <span>Dashboard</span>
                            </button>
                        </Link>
                        <Link href="/dashboard/inventory">
                            <button
                                className={`w-full flex items-center gap-x-2 py-3 px-3 rounded-2xl transition ${pathname === "/dashboard/inventory"
                                    ? "bg-blue-500/20 text-white"
                                    : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                <img className="w-6 h-6" src="/icons/book.svg" alt="inventory" />
                                <span>Inventory</span>
                            </button>
                        </Link>
                        <Link href="/dashboard/members">
                            <button
                                className={`w-full flex items-center gap-x-2 py-3 px-3 rounded-2xl transition ${pathname === "/dashboard/members"
                                    ? "bg-blue-500/20 text-white"
                                    : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                <img className="w-6 h-6" src="/icons/users.svg" alt="members" />
                                <span>Members</span>
                            </button>
                        </Link>
                        <Link href="/dashboard/transactions">
                            <button
                                className={`w-full flex items-center gap-x-2 py-3 px-3 rounded-2xl transition ${pathname === "/dashboard/transactions"
                                    ? "bg-blue-500/20 text-white"
                                    : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                <img className="w-6 h-6" src="/icons/trans.svg" alt="transactions" />
                                <span>Transactions</span>
                            </button>
                        </Link>
                        <Link href="/dashboard/reports">
                            <button
                                className={`w-full flex items-center gap-x-2 py-3 px-3 rounded-2xl transition ${pathname === "/dashboard/reports"
                                    ? "bg-blue-500/20 text-white"
                                    : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                <img className="w-6 h-6" src="/icons/reports.svg" alt="reports" />
                                <span>Reports</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='text-sm tracking-[0.2em] font-semibold mb-4'>SYSTEM</div>
                    <div className='flex flex-col gap-y-3'>
                        <Link href="/dashboard/shelf">
                            <button
                                className={`w-full flex items-center gap-x-2 py-3 px-3 rounded-2xl transition ${pathname === "/dashboard/shelf"
                                    ? "bg-blue-500/20 text-white"
                                    : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                <img className="w-6 h-6" src="/icons/shelf.svg" alt="shelf" />
                                <span>Shelf Status</span>
                            </button>
                        </Link>
                        <Link href="/dashboard/settings">
                            <button
                                className={`w-full flex items-center gap-x-2 py-3 px-3 rounded-2xl transition ${pathname === "/dashboard/settings"
                                    ? "bg-blue-500/20 text-white"
                                    : "text-gray-300 hover:bg-white/5"
                                    }`}
                            >
                                <img className="w-6 h-6" src="/icons/settings.svg" alt="settings" />
                                <span>Settings</span>
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 p-4 border-t w-full border-gray-700 flex justify-between items-center gap-3">
                <div className='flex gap-x-3'>
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        AD
                    </div>
                    <div>
                        <div className="text-sm font-semibold">Admin</div>
                        <div className="text-xs text-gray-400">Chief Librarian</div>
                    </div>
                </div>
                <div>
                    <a href='/dashboard'>
                        <img className='w-6 h-6' src="/icons/logout.svg" alt="dashboard" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar