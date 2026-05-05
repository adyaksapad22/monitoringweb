export default function CapacityBar({ value, max = 50 }) {
    const percentage = (value / max) * 100;

    const barColor =
        value < max
            ? "bg-gradient-to-r from-blue-400 to-blue-600"
            : "bg-gradient-to-r from-orange-300 to-orange-500";

    return (
        <div className="bg-white rounded-2xl w-full">

            <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span className="text-gray-400">Capacity</span>
                <span className="text-gray-400">{value}/{max}</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full ${barColor} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>

        </div>
    );
}