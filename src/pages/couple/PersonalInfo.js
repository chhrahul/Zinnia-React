function PersonalInfo() {

    return (
        <div className="container-fluid px-md-5  mt-3 custom-search">
            <div className="row paddin-lr upper-part-custom">
                <div className="col-lg-7 col-md-6 col-sm-12 ">
                    <p className="d-flex invoice-top-custom mb-0">
                        <p class="color-cyan" >Account</p> <p> >  Personal info</p>
                    </p>
                    <h5 className="text-dark">Personal Info</h5>
                    <div className="mb-3">
                        <span className="d-flex"><p className="text-dark custom-info">Legal Name</p><a href="#" class="text-cyan-color mr-2">Edit</a></span>
                        <h6 className="text-dark custom-below-info">Cally Bennett</h6>
                    </div>
                    <div className="mb-3">
                        <span className="d-flex"><p className="text-dark custom-info">Gender</p><a href="#" class="text-cyan-color mr-2">Edit</a></span>
                     <h6 className="mb-3 text-dark custom-below-info">Female</h6>
                    </div>
                    <div className="mb-3">
                        <span className="d-flex"><p className="text-dark custom-info">Email Address</p><a href="#" class="text-cyan-color mr-2">Edit</a></span>
                     <h6 className="mb-3 custom-below-info">c************2@gmail.com</h6>
                    </div>
                    <div className="mb-3">
                        <span className="d-flex"><p className="text-dark custom-info">Phone Number</p><a href="#" class="text-cyan-color mr-2">Edit</a></span>
                     <h6 className="mb-3 custom-below-info">(505)***-**21</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo