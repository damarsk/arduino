import { useForm } from '@inertiajs/react'

export default function Header() {
  const { post } = useForm()

  const handleLogout = () => {
    post('/logout')
  }

  return (
    <header className="bg-blue-600 text-white text-center py-4 text-xl font-semibold shadow-md flex justify-between items-center px-6">
      <span>House Control</span>
      <button
        onClick={handleLogout}
        className="hover:bg-blue-700 p-2 rounded-lg transition"
        title="Sign out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </button>
    </header>
  );
}