


function Invoices() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr">
                <p className="d-flex invoice-top-custom mb-0">
                    <p class="color-cyan" >About you</p> <p> > Invoices</p>
                </p>
                <div className="invoice-second-custom">
                <p>Invoices</p>
                </div>
                <div>
                    <button type="button" class="btn btn-light download-btn">Download</button>

                </div>
                <div className="row paddin-lr">
                    <div className="col-lg-8 table-responsive">
                        <table class="table invoice-custom">
                            <thead>
                                <tr>
                                    <th scope="col">Customer name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Abby Jasten</td>
                                    <td>$4500.00</td>
                                    <td>1/20/2023</td>
                                </tr>
                                <tr>
                                    <td>Abby Jasten</td>
                                    <td>$4500.00</td>
                                    <td>1/20/2023</td>
                                </tr>
                                <tr>
                                    <td>Abby Jasten</td>
                                    <td>$4500.00</td>
                                    <td>1/20/2023</td>
                                </tr>
                                <tr>
                                    <td>Abby Jasten</td>
                                    <td>$4500.00</td>
                                    <td>1/20/2023</td>
                                </tr>
                                <tr>
                                    <td>Abby Jasten</td>
                                    <td>$4500.00</td>
                                    <td>1/20/2023</td>
                                </tr>
                                <tr>
                                    <td>Abby Jasten</td>
                                    <td>$4500.00</td>
                                    <td>1/20/2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>

        </div>
    )
}
export default Invoices

