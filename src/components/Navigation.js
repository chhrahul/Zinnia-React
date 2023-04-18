const Navigation = (props) => {
    const { cart } = props
    return (
        < >

            {/* <div class="container-fluid main-nav" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} > */}
            <div className="container-fluid main-nav position-relative" style={{ 'paddingRight': 0, 'paddingLeft': 0 }} >
                <div className="row ">
                    <div className="col-md-6 col-sm-6 w-50 ">
                        <div className="container-">
                            <div className="row px-md-5 mt-3">
                                <img src="images/Logo.png" alt="" className="nav-bar-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 w-50 ">
                        <ul className='header-ui float-right mt-3 px-md-5'>
                            <li className='nav-item'>
                                <a className='nav-link cart-icon' href='/'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="cart-icon-fill" d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#505267" />
                                    </svg>
                                    {cart.length}
                                </a>
                            </li>
                            <li className='nav-item signup-li'>
                                <a href="/sign-up" className="btn btn-light signup-item">
                                    Sign up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation