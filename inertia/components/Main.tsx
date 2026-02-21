import DeviceCard from "./DeviceCard";

const devices = [
  { deviceId: "lampu1", label: "Lampu Ruang Tamu" },
  // tambah device lain di sini nanti
];

export default function Main() {
  return (
    <main className="flex-1 overflow-y-auto p-4 space-y-4">
      {devices.map((device) => (
        <DeviceCard
          key={device.deviceId}
          deviceId={device.deviceId}
          label={device.label}
        />
      ))}
    </main>
  );
}