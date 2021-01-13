import React, { useState }  from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import { logInUser }  from '../actions/UserActions';
import PropTypes from 'prop-types';

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
        console.log(userEmail, 'inside', userPassword)

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
        <form className="container p-5">

            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" onChange={e => setUserEmail(e.target.value)}
                       value={userEmail} placeholder="Enter email"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={e => setUserPassword(e.target.value)}
                       value={userPassword} placeholder="Enter password"/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button onClick={(e) => onSubmit(e)}
                    className="btn btn-dark btn-lg btn-block">Sign in
            </button>
            <p className="forgot-password text-right">
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