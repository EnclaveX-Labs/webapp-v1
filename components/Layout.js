import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="page-root">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
