import React from 'react'
import CapacityBar from '../../components/shelf/CapacityBar'
import CardInformation from '../../components/shelf/CardInformation'

function page() {
    return (
        <div>
            <div className='flex items-end justify-between mb-8'>
                <div>
                    <div className='text-[#AFB3BD] mb-3'>IoT Monitoring</div>
                    <div className='text-5xl'>Shelf Status</div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-3 gap-4">
                    <CardInformation
                        name="Rack A-1"
                        location="Floor 1, Aisle A"
                        status="Online"
                        capacityValue={48}
                        capacityMax={50}
                        isLocked={true}
                        temperature={24}
                        lastUpdate="3 min ago"
                    />
                    <CardInformation
                        name="Rack A-2"
                        location="Floor 1, Aisle A"
                        status="Online"
                        capacityValue={18}
                        capacityMax={50}
                        isLocked={true}
                        temperature={24}
                        lastUpdate="3 min ago"
                    />
                    <CardInformation
                        name="Rack B-1"
                        location="Floor 1, Aisle B"
                        status="Online"
                        capacityValue={50}
                        capacityMax={50}
                        isLocked={true}
                        temperature={25}
                        lastUpdate="1 min ago"
                    />
                    <CardInformation
                        name="Rack A-1"
                        location="Floor 1, Aisle A"
                        status="Offline"
                        capacityValue={30}
                        capacityMax={50}
                        isLocked={false}
                        temperature={25}
                        lastUpdate="just now"
                    />
                </div>
            </div>
        </div>
    )
}

export default page