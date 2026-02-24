import { useState } from 'react'
import { router } from '@inertiajs/react'
import DeviceCard from './DeviceCard'

interface Device {
  id: number;
  deviceName: string;
}

interface MainProps {
  devices: Device[]
}

export default function Main({ devices: initialDevices }: MainProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [deviceToDelete, setDeviceToDelete] = useState<Device | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleDelete = () => {
    if (!deviceToDelete) return;

    setProcessing(true);
    router.post('/devices/delete', { id: deviceToDelete.id }, {
      onSuccess: () => {
        setDeviceToDelete(null);
      },
      onError: () => {
        alert("Failed to delete device.");
      },
      onFinish: () => {
        setProcessing(false);
      },
      preserveScroll: true,
    });
  };

  if (initialDevices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-xl">
        <p className="text-gray-500 text-lg font-medium">No devices available</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Device List</h2>
        <button 
          onClick={() => setIsEditMode(!isEditMode)}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            isEditMode 
              ? "bg-green-50 text-green-600 border border-green-200 hover:bg-green-100" 
              : "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
          }`}
        >
          {isEditMode ? "Done" : "Delete Devices"}
        </button>
      </div>

      <div className="grid gap-4">
        {initialDevices.map((device) => (
          <div key={device.id} className="group relative flex items-center">
            <div className="flex-1">
              <DeviceCard label={device.deviceName} />
            </div>
            
            {isEditMode && (
              <button 
                onClick={() => setDeviceToDelete(device)}
                className="ml-3 p-3 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 transition-all animate-in fade-in slide-in-from-right-4"
              >
                <TrashIcon />
              </button>
            )}
          </div>
        ))}
      </div>

      {deviceToDelete !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[99] p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full transform transition-all animate-in zoom-in-95">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                <span className="text-red-600 text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Confirm Deletion</h3>
              <p className="text-gray-500 mt-2">
                Are you sure you want to delete <strong>{deviceToDelete.deviceName}</strong>?
              </p>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button 
                disabled={processing}
                onClick={() => setDeviceToDelete(null)}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-2xl font-bold disabled:opacity-50"
              >
                Cancel
              </button>
              <button 
                disabled={processing}
                onClick={handleDelete}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-2xl font-bold shadow-lg disabled:bg-red-400 flex items-center justify-center"
              >
                {processing ? <LoadingSpinner /> : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TrashIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 9v4m4-4v4" /></svg>;
}

function LoadingSpinner() {
  return <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>;
}