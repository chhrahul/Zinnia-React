const Navigation = () => {
    return (
        <div >
            <nav className='navbar navbar-expand-lg  main-nav'>
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-lg-1 custom-col-1"></div>
                    <a className='navbar-brand- col-md-5 col-sm-5 col-lg-5 nav-col-5' href='/'>
                        <img src="images/Logo.png" alt=""></img>
                    </a>
                    <div className="col-md-5 col-sm-5 col-lg-5 nav-col-5 float-right">
                        <ul className='header-ui float-right'>

                            <li className='nav-item'>
                                <a className='nav-link' href='/'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#505267" />
                                    </svg>
                                </a>
                            </li>
                            <li className='nav-item signup-li'>
                                <button type="button" className="btn btn-light signup-item ">
                                    Sign up
                                </button>


                            </li>
                        </ul>
                    </div>
                    <div className="col-md-1 col-sm-1 col-lg-1 custom-col-1"></div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation