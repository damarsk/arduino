interface DeviceCardProps {
    name: string;
    deviceId: string;
}

const DeviceCard = ({ name, deviceId }: DeviceCardProps) => {
	return (
		<div className="bg-white rounded shadow p-4 flex items-center justify-between">
			<div>
				<div className="font-semibold">{name}</div>
				<div className="text-xs text-gray-500">ID: {deviceId}</div>
			</div>
			{/* Add device icon or controls here */}
		</div>
	);
};

export default DeviceCard;
