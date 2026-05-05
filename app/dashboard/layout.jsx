import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">

            <Sidebar />

            <div className="flex flex-col flex-1 ml-75">

                {/* HEADER */}
                <Header />

                {/* CONTENT */}
                <main className="px-12 py-12 mt-14 bg-gray-100 text-black min-h-screen">
                    {children}
                </main>

            </div>

        </div>
    )
}