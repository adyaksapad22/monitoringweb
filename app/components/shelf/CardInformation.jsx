import CapacityBar from "./CapacityBar";

export default function CardInformation({
    name,
    location,
    status,
    capacityValue,
    capacityMax,
    isLocked,
    temperature,
    lastUpdate,
}) {

    const statusStyle = {
        Online: "bg-green-100 text-green-600",
        Offline: "bg-red-100 text-red-600",
    };

    const statusIcon = {
        Online: "/icons/wifi.svg",
        Offline: "/icons/dissconnect.svg",
    };

    const statusLock = {
        Lock: "/icons/lock.svg",
        Unlock: "/icons/unlocked.svg",
    };
    return (
        <div className='bg-white rounded-2xl p-8'>

            <div className='flex justify-between mb-5'>
                <div>
                    <div className='text-2xl font-semibold'>{name}</div>
                    <div>{location}</div>
                </div>

                <div>
                    <div className={`px-4 py-2 rounded-full text-xs flex items-center gap-x-2 w-auto
            ${statusStyle[status] || "bg-gray-100 text-gray-500"}`}>

                        <img className="w-4 h-4" src={statusIcon[status]} alt="" />
                        <div>{status}</div>
                    </div>
                </div>
            </div>

            <CapacityBar value={capacityValue} max={capacityMax} />

            <div className='w-full h-0.5 bg-gray-100 my-6'></div>

            <div className='flex justify-center gap-x-10'>

                <div className='flex flex-col items-center'>
                    <img className="w-8 h-8" src={isLocked ? statusLock.Lock : statusLock.Unlock} alt="" />
                    <div className='text-gray-400 uppercase'>
                        {isLocked ? "Locked" : "Unlocked"}
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <img className="w-8 h-8" src="/icons/celcius.svg" alt="" />
                    <div className='text-gray-400'>{temperature}°C</div>
                </div>

                <div className='flex flex-col items-center'>
                    <img className="w-8 h-8" src="/icons/clock.svg" alt="" />
                    <div className='text-gray-400 uppercase'>{lastUpdate}</div>
                </div>

            </div>
        </div>
    );
}