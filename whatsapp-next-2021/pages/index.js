import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home () {
  return (
    <div>
      <Head>
        <title>whatsapp2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Sidebar />
    </div>
  )
}
