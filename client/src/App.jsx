import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import PagePlaceholder from './pages/PagePlaceholder.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<PagePlaceholder eyebrow="About" title="About Page" />} />
          <Route path="/services" element={<PagePlaceholder eyebrow="Services" title="Services Page" />} />
          <Route path="/projects" element={<PagePlaceholder eyebrow="Projects" title="Projects Page" />} />
          <Route path="/team" element={<PagePlaceholder eyebrow="Team" title="Team Page" />} />
          <Route path="/contact" element={<PagePlaceholder eyebrow="Contact" title="Contact Page" />} />
          <Route path="*" element={<PagePlaceholder eyebrow="404" title="Page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
