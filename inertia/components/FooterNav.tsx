import { Link, usePage } from '@inertiajs/react'

export default function FooterNav() {
  const { url } = usePage()
  const isCreatePage = url === '/devices/create'

  return (
    <footer className="bg-gray-100 border-t border-t-gray-300 p-3 flex justify-around items-center">
      <Link 
        href={isCreatePage ? '/dashboard' : '/devices/create'} 
        className={`flex flex-col items-center transition-colors text-gray-600`}
      >
        <div className={`p-3 rounded-full transition-colors bg-gray-200 hover:bg-gray-300`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isCreatePage ? (
              <path 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            ) : (
              <path 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 4v16m8-8H4" 
              />
            )}
          </svg>
        </div>
      </Link>
    </footer>
  )
}