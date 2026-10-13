"use client"

import { useState, useEffect } from 'react'
import AIInsightCard from '@/app/components/AIInsightCard';

import {
    ComposedChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell
} from "recharts";



export default function Page() {
    const [loading, setLoading] = useState(true);
    const [weeklyData, setWeeklyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [dataPie, setDataPie] = useState([]);
    const [recentTransactions, setRecentTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const [dashboardData, setDashboardData] = useState(null);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTransactions = recentTransactions.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(recentTransactions.length / itemsPerPage);

    const COLORS = ['#2563eb', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b'];

    const [stats, setStats] = useState({
        totalTransactions: 0,
        activeClients: 0,
        successCount: 0,
        failedCount: 0
    });

    useEffect(() => {
        // Menarik data dari backend API Next.js yang kita buat di Langkah 2
        fetch('/api')
            .then((res) => res.json())
            .then((result) => {
                console.log("Data dari API:", result);
                if (result.success) {
                    console.log("Data Pie Chart:", result.data.categoryData);
                    setStats({
                        totalTransactions: result.data.totalTransactions,
                        activeClients: result.data.activeClients,
                        successCount: result.data.successCount,
                        failedCount: result.data.failedCount
                    });
                    setWeeklyData(result.data.weeklyActivity || []);
                    setMonthlyData(result.data.monthlyData || []);   
                    setCategoryData(result.data.categoryData || []);
                    setRecentTransactions(result.data.recentTransactions || []);
                    setDashboardData(result.data);
                    
                    const formattedPieData = (result.data.categoryData || []).map(item => ({
                        ...item,
                        value: parseFloat(item.value)
                    }));
                    setDataPie(formattedPieData);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal mengambil data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="p-12 text-center text-gray-500">Menghubungkan ke database...</div>;
    }
    return (
        <div className=' flex flex-col gap-y-12'>
            <div>
                <div className='text-[#AFB3BD] mb-3'>Overview</div>
                <div className='text-5xl'>Dashboard</div>
            </div>
            <AIInsightCard dashboardData={dashboardData} />
            <div className='flex justify-between gap-x-8'>
                <div className='w-full flex bg-[#4C7CE4] p-8 justify-between rounded-2xl'>
                    <div className='text-white'>
                        <div className='font-light mb-8'>Total Transactions</div>
                        <div className='text-4xl mb-4'>{stats.totalTransactions}</div>
                    </div>
                    <div>
                        <img className='w-6 h-6' src="/icons/book.svg" alt="" />
                    </div>
                </div>
                <div className='w-full flex bg-[#2C96BD] p-8 justify-between rounded-2xl'>
                    <div className='text-white'>
                        <div className='font-light mb-8'>Active Clients</div>
                        <div className='text-4xl mb-4'>{stats.activeClients}</div>
                    </div>
                    <div>
                        <img className='w-6 h-6' src="/icons/users.svg" alt="" />
                    </div>
                </div>
                <div className='w-full flex bg-[#664FC8] p-8 justify-between rounded-2xl'>
                    <div className='text-white'>
                        <div className='font-light mb-8'>Successful Requests</div>
                        <div className='text-4xl mb-4'>{stats.successCount}</div>
                    </div>
                    <div>
                        <img className='w-6 h-6' src="/icons/trans.svg" alt="" />
                    </div>
                </div>
                <div className='w-full flex bg-[#E24445] p-8 justify-between rounded-2xl'>
                    <div className='text-white'>
                        <div className='font-light mb-8'>Failed / Errors</div>
                        <div className='text-4xl mb-4'>{stats.failedCount}</div>
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
                        <ComposedChart data={weeklyData}>
                            <defs>
                                <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            
                            <XAxis dataKey="day_name" />
                            <YAxis />
                            <Tooltip />

                            <Area type="monotone" dataKey="success" fill="url(#colorSuccess)" stroke="none" />
                            <Area type="monotone" dataKey="failed" fill="url(#colorFailed)" stroke="none" />

                            <Line type="monotone" dataKey="success" stroke="#3b82f6" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} dot={false} />

                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <div className='bg-white p-8 w-[30%] rounded-xl shadow h-130 overflow-y-auto pr-8'>
                    <div>
                        <div className="font-semibold text-xl mb-4 text-gray-800">Recent Transactions</div>
                        <div className="flex flex-col gap-y-4">
                            {recentTransactions.map((tx, index) => (
                                <div key={index} className="flex flex-col gap-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {/* Titik indikator: Hijau jika SUCCESS, Merah jika FAILED */}
                                            <div className={`w-2.5 h-2.5 rounded-full ${tx.status === 'SUCCESS' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                            <div>
                                                <div className="font-semibold text-sm text-gray-800">{tx.transaction_id}</div>
                                                <div className="text-xs text-gray-400 truncate max-w-35">{tx.client_name}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-semibold text-gray-700">Rp {Number(tx.amount).toLocaleString('id-ID')}</div>
                                            <div className="text-[11px] text-gray-400">{tx.response_time_ms} ms</div>
                                        </div>
                                    </div>
                                    {index < recentTransactions.length - 1 && <div className="w-full h-px bg-gray-100"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white p-8 rounded-xl'>
                <div className='flex justify-between'>
                    <div>
                        <div className='font-semibold text-2xl mb-2'>Recent Activity</div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                                <th className="pb-3 font-semibold">ID Transaksi</th>
                                <th className="pb-3 font-semibold">Klien</th>
                                <th className="pb-3 font-semibold">Kategori</th>
                                <th className="pb-3 font-semibold">Nominal</th>
                                <th className="pb-3 font-semibold text-center">Status</th>
                                <th className="pb-3 font-semibold text-center">Waktu</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {currentTransactions.length > 0 ? (
                                currentTransactions.map((tx, index) => (
                                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 font-medium text-gray-800">{tx.transaction_id}</td>
                                        <td className="py-4 text-gray-600">{tx.client_name}</td>
                                        <td className="py-4 text-gray-600">{tx.category_name || 'Enterprise API'}</td>
                                        <td className="py-4 font-semibold text-gray-800">
                                            Rp {Number(tx.amount || 0).toLocaleString('id-ID')}
                                        </td>
                                        <td className="py-4 text-center">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                                                tx.status === 'SUCCESS' 
                                                    ? 'bg-green-50 text-green-600' 
                                                    : 'bg-red-50 text-red-600'
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${
                                                    tx.status === 'SUCCESS' ? 'bg-green-500' : 'bg-red-500'
                                                }`}></span>
                                                {tx.status || 'SUCCESS'}
                                            </span>
                                        </td>
                                        <td className="py-4 text-gray-700 font-medium text-xs text-center">
                                            {tx.created_at 
                                                ? new Date(tx.created_at).toLocaleString('id-ID', { 
                                                    day: '2-digit', 
                                                    month: 'short', 
                                                    year: 'numeric', 
                                                    hour: '2-digit', 
                                                    minute: '2-digit' 
                                                }) 
                                                : '-'}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="py-6 text-center text-gray-400 text-sm">
                                        Tidak ada data transaksi ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </div>

                    {/* BAGIAN TOMBOL PAGINATION DI BAWAH */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                        <span className="text-xs text-gray-500">
                            Menampilkan <span className="font-medium text-gray-700">{recentTransactions.length > 0 ? indexOfFirstItem + 1 : 0}</span> sampai <span className="font-medium text-gray-700">{Math.min(indexOfLastItem, recentTransactions.length)}</span> dari <span className="font-medium text-gray-700">{recentTransactions.length}</span> data
                        </span>
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-lg text-gray-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                            >
                                Sebelumnya
                            </button>
                            <span className="text-xs font-medium text-gray-600 px-2">
                                Hal {currentPage} dari {totalPages || 1}
                            </span>
                            <button 
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-lg text-gray-600 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                            >
                                Berikutnya
                            </button>
                        </div>
                    </div>
            </div>
            <div className='flex gap-x-8 mb-10'>
                <div className="bg-white p-8 pb-12 rounded-2xl w-full h-125">
                    <h2 className="text-gray-700 font-semibold mb-4">
                        Monthly Success vs Failed Transactions
                    </h2>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData} barCategoryGap="20%">
                            <XAxis dataKey="month_name" padding={{ left: 20, right: 20 }} />
                            <YAxis />
                            <Tooltip />

                            {/* success_val untuk batang biru (Sukses) */}
                            <Bar dataKey="success_val" fill="#2563eb" radius={[6, 6, 0, 0]} />
                            
                            {/* failed_val untuk batang tosca/merah (Gagal) */}
                            <Bar dataKey="failed_val" fill="#14b8a6" radius={[6, 6, 0, 0]} />
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
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Bagian Keterangan / Legend di Bawah Grafik */}
                    <div className="flex justify-center flex-wrap gap-4 mt-4">
                        {dataPie.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                ></div>
                                <span>
                                    {item.name} ({item.value}%)
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
