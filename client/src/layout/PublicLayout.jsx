import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/layout/Navbar.jsx'
import Footer from '@/layout/Footer.jsx'
import QuickConnectFAB from '@/layout/QuickConnectFAB.jsx'
import { RouteScrollReset, RouteFocus } from '@/layout/RouteEffects.jsx'
import { RouteProgressBar } from '@/layout/RouteProgressBar.jsx'
import { useRoutePhase } from '@/shared/hooks/useRoutePhase.js'

export default function PublicLayout() {
  const { pathname } = useLocation()
  const navigation = useNavigation()
  const prevPathnameRef = useRef(pathname)
  const [isNavigating, setIsNavigating] = useState(false)

  // Detect pathname changes to trigger progress bar
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setIsNavigating(false)
      prevPathnameRef.current = pathname
    }
  }, [pathname])

  // Start navigation when clicking links
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a')
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const targetPath = new URL(link.href).pathname
        if (targetPath !== pathname) {
          setIsNavigating(true)
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [pathname])

  // Check for actual router navigation state OR our manual flag
  const hasRouterNavigation = navigation.state !== 'idle' && navigation.location?.pathname !== pathname
  const isPageChange = hasRouterNavigation || isNavigating
  const phase = useRoutePhase(isPageChange)

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <RouteScrollReset />
      <RouteFocus />

      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />

      {/* Fixed bottom-right speed-dial communication FAB */}
      <QuickConnectFAB />

      <RouteProgressBar phase={phase} />
    </div>
  )
}
