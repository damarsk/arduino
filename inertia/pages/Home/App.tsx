import Main from '~/components/Main'
import MainLayout from '~/Layouts/mainLayout'

interface AppProps {
  devices: { id: number; label: string }[]
}

export default function App({ devices }: AppProps) {
  return (
    <MainLayout title="Dashboard">
      <Main devices={devices} />
    </MainLayout>
  )
}
