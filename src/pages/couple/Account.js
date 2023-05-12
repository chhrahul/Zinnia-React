

function Account() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr upper-part-custom custom-card">
                <h3>Account</h3>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <a href="/login-info" class="card-link account-link-custom">
                        <div class="card info-card">
                            <div class="card-body">
                                <img src="/images/icons/Login.jpg" alt="login" />
                                <h6 class="card-subtitle mb-2 text-muted mt-2">Login</h6>
                                <a href="#" class="card-link account-link-custom font-14">Update your password and username. </a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 payment-card p-0">
                    <a href="/wedding-payment" class="card-link account-link-custom">
                        <div class="card info-card">
                            <div class="card-body">
                                <img src="/images/icons/business.jpg" alt="business" />
                                <h6 class="card-subtitle mb-2 text-muted mt-2 ">Payments</h6>
                                <a href="#" class="card-link account-link-custom  font-14">Update your payment information</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row paddin-lr upper-part-custom mt-2 custom-card">
                <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <a href="/personal-info" class="card-link account-link-custom">
                        <div class="card info-card">
                            <div class="card-body">
                                <img src="/images/icons/User.jpg" alt="user" />
                                <h6 class="card-subtitle mb-2 text-muted mt-2">Personal Info</h6>
                                <a href="#" class="card-link account-link-custom  font-14">Tell wedding vendors who you are and update your photo. </a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 payment-card p-0">
                    <a href="/wedding-info" class="card-link account-link-custom">
                        <div class="card info-card">
                            <div class="card-body">
                                <img src="/images/icons/mywedding.jpg" alt="wedding" />
                                <h6 class="card-subtitle mb-2 text-muted mt-2">Wedding info</h6>
                                <a href="#" class="card-link account-link-custom  font-14">Tell wedding vendors who you are and update your photo. </a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Account

