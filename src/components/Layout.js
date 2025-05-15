import Navigation from './Navigation'
import Footer from './Footer'

const Layout = (props) => {
    const { children, cart } = props
    return (
        <>
            <Navigation cart={cart} />
            <main className=''>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
