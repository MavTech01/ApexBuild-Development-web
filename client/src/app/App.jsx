import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicLayout from '@/layout/PublicLayout.jsx'
import HomePage from '@/features/home/HomePage.jsx'
import AboutPage from '@/features/about/AboutPage.jsx'
import ServicesPage from '@/features/services/ServicesPage.jsx'
import ProjectsPage from '@/features/projects/ProjectsPage.jsx'
import ProjectDetailsPage from '@/features/projects/ProjectDetailsPage.jsx'
import TeamPage from '@/features/team/TeamPage.jsx'
import ContactPage from '@/features/contact/ContactPage.jsx'
import PagePlaceholder from '@/app/PagePlaceholder.jsx'

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
      { path: '/privacy', element: <PagePlaceholder eyebrow="Legal" title="Privacy Policy" /> },
      { path: '*', element: <PagePlaceholder eyebrow="404" title="Page not found" /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
