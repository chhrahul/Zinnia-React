const Footer = () => {
    return (
        <div className='mt-3 footer-page border-top'>
            <footer className='row mt-1'>
                <div className='col-md-1   '></div>
                <div className='col-md-5   custom-col-footer'>
                    <ul className=' footer-ul mb-0 first'>
                        <li className='nav-item first-item-nav'>
                            <p>2022 Zinnia Inc.  </p>
                        </li>
                        <li className='nav-item '>
                            <a className='nav-link' href='/'>
                                <p> <span className="resposive-hide">|</span> About Us  </p>
                            </a>
                        </li>
                        <li className='nav-item '>
                            <a className='nav-link' href='/'>
                                <p> <span className="resposive-hide">|</span> Terms  </p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='col-md-5 custom-col-footer'>
                    <ul className=' footer-ul mb-0 footer-ul-2'>
                        <li className='nav-item first-item-nav-2'>
                            <p>United States  </p>
                        </li>
                        <li className='nav-item '>
                            <a className='nav-link' href='/'>
                                <p> <span className="resposive-hide">|</span> English (US)  </p>
                            </a>
                        </li>
                        <li className='nav-item '>
                            <a className='nav-link' href='/'>
                                <p> <span className="resposive-hide">|</span> $USD  </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-1   '></div>
            </footer>
        </div>
    )
}
export default Footer