import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Alert from '../../components/layout/alert';



const Signup = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    error: "",
    open: false
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if(password !== password2){
      setAlert("Passwords Do Not Match", 'danger');
    }else{
     register({name, email, password});
    }
  };

  return (
    <Fragment>
      
        <div className="container">
          <div className="row justify-content-md-center">
          <div className="col-md-auto">
          <div className="test">  
          <form onSubmit={e => onSubmit(e)}>
            <Alert></Alert>
            <div className="centered">
            <h2>Registration</h2></div>
            <div className="form-group">
              {/* <label htmlFor="InputName1">First and Last Name</label> */}
              <input
                //    onChange={this.handleChange("name")}
                onChange={e => onChange(e)}
                type="text"
                className="form-control"
                placeholder="First and Last Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                name="name"
                value={name}
              ></input>
            </div>
            <div className="form-group">
              {/* <label htmlFor="InputEmail1">Email address</label> */}
              <input
                // onChange={this.handleChange("email")}
                onChange={e => onChange(e)}
                type="email"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={email}
              ></input>
            </div>
            <div className="form-group">
              {/* <label htmlFor="InputPassword1">Password</label> */}
              <input
                // onChange={this.handleChange("password")}
                onChange={e => onChange(e)}
                type="password"
                className="form-control"
                id="InputPassword1"
                placeholder="Password"
                name="password"
                value={password}
              ></input>
              <p>Password must include: (8-32 Characters)</p>
              <ul>
                <li>
                One lowercase character
                </li>
                <li>
                One uppercase character
                </li>
                <li>
                A number
                </li>
                <li>
                A special character
                </li>
              </ul>
            </div>
            <div className="form-group">
              {/* <label htmlFor="InputPassword2">Password</label> */}
              <input
                // onChange={this.handleChange("password")}
                onChange={e => onChange(e)}
                type="password"
                className="form-control"
                id="InputPassword2"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
          </div>
          </div>


        </div>
      </div>{" "}
    </Fragment>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};




export default connect(
  null, 
  { setAlert, register }
)(Signup);
