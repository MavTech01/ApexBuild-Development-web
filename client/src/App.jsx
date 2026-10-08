import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from '@/pages/AboutPage.jsx'
import ServicesPage from '@/pages/ServicesPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx'
import TeamPage from '@/pages/TeamPage.jsx'
import ContactPage from '@/pages/ContactPage.jsx'
import PagePlaceholder from './pages/PagePlaceholder.jsx'

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/:projectId', element: <ProjectDetailsPage /> },
      { path: '/team', element: <TeamPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <PagePlaceholder eyebrow="404" title="Page not found" /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
