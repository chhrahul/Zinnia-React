


function VenderAccountDetail() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr upper-part-custom">
                <h3>About You</h3>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                        <img src="/images/icons/User.jpg" alt="user"/>
                            <h6 class="card-subtitle mb-2 text-muted mt-2">Business Info</h6>
                            <a href="#" class="card-link account-link-custom">Tell us about your business</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 payment-card">
                    <div class="card">
                        <div class="card-body">
                        <img src="/images/icons/business.jpg" alt="business"/>
                            <h6 class="card-subtitle mb-2 text-muted mt-2">Payments</h6>
                            <a href="#" class="card-link account-link-custom">Update your payment information</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default VenderAccountDetail

