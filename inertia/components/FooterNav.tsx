export default function FooterNav() {
  return (
    <footer className="bg-white border-t-gray-300 p-3 flex justify-around items-center">
      <div className="p-3 rounded-full bg-gray-200">
        <button className="flex flex-col items-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}