import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from '@/pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx'
import PagePlaceholder from './pages/PagePlaceholder.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<PagePlaceholder eyebrow="Services" title="Services Page" />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/team" element={<PagePlaceholder eyebrow="Team" title="Team Page" />} />
          <Route path="/contact" element={<PagePlaceholder eyebrow="Contact" title="Contact Page" />} />
          <Route path="*" element={<PagePlaceholder eyebrow="404" title="Page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
