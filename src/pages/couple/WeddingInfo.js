function WeddingInfo() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr upper-part-custom">
                <div className="col-lg-7 col-md-6 col-sm-12 ">
                    <p className="d-flex invoice-top-custom mb-0">
                        <p class="color-cyan" >Account</p>
                        <p> Wedding info</p>
                    </p>
                    <p class="font-24">Wedding info</p>
                    <div className="col-lg-6">
                        <label for="wedding-date" class="form-label px-3">Wedding Date</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text budget-icon text-muted" id="basic-addon1"><img src="/images/icons/calendar_today.svg" alt="date" /></span>
                            <input type="date" class="form-control" id="wedding-date" placeholder="" name="budget" value="" />
                        </div>
                        <label for="budget" class="form-label px-3">Wedding Budget</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text budget-icon text-muted" id="basic-addon2">$</span>
                            <input type="number" class="form-control" id="budget" placeholder="10,000" name="budget" value="" />
                        </div>
                        <label for="wedding-guest" class="form-label px-3">No. of guests</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text budget-icon text-muted" id="basic-addon3"><img src="/images/icons/Guest.svg" alt="guest" /></span>
                            <input type="number" class="form-control" id="wedding-guest" placeholder="150" />
                        </div>
                        <label for="wedding-location" class="form-label px-3">Location</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text budget-icon text-muted" id="basic-addon4"><img src="/images/icons/location-2.svg" alt="location" /></span>
                            <input type="text" class="form-control" id="wedding-location" aria-label="10,000" placeholder="Seattle, Washington" />
                        </div>
                    </div>
                    <div className="row paddin-lr email-border-custom mt-3">
                        <p className="text-uppercase p-0 mt-2 venue-address-custom">Wedding party</p>
                    </div>
                    <div className="row paddin-lr mt-3">
                        <div className="col-lg-3">
                            <div class="form-check  mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label fw-normal fs-6" for="flexCheckDefault">
                                    Bride
                                </label>
                                <label class="form-check-label fw-bold fs-6" for="flexCheckDefault">
                                    How many
                                </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label fw-normal fs-6" for="flexCheckChecked">
                                    Groom
                                </label>
                                <label class="form-check-label fw-bold fs-6" for="flexCheckDefault">
                                    How many
                                </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row paddin-lr mt-3">
                        <div className="col-lg-3">
                            <div class="form-check  mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label fw-normal fs-6" for="flexCheckDefault">
                                    Bridespeople
                                </label>
                                <label class="form-check-label fw-bold fs-6" for="flexCheckDefault">
                                    How many
                                </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="form-check  mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label fw-normal fs-6" for="flexCheckDefault">
                                    Groomspeople
                                </label>
                                <label class="form-check-label fw-bold fs-6" for="flexCheckDefault">
                                    How many
                                </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button type="button" class="btn btn-secondary btn-lg mt-2 pay-custom-checkout px-2 py-2">Save updates</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeddingInfo