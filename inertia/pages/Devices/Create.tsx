import MainLayout from '~/Layouts/mainLayout'
import { useForm } from '@inertiajs/react'

function Create() {
  const { data, setData, post, processing, errors } = useForm({
    deviceName: '',
    type: 'light',
    endpoint: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    post('/devices/create')
  }

  return (
    <MainLayout title="Create Device">
      <div className="p-4 min-h-full">
        <h1 className="text-xl font-bold mb-6 text-gray-800">Add New Device</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Device Name</label>
            <input
              type="text"
              value={data.deviceName}
              onChange={(e) => setData('deviceName', e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Lampu Teras"
            />
            {errors.deviceName && (
              <div className="text-red-500 text-xs mt-1">{errors.deviceName}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Device ID (Endpoint)</label>
            <input
              type="text"
              value={data.endpoint}
              onChange={(e) => setData('endpoint', e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. esp32_01"
            />
            <p className="text-gray-400 text-[10px] mt-1 italic">
              *Gunakan ID ini pada kode Arduino kamu
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Device Type</label>
            <select
              value={data.type}
              onChange={(e) => setData('type', e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="light">Light</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={processing}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50"
          >
            {processing ? 'Saving...' : 'Register Device'}
          </button>
        </form>
      </div>
    </MainLayout>
  )
}

export default Create
