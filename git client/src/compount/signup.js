import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link } from "react-router-dom";

export function Signup()
{
    const submit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {     
            headers: { 'enctype': 'multipart/form-data' }
        }

        axios.post('http://localhost:3004/Signup',datastring,config)
        // .then(function(res){
        //     console.log(res)
        // });
        // .catch(function(err){
        //     console.log(err);
        // })
       .then(function(res){
        console.log(res)
       })
       .catch(function(req){
        console.log(req)
       })
    }


return(

<div>
<div className="container ">
    <div className="row">
    <div className="col-lg-4">

    </div>
    <div className="col-lg-4 bg-info m-5 pb-3 pt-3">
        <form onSubmit={submit}>
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
                            <label>email</label>
                        </td>
                        <td>
                            <input type='text' id='email_id' className="form-control" placeholder="email"/>
                        </td>
                    </tr>
                    <tr>
                        <td>log in type</td>
                        <td>
                            <select>
                            <option>choose</option>
                            <option>end user</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button className="btn btn-primary mt-5" value="signin">submit</button>
                        </td>
                        <td>
                       
                           <Link to='/Signin'><button className="btn btn-primary mt-5" value="signin">Signin</button></Link>
                     

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
