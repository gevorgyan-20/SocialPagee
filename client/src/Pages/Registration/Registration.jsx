import React from "react";
import "./registration.css";
import { useDispatch, useSelector } from "react-redux";
import { postNewUserData } from "../../Store/allUsersDataSlice/API";
import { selectAllUsersData } from "../../Store/allUsersDataSlice/allUsersDataSlice";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const { usersData } = useSelector(selectAllUsersData);
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();

    const {
      firstName: { value: firstName },
      lastName: { value: lastName },
      age: { value: age },
      gender: { value: gender },
      address: { value: address },
      login: { value: login },
      password: { value: password },
      email: { value: email },
    } = e.target;

    if (firstName.trim() && lastName.trim() && age.trim() && gender.trim() && address.trim() && login.trim() && password.trim()) {
      if(!usersData.find((el) => el.email === email || el.login === login)) {
        const newObj = {
          id: new Date().getTime().toString(),
          firstName,
          lastName,
          age,
          email,
          gender,
          address,
          login,
          password,
          active: "",
          friends: [],
          requests: [],
          profileImage: "",
          images: [],
        };
        dispatch(postNewUserData(newObj));
        navigate("/login");
      }
    }
    e.target.reset();
  };

  return (
    <section class="signup">
      
      <div class="container">
      <h1>Registration</h1>
        <form onSubmit={handlerSubmit}>
          <div className="partOfForm">
            <div className="regblog">
            <div class="form-group">
                            <input type="text" class="form-input" name="firstName"  placeholder="First Name"/>
                        </div>
            
              <div class="form-group">
                            <input type="text" class="form-input" name="lastName"  placeholder="Last Name"/>
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-input" name="age"  placeholder="Age"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-input" name="gender"  placeholder="Gender"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-input" name="email"  placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <input type="address" class="form-input" name="address"  placeholder="Address"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-input" name="login"  placeholder="Login"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-input" name="password"  placeholder="Password"/>
                        </div>
                        <div class="form-group2">
                        <button className="button-85" role="button">Submit</button> 
                        </div>
                        
            </div>  
          </div>
          
        </form>
        <div class="form-group2">
          <button className="button-86" role="button">
            <Link to='/login'>
              Log In.
            </Link>
          </button>   
        </div>
      </div>
    </section>
  );
};

export default Registration;
