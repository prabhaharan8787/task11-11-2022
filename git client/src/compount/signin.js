import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export function Signin()
{


return(

<div>
<div className="container">
    <div className="row">
    <div className="col-lg-4">

    </div>
    <div className="col-lg-4 bg-warning m-5 pt-5">
        <form>
            <div className="table table-responsive">
                <thead>
                    <tr>
                        <td>
                            <label>name</label>
                        </td>
                        <td>
                            <input type="text" id ="name_id" className="form-control" placeholder="name"/>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label>password</label>
                        </td>
                        <td>
                            
                            <input type="password" id ="pwd_id" className="form-control" placeholder="password"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button className="btn btn-primary mt-5" value="submit">submit</button>
                        </td>
                        <td>
                           <Link to='/'><button className="btn btn-danger mt-5" value="signin">signup</button> </Link>
                        </td>

                    </tr>
                    
                </tbody>
            </div>
        </form>

    </div>
    <div className="col-lg-4">

    </div>

</div>
</div>
</div>


)
}