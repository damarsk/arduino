import { Head } from '@inertiajs/react'
import FooterNav from '~/components/FooterNav'
import Header from '~/components/Header'

interface MainLayoutProps {
  children: React.ReactNode
  title?: string
}

export default function MainLayout({ children, title = 'Dashboard' }: MainLayoutProps) {
  return (
    <>
      <Head title={title} />
      <div className="bg-white min-h-screen flex flex-col max-w-screen-sm mx-auto w-full">
        <div className="flex-1 flex flex-col shadow-lg overflow-hidden">
          <Header />
            <main className="flex-1 overflow-y-auto p-4 space-y-4">
                {children}
            </main>
          <FooterNav />
        </div>
      </div>
    </>
  )
}