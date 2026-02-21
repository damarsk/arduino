import { Head, useForm, usePage } from '@inertiajs/react'

interface PageProps {
  errors: {
    email?: string
    password?: string
    message?: string
  }
  [key: string]: any
}

export default function Login() {
    const { errors: pageErrors } = usePage<PageProps>().props
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/login')
  }

  return (
    <>
      <Head title="Login" />
      <div className="bg-gray-100 h-screen flex flex-col max-w-sm mx-auto justify-center p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">House Control</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <div>
            {pageErrors.message && (
              <p className="text-red-500 text-sm mb-4 text-center bg-red-100 border border-red-200 rounded-lg p-2">{pageErrors.message}</p>
            )}
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {processing ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </>
  )
}
