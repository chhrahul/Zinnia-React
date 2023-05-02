function LoginInfo() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr upper-part-custom">
                <div className="col-lg-7 col-md-6 col-sm-12 ">
                    <p className="d-flex invoice-top-custom mb-0">
                        <p class="color-cyan" >Account</p>
                        <p> Personal information</p>
                    </p>
                    <h5 className="text-dark">Login</h5>
                    <div className="mb-3">
                        <label for="First-name" class="form-label">First Name</label>
                        <input type="text" class="form-control custom-payment w-50" id="First-name" placeholder="Calli" />
                    </div>
                    <div className="row paddin-lr p-0">
                        <p className="p-0 fs-6">Login details <a href="#" className="text-cyan-color fs-6 text-decoration-none">update</a> </p>
                        <div className="col-md-3 p-0">
                            <p>Last updated</p>
                        </div>
                        <div className="col-md-3 p-0">
                            <p>5 days ago</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h5 className="text-dark">Account</h5>
                        <span className="d-flex"> <p className="fs-6">Member since February 25th (2 years 3 days)</p><a href="#" className="text-danger fs-6 text-decoration-none"> Deactivate your account</a> </span>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default LoginInfo