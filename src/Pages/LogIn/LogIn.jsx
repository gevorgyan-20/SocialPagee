import React from "react";
import "./logIn.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsersData } from "../../Store/allUsersDataSlice/allUsersDataSlice";
import { postLoginData } from "../../Store/allUsersDataSlice/API";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const { usersData } = useSelector(selectAllUsersData);
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const {
      login: { value: login },
      password: { value: password },
    } = e.target;
    const loginUserData = usersData.find((el) => el.login === login && el.password === password);
    if (loginUserData) {
      dispatch(postLoginData(loginUserData));
      navigate("/");
    }
    e.target.reset();
  };

  return (
    <section className="Loginbox">
      <div className="Loginsec">
        <h1 className="title">Login</h1>
        <form id="form" onSubmit={handlerSubmit}>
          <div className="input-control">
            <label>Login</label>
            <input type="text" placeholder="username" name="login" id="username" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div className="input-control">
            <label>Password</label>
            <input type="password" name="password" placeholder="password" id="password" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
