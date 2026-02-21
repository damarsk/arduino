import Header from "~/components/Header";
import DeviceCard from "~/components/DeviceCard";
import FooterNav from "~/components/FooterNav";

export default function App() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col max-w-sm mx-auto">
      <div className="bg-gray-200 min-h-screen flex flex-col shadow-lg overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          <DeviceCard
            name="Lampu Ruang Tamu"
            deviceId="lampu1"
          />
        </main>

        <FooterNav />
      </div>
    </div>
  );
}