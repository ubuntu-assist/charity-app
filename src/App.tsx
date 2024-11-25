import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import BlogPage from './pages/Blog'
import SharedLayout from './components/core/shared-layout'
import DonationPage from './pages/Donate'
import PrivacyPolicyPage from './pages/PrivacyAndPolicy'
import CommunityContactPage from './pages/Contact'
import FAQPage from './pages/faq'
import ErrorPage from './pages/ErrorPage'
import PostDetails from './pages/SinglePost'
import './i18n'
import ScrollToTop from './components/core/scroll-to-top'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='donate' element={<DonationPage />} />
          <Route path='privacy' element={<PrivacyPolicyPage />} />
          <Route path='contact' element={<CommunityContactPage />} />
          <Route path='faq' element={<FAQPage />} />
          <Route path='post' element={<PostDetails />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
