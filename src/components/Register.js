import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const Register = () => {
    const history = useHistory();
    const { addToast } = useToasts();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRePassword, setUserRePassword] = useState('');

    function onSubmit(e){
        console.log(e,'.....e')
        if(userPassword === userRePassword){
            fetch("http://localhost:7073/api/v1/demo/res.users/call/create", {
                method: 'PATCH',
                headers: {
                    "authorization": "Basic YXBpX2RiOjY0ODBlZjhmLWZmNTAtNGQ1ZS04Yzk4LTczM2FkMDBiYTQwNQ==",
                    "content-type": "application/json",
                    "accepts": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify({"args": [{"name": userName, "login": userEmail,
                        "password": userPassword}]})
            }).then(
                res => res.json()
            ).then((user) => {
                console.log(user,'........user ')
                if(user.length !== 0){
                    addToast("Registered Successfully!",{
                        appearance: "success",
                        autoDismiss: true,
                    });
                    history.push('/log-in');
                }else{
                    addToast("Something Went Wrong!",{
                        appearance: "warning",
                        autoDismiss: true,
                    });
                }
            });
        }else{
            addToast("Both Passwords Must Be Same!",{
                appearance: "warning",
                autoDismiss: true,
            });
        }
    }

    return (
        <form className="container p-5 col-md-5">
            <h3 className="p-3">Register</h3>
            <div className="form-group p-3">
                <TextField variant="outlined" type="text" className="form-control" onChange={e => setUserName(e.target.value)}
                           value={userName} label="Name"/>
            </div>
            <div className="form-group p-3">
                <TextField variant="outlined" type="email" className="form-control" onChange={e => setUserEmail(e.target.value)}
                           value={userEmail} label="Email"/>
            </div>
            <div className="form-group p-3">
                <TextField variant="outlined" type="password" className="form-control" onChange={e => setUserPassword(e.target.value)}
                           value={userPassword} label="Password"/>
            </div>
            <div className="form-group p-3">
                <TextField variant="outlined" type="password" className="form-control" onChange={e => setUserRePassword(e.target.value)}
                           value={userRePassword} label="Re-Password"/>
            </div>
            <Button onClick={(e) => onSubmit(e)} variant="contained" color="primary"
                    className="btn btn-dark btn-lg btn-block">Register
            </Button>
        </form>

    )

}
export default Register;