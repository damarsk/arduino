import DeviceCard from './DeviceCard'

interface MainProps {
  devices: { id: number; deviceName: string }[]
}

export default function Main({ devices }: MainProps) {
  if (devices.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-gray-500 text-lg">No devices available</p>
      </div>
    )
  }

  return (
    <>
      {devices.map((device) => (
        <DeviceCard key={device.id} label={device.deviceName} />
      ))}
    </>
  )
}
