import { Button } from "react-bootstrap"

function PaymentDetail() {

    return (
        <>
            <div className="container-fluid px-md-5  mt-3 custom-search">
                <div className="row paddin-lr upper-part-custom">
                    <div className="col-lg-8 col-md-6 col-sm-12 ">
                        <p className="d-flex invoice-top-custom mb-0">
                            <p class="color-cyan" >About you</p> <p> &gt;  Business info</p>
                        </p>
                        <p className='mb-3 mt-3 padding-lr-0 fs-3 mb-3'>Payments </p>
                        <div className='row-p-0 padding-lr-0'>
                            <div className='rrow-p-0 padding-lr-0 mb-2'>
                                <div className='col-md-8'>
                                    <span class="d-flex">
                                        <div className='col-md-4'>
                                            <label for="Routing-number" class="form-label">Routing number</label></div>
                                        <div className='col-md-8'>
                                            <input type="number" class="form-control routing-custom px-2" id="Routing-number" placeholder="1498093525" />
                                        </div></span>
                                </div>
                            </div>
                            <div className='row-p-0 padding-lr-0 mb-2'>
                                <div className='col-md-8'>
                                    <span class="d-flex">
                                        <div className='col-md-4'>
                                            <label for="Account-number" class="form-label">Bank account number</label></div>
                                        <div className='col-md-8'>
                                            <input type="number" class="form-control routing-custom px-2" id="Account-number" placeholder="1498093525" />
                                        </div></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row next-btn-bg position-absolute- w-100 btn-grp" style={{ left: 0, bottom: 0 }}>
                <div className="col-md-12 d-flex justify-content-end">

                    <Button className="btn btn-light navigate-btn" href="payment-info">Cancel
                    </Button >
                    <button type="submit" className="btn btn-secondary navigate-btn" id="next-btn" form="form-data">
                        Save
                    </button>
                </div>
            </div>


        </>


    )
}
export default PaymentDetail

