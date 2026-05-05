export default function CardInformation({
  title,
  value,
  satuan,
  percentage,
  icon = "/icons/bookmember.svg",
}) {

  const isIncrease = percentage >= 0;

  const trendColor = isIncrease
    ? "text-green-500"
    : "text-blue-500";

  const trendIcon = isIncrease ? "/icons/growth.svg" : "/icons/decline.svg";

  const iconRotation = isIncrease ? "rotate-0" : "rotate-[65deg]";

  return (
    <div>
      <div className='bg-white rounded-2xl p-6'>
        
        <div className='flex justify-between mb-5'>
          <div className='text-gray-600 font-semibold uppercase'>{title}</div>
          <img className="w-6 h-6" src={icon} alt="" />
        </div>

        <div className='text-4xl mb-3'>{value}{satuan}</div>

        <div className={`${trendColor} flex items-center gap-x-1`}>
          <img
            className={`w-4 h-4 transform ${iconRotation}`}
            src={trendIcon}
            alt=""
          />
          <div className='text-sm'>
            {percentage}% vs last month
          </div>
        </div>

      </div>
    </div>
  );
}