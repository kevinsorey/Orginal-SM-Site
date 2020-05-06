import React, { Fragment, useState } from "react";
import axios from "axios";
import './User.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    error: ""
  });

  const { name, email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    // if(password !== password2){
    // }else{
    // }
    console.log(formData);
    const newUser = {
      name,
      email,
      password
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const body = JSON.stringify(newUser);

      const res = await axios.post(
        "http://localhost:8080/signin",
        body,
        config
      );
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Fragment>
      
        <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
          <div className="test">
          <form onSubmit={e => onSubmit(e)}>
            <h2>Sign In</h2>
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
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </form>
          <p>Don't Have a Account? <a href="/Signup" className="signUpLink" >Signup</a></p>
        </div>
        </div>
        </div>
      </div>{" "}
    </Fragment>
  );
};

// }

export default Signin;
