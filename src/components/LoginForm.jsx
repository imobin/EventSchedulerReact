import axios from "axios";
import React, { useState } from "react";

export default function LoginForm() {
  const [isAuth, setisAuth] = useState(false);
  function getLogData(e) {
    e.preventDefault();
    const userloginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post("http://localhost:3001/api/auth/login", userloginData)
      .then((i) => {
        if (i.data.token.length > 0) {
          alert(
            `Welcome ${userloginData.email} \n your token is:\n ${i.data.token}`
          );
        } else{alert("Email or password is wrong")}
      });
  }

  return (
    <div>
      <form onSubmit={getLogData}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
}
