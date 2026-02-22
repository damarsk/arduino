import { useState } from 'react'

interface DeviceCardProps {
  label: string
}

export default function DeviceCard({ label }: DeviceCardProps) {
  const [isOn, setIsOn] = useState(false)

  const toggle = () => setIsOn(!isOn)

  return (
    <div
      onClick={toggle}
      className="device-card bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between cursor-pointer transition"
    >
      <div className="flex items-center gap-4">
        <svg
          className={`light w-14 h-14 ${isOn ? 'text-yellow-400' : 'text-gray-800'}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 5V1h2v4zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425zM19 13v-2h4v2zm-8 10v-4h2v4zM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75zM1 13v-2h4v2zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7zm2.825-4.25Q6 14.5 6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18t-4.25-1.75"
          />
        </svg>
        <div>
          <h2 className="font-semibold text-lg">{label}</h2>
          <p className={`status ${isOn ? 'text-green-500' : 'text-gray-500'}`}>
            {isOn ? 'ON' : 'OFF'}
          </p>
        </div>
      </div>
      <div
        className={`indicator w-5 h-5 rounded-full ${isOn ? 'bg-green-500' : 'bg-gray-400'}`}
      />
    </div>
  )
}