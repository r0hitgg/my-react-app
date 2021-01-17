import React, { useState }  from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import { logInUser }  from '../actions/UserActions';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LogIn = ({userData, logInUser}) => {
    const history = useHistory();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    console.log(userData,'....userDatauserData.userData')
    if(userData.hasOwnProperty('id')){
        history.push('/');
    }

    function onSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:7073/api/v1/demo/res.users/call/_login", {
            method: 'PATCH',
            headers: {
                "authorization": "Basic YXBpX2RiOjY0ODBlZjhmLWZmNTAtNGQ1ZS04Yzk4LTczM2FkMDBiYTQwNQ==",
                "content-type": "application/json",
                "accepts": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Credentials': 'true'
            },
            body: JSON.stringify({"kwargs": {"db": "api_db", "login": userEmail,
                    "password": userPassword, "user_agent_env": {}}})
        }).then(
            res => res.json()
        ).then((user) => {

            if(!user.hasOwnProperty('error')){
                fetch("http://localhost:7073/api/v1/demo/res.users/"+ user,{
                    method: 'GET',
                    headers: {
                        "authorization" : "Basic YXBpX2RiOjY0ODBlZjhmLWZmNTAtNGQ1ZS04Yzk4LTczM2FkMDBiYTQwNQ==",
                        // "content-type" : "application/json"
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                        'Access-Control-Allow-Credentials': 'true'
                    }
                }).then(
                    res => res.json()
                ).then((userData) => {
                    logInUser(userData)
                    console.log(userData,'.........user data');
                });
            }
        })
    }

    return (
        <form className="container p-5 col-md-5">

            <h3 className="p-3">Log In</h3>

            <div className="form-group p-3">
                <TextField variant="outlined" type="email" className="form-control" onChange={e => setUserEmail(e.target.value)}
                       value={userEmail} label="Email"/>
            </div>

            <div className="form-group p-3">
                <TextField type="password" variant="outlined" className="form-control" onChange={e => setUserPassword(e.target.value)}
                       value={userPassword} label="Password"/>
            </div>

            <div className="form-group p-3">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <Button onClick={(e) => onSubmit(e)} variant="contained" color="primary"
                    className="btn btn-dark btn-lg btn-block">Sign in
            </Button>
            <p className="forgot-password text-right p-3">
                Forgot password?
            </p>
        </form>
    );
}

LogIn.propTypes = {
    logInUser: PropTypes.func,
    userData: PropTypes.object,
};
const mapStateToProps = state =>{
    return {
        userData:  state.userData
    }
};
const mapDispatchToProps = dispatch => {
    return {
        logInUser: (user) => {
            dispatch(logInUser(user));
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LogIn);