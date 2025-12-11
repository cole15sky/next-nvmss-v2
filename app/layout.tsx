import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export const metadata = {
  title: 'NVMSS',
  description: 'Prototype website for NVMSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
