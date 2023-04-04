import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main className=''>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
