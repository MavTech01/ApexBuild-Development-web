import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import QuickConnectFAB from './QuickConnectFAB.jsx'

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Fixed bottom-right speed-dial communication FAB */}
      <QuickConnectFAB />
    </div>
  )
}
