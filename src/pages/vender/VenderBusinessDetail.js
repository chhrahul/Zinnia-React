


function VenderBusinessDetail() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr upper-part-custom">
                <div className="col-lg-8 col-md-6 col-sm-12 ">
                    <p className="d-flex invoice-top-custom mb-0">
                        <p class="color-cyan" >About you</p> 	<p>&#62;  Business info</p>
                    </p>
                    <div className="invoice-second-custom">
                        <p>Business info</p>
                    </div>
                    <div class="mb-3">
                        <label for="Business-name" class="form-label text-secondary">Business Name</label>
                        <input type="text" class="form-control w-50" id="Business-name" placeholder="Flowers and Friends" />
                    </div>
                    <div class="mb-3">
                        <label for="Ein-number" class="form-label text-secondary">EIN Number</label>
                        <input type="number" class="form-control w-50 mb-3" id="Ein-number" placeholder="282572945" />
                    </div>
                    <div className="row paddin-lr email-border-custom mt-3">
                        <p className="text-uppercase p-0 mt-2 venue-address-custom">email settings</p>
                    </div>

                    <div class="form-check  mb-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label fw-normal fs-6 text-secondary" for="flexCheckDefault">
                            Email me when someone requests a booking
                        </label>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label fw-normal fs-6 text-secondary" for="flexCheckChecked">
                            Email me when I get a new rating
                        </label>
                    </div>


                </div>

            </div>
        </div>


    )
}
export default VenderBusinessDetail

