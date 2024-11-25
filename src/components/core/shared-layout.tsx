import { Outlet } from 'react-router'
import Footer from '../Footer'
import NavBar from '../Navbar'

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout
