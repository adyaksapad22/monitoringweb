export default function CardName({
    name,
    email,
    status,
    books,
    joinedDate,
}) {
    const statusStyle = {
        Available: "bg-green-100 text-green-600",
        Warned: "bg-yellow-100 text-yellow-600",
        Suspanded: "bg-red-100 text-red-600",
    };

    const statusDot = {
        Available: "bg-green-500",
        Warned: "bg-yellow-500",
        Suspanded: "bg-red-500",
    };
    return (
        <div>
            <div className='bg-white px-6 py-8 rounded-2xl'>

                <div className='flex justify-between mb-5'>
                    <div>
                        <img
                            className='w-10 h-10 bg-blue-500 rounded-full'
                            src="/icons/users.svg"
                            alt=""
                        />
                    </div>

                    <div>
                        <div
                            className={`px-3 py-1 rounded-full text-xs flex items-center gap-x-2 w-auto ${statusStyle[status] || "bg-gray-100 text-gray-500"}`}
                        >
                            <div
                                className={`w-2 h-2 rounded-full ${statusDot[status] || "bg-gray-400"}`}
                            />
                            <div>{status}</div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-3 mb-3'>
                    <div className='text-xl font-semibold'>{name}</div>
                    <div className='text-lg'>{email}</div>
                </div>

                <div className='w-full h-0.5 bg-gray-200 mb-3'></div>

                <div className='flex justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <img className='w-6 h-6' src="/icons/bookmember.svg" alt="" />
                        <div className='text-gray-600 text-sm font-semibold'>
                            {books} books borrowed
                        </div>
                    </div>
                    <div className='text-gray-600 text-sm font-semibold'>
                        Since {joinedDate}
                    </div>
                </div>

            </div>
        </div>
    );
}