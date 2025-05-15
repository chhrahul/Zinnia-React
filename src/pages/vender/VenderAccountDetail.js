


function VenderAccountDetail() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr upper-part-custom">
                <h3>About You</h3>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <a href="/vender-business-detail" class="card-link account-link-custom">
                        <div class="card">
                            <div class="card-body">
                                <img src="/images/icons/User.jpg" alt="user" />
                                <h6 class="card-subtitle mb-2 text-muted mt-2">Business Info</h6>
                                <a href="/vender-business-detail" class="card-link account-link-custom font-14">Tell us about your business</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 payment-card">
                    <a href="/payment-info" class="card-link account-link-custom">
                        <div class="card">
                            <div class="card-body">
                                <img src="/images/icons/business.jpg" alt="business" />
                                <h6 class="card-subtitle mb-2 text-muted mt-2">Payments</h6>
                                <a href="/payment-info" class="card-link account-link-custom font-14">Update your payment information</a>
                            </div>
                        </div>
                    </a>
                </div>


            </div>

        </div >
    )
}
export default VenderAccountDetail

