const SecondForm = ({ select }) => {
    var hidden = 'hidden';
    var coupleForm = 'hidden';
    var venderForm = 'hidden';
    console.log('select', select);
    if (select != 2) {
        hidden = '';
    }
    if (select == 0) {
        coupleForm = '';
    }
    if (select == 1) {
        venderForm = '';
    }
    return (

        <span className={`second-form ${hidden}`} id="second-form">


            <div className={`mt-3 mb-3 vender-form ${venderForm}`} id="vender-form">
                <label htmlFor="select-opt-type" className="form-label select-account">Vendor type</label>
                <select className="form-select mb-4" aria-label="Default select example" id="select-opt-type" >
                    <option value='0'>Florist</option>
                    <option selected value="1">Venue</option>
                    <option value="3">Photographer</option>
                </select>
            </div>
            <span className={`couple-form ${coupleForm}`} id="couple-form">
                <div className="mb-3  couple-filed">
                    <label htmlFor="fname" className="form-label" value={select}>First name</label>
                    <input type="text" className="form-control" id="fname" placeholder='Jane' />
                </div>
                <div className="mb-3   couple-filed">
                    <label htmlFor="lname" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lname" placeholder='Smith' />
                </div>
            </span>
            <div className="mb-3  ">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='jsmith@email.com' />
            </div>
            <div className="mb-3  ">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="password" placeholder='Password' />
                <div id="password" className="form-text">
                    Passwords must have at least 6
                </div>
                <div id="password" className="form-text" >
                    <ul>
                        <li>characters. Uppercase and lowercase</li>
                        <li>letters A symbol ($%#)</li>
                    </ul>
                </div>
            </div>
            <div className="mb-3 ">
                <label htmlFor="repassword" className="form-label">Re-enter your password</label>
                <input type="password" className="form-control" id="repassword" aria-describedby="password" placeholder='Re-enter your password' />
            </div>
            <div className="mb-3 form-check ustom-col-2 ">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <p className="form-check-label" htmlFor="exampleCheck1">I agree to the <a href="">terms and conditions</a></p>
            </div>

        </span>

    )
}
export default SecondForm